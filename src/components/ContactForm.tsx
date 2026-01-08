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

// Web3Forms public access key - designed for client-side usage with domain restrictions
const WEB3FORMS_ACCESS_KEY = "6fbaa9c7-23c3-4f2c-976b-386e23aca61f";

// Input length limits for validation
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;

// Rate limiting: minimum time between submissions (in milliseconds)
const RATE_LIMIT_MS = 30000; // 30 seconds

// Pattern to detect HTML/script tags
const HTML_SCRIPT_PATTERN = /<[^>]*>|<script|<\/script|javascript:|on\w+\s*=/i;

// Sanitize input by removing HTML/script tags and trimming
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
};

// Check if input contains potentially malicious content
const containsHtmlOrScript = (input: string): boolean => {
  return HTML_SCRIPT_PATTERN.test(input);
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    problem: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "rate_limited">("idle");
  const lastSubmitTime = useRef<number>(0);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedProblem = formData.problem.trim();
    
    // Name validation (optional but with length limit and no HTML)
    if (trimmedName) {
      if (trimmedName.length > MAX_NAME_LENGTH) {
        newErrors.name = `Name must be ${MAX_NAME_LENGTH} characters or less.`;
      } else if (containsHtmlOrScript(trimmedName)) {
        newErrors.name = "Name contains invalid characters.";
      }
    }
    
    // Email validation
    if (!trimmedEmail || !validateEmail(trimmedEmail)) {
      newErrors.email = "Please add a valid email so La Touche can contact you.";
    } else if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email must be ${MAX_EMAIL_LENGTH} characters or less.`;
    }
    
    // Message validation (min length, max length, no HTML/script)
    if (trimmedProblem.length < MIN_MESSAGE_LENGTH) {
      newErrors.problem = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    } else if (trimmedProblem.length > MAX_MESSAGE_LENGTH) {
      newErrors.problem = `Message must be ${MAX_MESSAGE_LENGTH} characters or less.`;
    } else if (containsHtmlOrScript(trimmedProblem)) {
      newErrors.problem = "Message contains invalid characters.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - silent success for bots
    if (formData.honeypot) {
      setStatus("success");
      return;
    }
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setStatus("rate_limited");
      return;
    }
    
    if (!validate()) return;
    
    setStatus("submitting");
    lastSubmitTime.current = now;
    
    try {
      // Sanitize all inputs before sending
      const sanitizedName = sanitizeInput(formData.name) || "Not provided";
      const sanitizedEmail = formData.email.trim();
      const sanitizedMessage = sanitizeInput(formData.problem);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New La Touche holding page message",
          from_name: "La Touche Holding Page",
          replyto: sanitizedEmail,
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
        }),
      });
      
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

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          {/* Honeypot field */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange("honeypot")}
            />
          </div>
          
          <div className="field">
            <label htmlFor="name" className="field-label">Your name (optional)</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="First name is fine"
              autoComplete="name"
              maxLength={MAX_NAME_LENGTH}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive mt-1">
                {errors.name}
              </p>
            )}
          </div>
          
          <div className="field">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="Where should we send this?"
              autoComplete="email"
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive mt-1">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="field">
            <label htmlFor="problem" className="field-label">What do you wish would disappear?</label>
            <textarea
              id="problem"
              value={formData.problem}
              onChange={handleChange("problem")}
              placeholder="A task, a message, or a document. Paste it here."
              maxLength={MAX_MESSAGE_LENGTH}
              aria-describedby={errors.problem ? "problem-error" : undefined}
            />
            {errors.problem && (
              <p id="problem-error" className="text-sm text-destructive mt-1">
                {errors.problem}
              </p>
            )}
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="contact-submit"
            >
              {status === "submitting" ? "Sending..." : "Get The Touch"}
            </button>
          </div>
          
          <p className="contact-reassurance">
            We write to you only when there's something real to share, and we never sell or share your details with advertisers.
          </p>
          
          {status === "success" && (
            <p className="text-success text-sm text-center">
              Thank you. We have received your message and will reply personally.
            </p>
          )}
          
          {status === "error" && (
            <p className="text-destructive text-sm text-center">
              Something went wrong. Please email hello@latouche.ai instead.
            </p>
          )}
          
          {status === "rate_limited" && (
            <p className="text-destructive text-sm text-center">
              Please wait a moment before submitting again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
