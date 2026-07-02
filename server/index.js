import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const port = Number(process.env.PORT || 8787);
const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

const app = express();

app.disable("x-powered-by");
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cors());
app.use(express.json({ limit: "64kb" }));

app.get("/api/", (_request, response) => {
  response.json({ message: "Delta Impex Inc. API is running" });
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.post("/api/enquiries", async (request, response, next) => {
  try {
    const input = request.body ?? {};
    const required = [
      "full_name",
      "phone",
      "email",
      "machine_interested",
      "message",
    ];
    const missing = required.filter(
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
      return response.status(422).json({
        detail: [{ loc: ["body", "email"], msg: "Invalid email address" }],
      });
    }

    const enquiry = {
      full_name: input.full_name.trim().slice(0, 160),
      phone: input.phone.trim().slice(0, 60),
      email: input.email.trim().toLowerCase().slice(0, 254),
      company:
        typeof input.company === "string" ? input.company.trim().slice(0, 200) : "",
      machine_interested: input.machine_interested.trim().slice(0, 160),
      message: input.message.trim().slice(0, 5000),
      product_slug:
        typeof input.product_slug === "string"
          ? input.product_slug.trim().slice(0, 200)
          : null,
    };

    if (!googleSheetsWebhookUrl) {
      return response.status(503).json({
        detail: "Enquiry service is unavailable",
      });
    }

    const sheetResponse = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
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

    return response.status(201).json({ ok: true, ...enquiry });
  } catch (error) {
    return next(error);
  }
});

app.use(express.static(distDir, { maxAge: "1h" }));
app.use(async (_request, response, next) => {
  try {
    await fs.access(path.join(distDir, "index.html"));
    response.sendFile(path.join(distDir, "index.html"));
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  if (error?.code === "ENOENT") {
    return response.status(503).json({
      detail: "Frontend build is unavailable. Run npm run build first.",
    });
  }
  console.error(error);
  return response.status(500).json({ detail: "Internal server error" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Delta Impex Inc. server listening on http://localhost:${port}`);
});
