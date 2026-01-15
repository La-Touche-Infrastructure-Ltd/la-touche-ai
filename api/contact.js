export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 1. Check for required env var
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("Missing WEB3FORMS_ACCESS_KEY environment variable");
    return res.status(500).json({ error: "Missing WEB3FORMS_ACCESS_KEY" });
  }

  try {
    // Parse body if it's a string
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON body" });
      }
    }

    const { name, email, message } = body || {};

    // 2. Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, message" });
    }

    // 3. Build payload with subject
    const payload = {
      access_key: accessKey,
      name,
      email,
      message,
      subject: "La Touche - Contact Form",
    };

    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Read response as text first, then parse
    const responseText = await r.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { raw: responseText };
    }

    // 4. Handle non-200 from Web3Forms
    if (!r.ok) {
      console.error("Web3Forms error:", r.status, responseText);
      return res.status(502).json({
        error: "Web3Forms rejected",
        status: r.status,
        details: data,
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}

