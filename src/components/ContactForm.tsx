import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  problem: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  problem?: string;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;

const RATE_LIMIT_MS = 30000;

const HTML_SCRIPT_PATTERN =
  /<[^>]*>|<script|<\/script|javascript:|on\w+\s*=/i;

const sanitizeInput = (input: string): string =>
  input
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();

const containsHtmlOrScript = (input: string): boolean =>
  HTML_SCRIPT_PATTERN.test(input);

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    problem: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "rate_limited"
  >("idle");

  const lastSubmitTime = useRef<number>(0);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const problem = formData.problem.trim();

    if (name) {
      if (name.length > MAX_NAME_LENGTH) {
        newErrors.name = `Name must be ${MAX_NAME_LENGTH} characters or less.`;
      } else if (containsHtmlOrScript(name)) {
        newErrors.name = "Name contains invalid characters.";
      }
    }

    if (!email || !validateEmail(email)) {
      newErrors.email =
        "Please add a valid email so La Touche can contact you.";
    } else if (email.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email must be ${MAX_EMAIL_LENGTH} characters or less.`;
    }

    if (problem.length < MIN_MESSAGE_LENGTH) {
      newErrors.problem = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    } else if (problem.length > MAX_MESSAGE_LENGTH) {
      newErrors.problem = `Message must be ${MAX_MESSAGE_LENGTH} characters or less.`;
    } else if (containsHtmlOrScript(problem)) {
      newErrors.problem = "Message contains invalid characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setStatus("rate_limited");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");
    lastSubmitTime.current = now;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({
            name: sanitizeInput(formData.name) || "Not provided",
            email: formData.email.trim(),
            message: sanitizeInput(formData.problem),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          problem: "",
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>What's taking up your time right now?</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange("honeypot")}
            />
          </div>

          <div className="field">
            <label>Your name (optional)</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              maxLength={MAX_NAME_LENGTH}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="field">
            <label>What do you wish would disappear?</label>
            <textarea
              value={formData.problem}
              onChange={handleChange("problem")}
              maxLength={MAX_MESSAGE_LENGTH}
            />
            {errors.problem && <p>{errors.problem}</p>}
          </div>

          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Get The Touch"}
          </button>

          {status === "success" && (
            <p>Thank you. We have received your message.</p>
          )}
          {status === "error" && (
            <p>Something went wrong. Please email hello@latouche.ai</p>
          )}
          {status === "rate_limited" && (
            <p>Please wait before submitting again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
