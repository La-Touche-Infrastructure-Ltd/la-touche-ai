import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  sector: string;
  document: string;
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
    sector: "",
    document: "",
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
          subject: "New La Touche demo request",
          from_name: "La Touche Demo Request",
          replyto: formData.email.trim(),
          name: formData.name.trim() || "Not provided",
          email: formData.email.trim(),
          sector: formData.sector.trim() || "Not provided",
          document: formData.document.trim() || "Not provided",
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          sector: "",
          document: "",
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

  if (status === "success") {
    return (
      <section id="request-demo" className="lt-shell">
        <div className="lt-card lt-form-card">
          <div className="lt-success" role="status" aria-live="polite">
            <h3>Thank you for reaching out.</h3>
            <p>We will come back to you soon with the next steps and a time for your demo.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-demo" className="lt-shell">
      <div className="lt-card lt-form-card">
        <h2>Request a demo</h2>
        <p className="lt-muted lt-form-intro">Tell us your sector and the document you want to see transformed.</p>
        
        <form onSubmit={handleSubmit} className="lt-form">
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
          
          <div className="lt-field">
            <label htmlFor="name" className="lt-label">Name (optional)</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="Your name"
              autoComplete="name"
              className="lt-input"
            />
          </div>
          
          <div className="lt-field">
            <label htmlFor="email" className="lt-label">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              autoComplete="email"
              required
              aria-describedby={errors.email ? "email-error" : undefined}
              className="lt-input"
            />
            {errors.email && (
              <p id="email-error" className="lt-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="lt-field">
            <label htmlFor="sector" className="lt-label">Sector (optional)</label>
            <input
              id="sector"
              type="text"
              value={formData.sector}
              onChange={handleChange("sector")}
              placeholder="e.g. Healthcare, Education, Finance"
              className="lt-input"
            />
          </div>
          
          <div className="lt-field">
            <label htmlFor="document" className="lt-label">Document to transform (optional)</label>
            <textarea
              id="document"
              value={formData.document}
              onChange={handleChange("document")}
              placeholder="e.g. Fire Safety Policy, Staff Handbook, GDPR Policy"
              className="lt-textarea"
            />
          </div>
          
          <div className="lt-form-actions">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="lt-btn"
            >
              {status === "submitting" ? "Sending..." : "Request demo"}
            </button>
          </div>
          
          <p className="lt-reassurance">
            We write to you only when there's something real to share, and we never sell or share your details with advertisers.
          </p>
          
          {status === "error" && (
            <p className="lt-error lt-error-message">
              Something went wrong. Please email hello@latouche.ai instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
