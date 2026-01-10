 export const config = { runtime: "nodejs" };

interface ContactRequest {
  name?: string;
  email?: string;
  message?: string;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY not configured");
    return res.status(500).json({ success: false, error: "Server configuration error" });
  }

  try {
    const body: ContactRequest = req.body;

    const name = sanitize(body.name ?? "");
    const email = (body.email ?? "").trim();
    const message = sanitize(body.message ?? "");

    // Validation
    if (name.length > MAX_NAME_LENGTH) {
      return res.status(400).json({ success: false, error: "Name too long" });
    }

    if (!email || !isValidEmail(email) || email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({ success: false, error: "Invalid email" });
    }

    if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({ success: false, error: "Message length invalid" });
    }

    console.log("Submitting to Web3Forms for:", email);

    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New La Touche holding page message",
        from_name: "La Touche Holding Page",
        replyto: email,
        name: name || "Not provided",
        email,
        message,
      }),
    });

    const result = await upstream.json();
    console.log("Web3Forms response:", result);

    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: "Failed to send message" });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
