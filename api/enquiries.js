const REQUIRED_FIELDS = [
  "full_name",
  "phone",
  "email",
  "machine_interested",
  "message",
];

const clean = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ detail: "Method not allowed" });
  }

  try {
    const input = request.body ?? {};
    const missing = REQUIRED_FIELDS.filter(
      (field) => typeof input[field] !== "string" || !input[field].trim(),
    );

    if (missing.length > 0) {
      return response.status(422).json({
        detail: missing.map((field) => ({
          loc: ["body", field],
          msg: "Field required",
          type: "missing",
        })),
      });
    }

    const email = clean(input.email, 254).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response.status(422).json({
        detail: [{ loc: ["body", "email"], msg: "Invalid email address" }],
      });
    }

    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!googleSheetsWebhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
      return response.status(503).json({ detail: "Enquiry service is unavailable" });
    }

    const enquiry = {
      full_name: clean(input.full_name, 160),
      phone: clean(input.phone, 60),
      email,
      company: clean(input.company, 200),
      machine_interested: clean(input.machine_interested, 160),
      message: clean(input.message, 5000),
      product_slug: clean(input.product_slug, 200) || null,
    };

    const sheetResponse = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
      signal: AbortSignal.timeout(15000),
    });

    if (!sheetResponse.ok) {
      throw new Error(
        `Google Sheets webhook returned HTTP ${sheetResponse.status}`,
      );
    }

    let sheetResult = null;
    try {
      sheetResult = await sheetResponse.json();
    } catch {
      sheetResult = { ok: true };
    }

    if (sheetResult?.ok === false) {
      throw new Error(sheetResult.error || "Google Sheets webhook failed");
    }

    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return response.status(500).json({ detail: "Could not submit enquiry" });
  }
}
