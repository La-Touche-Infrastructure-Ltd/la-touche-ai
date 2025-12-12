import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  problem: string;
  honeypot: string;
}

interface FormErrors {
  email?: string;
}

const WEB3FORMS_ACCESS_KEY = "3df537a5-4a45-4be7-9170-c6a03fbfb370";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    problem: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Please add a valid email so La Touche can contact you.";
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
    
    if (!validate()) return;
    
    setStatus("submitting");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New La Touche holding page message",
          from_name: "La Touche Holding Page",
          replyto: formData.email.trim(),
          name: formData.name.trim() || "Not provided",
          email: formData.email.trim(),
          message: formData.problem.trim() || "No message provided",
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
        <h2>Stay close as we build</h2>
        
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
            <label htmlFor="name" className="field-label">Name (optional)</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          
          <div className="field">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
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
            <label htmlFor="problem" className="field-label">What problem would you love La Touche to remove?</label>
            <textarea
              id="problem"
              value={formData.problem}
              onChange={handleChange("problem")}
              placeholder="Tell us one task or document you wish could disappear."
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="contact-submit"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
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
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
