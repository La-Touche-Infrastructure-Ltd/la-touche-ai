import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Get your free access key from https://web3forms.com
// Enter hello@latouche.ai to receive submissions
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

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
    
    if (!formData.name.trim()) {
      newErrors.name = "Please add your name so we know who to reply to.";
    }
    
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
          name: formData.name.trim(),
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
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Stay close as we build
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you would like to hear when La Touche is ready for pilots or you want to share the problems you face with documents and workflows, you can reach out directly.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
          
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              className="bg-background border-border focus:ring-primary"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email <span className="text-primary">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              className="bg-background border-border focus:ring-primary"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organisation" className="text-foreground">
              Organisation
            </Label>
            <Input
              id="organisation"
              type="text"
              value={formData.organisation}
              onChange={handleChange("organisation")}
              className="bg-background border-border focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              What problem would you love La Touche to remove? <span className="text-primary">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange("message")}
              rows={5}
              className="bg-background border-border focus:ring-primary resize-none"
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full md:w-auto px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </Button>
          
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
          
          <p className="text-sm text-muted-foreground pt-4">
            By sending this message you agree that La Touche may store your details and contact you about pilots and related services.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
