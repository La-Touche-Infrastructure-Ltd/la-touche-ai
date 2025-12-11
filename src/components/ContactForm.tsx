import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  problem: string;
  honeypot: string;
}

interface FormErrors {
  email?: string;
  problem?: string;
}

const WEB3FORMS_ACCESS_KEY = "3df537a5-4a45-4be7-9170-c6a03fbfb370";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organisation: "",
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
    
    if (!formData.problem.trim()) {
      newErrors.problem = "Please tell us what problem you'd like La Touche to solve.";
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
          organisation: formData.organisation.trim() || "Not provided",
          message: formData.problem.trim(),
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organisation: "",
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
        
        <p>
          If you would like to hear when La Touche is ready for pilots or you want to share the problems you face with documents and workflows, you can reach out directly.
        </p>
        
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
            <label htmlFor="name" className="field-label">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="Your name (optional)"
              autoComplete="name"
            />
          </div>
          
          <div className="field">
            <label htmlFor="email" className="field-label">Email *</label>
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
            <label htmlFor="organisation" className="field-label">Organisation</label>
            <input
              id="organisation"
              type="text"
              value={formData.organisation}
              onChange={handleChange("organisation")}
              placeholder="Where you work (optional)"
              autoComplete="organization"
            />
          </div>
          
          <div className="field">
            <label htmlFor="problem" className="field-label">What problem would you love La Touche to remove? *</label>
            <textarea
              id="problem"
              value={formData.problem}
              onChange={handleChange("problem")}
              placeholder="Tell us one task or document you wish could disappear."
              required
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
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </div>
          
          <p className="contact-reassurance">
            We write rarely, only when there is something real to show you, and we never sell or share your details with advertisers.
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
          
          <p className="contact-consent">
            By sending this message you agree that La Touche may store your details and contact you about pilots and related services.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
