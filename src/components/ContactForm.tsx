import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY = "3df537a5-4a45-4be7-9170-c6a03fbfb370";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organisation: "",
    message: "",
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
    
    if (!formData.message.trim()) {
      newErrors.message = "Tell us briefly what problem you would love La Touche to remove.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, silently reject
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
          subject: "La Touche – website message",
          from_name: "La Touche Website",
          replyto: formData.email.trim(),
          name: formData.name.trim() || "Not provided",
          email: formData.email.trim(),
          organisation: formData.organisation.trim() || "Not provided",
          message: formData.message.trim(),
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organisation: "",
          message: "",
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
    <section id="contact" className="contact-section px-6">
      <div className="contact-card">
        <h2 className="text-3xl md:text-4xl text-foreground">
          Stay close as we build
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          If you would like to hear when La Touche is ready for pilots or you want to share the problems you face with documents and workflows, you can reach out directly.
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Honeypot field - invisible to users */}
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
          
          <div className="space-y-1">
            <label htmlFor="name" className="text-foreground">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              aria-label="Name"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-foreground">
              Email <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="organisation" className="text-foreground">
              Organisation
            </label>
            <input
              id="organisation"
              type="text"
              value={formData.organisation}
              onChange={handleChange("organisation")}
              aria-label="Organisation"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="message" className="text-foreground">
              What problem would you love La Touche to remove? <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange("message")}
              rows={5}
              required
              placeholder="Tell us one task or document you wish could disappear."
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={status === "submitting"}
            className="contact-submit"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
          
          <p className="contact-reassurance">
            We write rarely, only when there is something real to show you, and we never sell or share your details with advertisers.
          </p>
          
          {status === "success" && (
            <p className="text-success text-sm">
              Thank you. We have received your message and will reply personally.
            </p>
          )}
          
          {status === "error" && (
            <p className="text-destructive text-sm">
              Something went wrong. Please email hello@latouche.ai instead.
            </p>
          )}
          
          <p className="text-sm text-muted-foreground pt-2">
            By sending this message you agree that La Touche may store your details and contact you about pilots and related services.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
