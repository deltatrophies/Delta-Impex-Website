import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { submitEnquiry } from "../lib/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const MACHINE_OPTIONS = [
  "CNC Machine",
  "Plastic Processing Machine",
  "Plastic Injection Moulding Machine",
  "3D Printer",
  "Hot Hopper",
  "Hot Runner System",
  "Injection Moulding Robotic Arm",
  "Plastic Crusher",
  "Robotic Spray Arm",
  "UV Dryer",
  "UV Printer",
  "Wood Working Machine",
  "Cold Press Machine",
  "Edge Bending Machine",
  "Hot Press Machine",
  "Multi-Gun Spray Paint Machine",
  "Signage Machine",
  "Laser Machine",
  "Sanding Machine",
  "Circular Saw Machine",
  "SPM (Special Purpose Machine)",
  "Old Machine",
  "New Machine",
  "Other",
];

const empty = {
  full_name: "",
  phone: "",
  email: "",
  company: "",
  machine_interested: "",
  message: "",
};

const sanitizePhone = (value) => value.replace(/[^\d]/g, "").slice(0, 15);
const isValidPhone = (value) => {
  const digits = sanitizePhone(value);
  return digits.length >= 10 && digits.length <= 15;
};

export default function EnquiryForm({ productSlug, defaultMachine, compact = false }) {
  const [form, setForm] = useState({
    ...empty,
    machine_interested: defaultMachine || "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k, v) =>
    setForm((f) => ({ ...f, [k]: k === "phone" ? sanitizePhone(v) : v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.full_name ||
      !form.phone ||
      !form.email ||
      !form.machine_interested ||
      !form.message
    ) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      toast.error("Please enter a valid phone number with 10 to 15 digits.");
      return;
    }
    setLoading(true);
    try {
      await submitEnquiry({
        ...form,
        product_slug: productSlug || null,
      });
      setSuccess(true);
      toast.success("Enquiry sent! Our team will get back to you shortly.");
      setForm({ ...empty, machine_interested: defaultMachine || "" });
    } catch (err) {
      toast.error(
        err?.response?.data?.detail?.[0]?.msg ||
          "Could not send enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const submitOnEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  if (success) {
    return (
      <div
        data-testid="enquiry-success"
        className="border border-[#D4A017]/40 bg-[#FFFBEB] p-8 rounded-sm text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-[#0B131E] mb-2">
          Enquiry Received
        </h3>
        <p className="text-[#475569] mb-6">
          Thank you for contacting Delta Tech Force. Our team will reach out to you
          shortly with machine details and guidance.
        </p>
        <button
          onClick={() => setSuccess(false)}
          data-testid="enquiry-send-another"
          className="text-sm font-bold uppercase tracking-wider text-[#0B131E] underline underline-offset-4 decoration-[#D4A017]"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full bg-white border border-[#E2E8F0] focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] rounded-sm px-4 py-3 text-[#0B131E] placeholder:text-[#94A3B8] outline-none transition-all text-sm";
  const labelCls = "block text-xs font-bold uppercase tracking-wider text-[#0B131E] mb-2";

  return (
    <form
      onSubmit={onSubmit}
      data-testid="enquiry-form"
      className={`bg-white ${
        compact ? "" : "border border-[#E2E8F0] p-6 md:p-10 rounded-sm shadow-xl"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            data-testid="enquiry-full-name"
            type="text"
            value={form.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            placeholder="Your full name"
            className={inputCls}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input
            data-testid="enquiry-phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10,15}"
            minLength={10}
            maxLength={15}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="9876543210"
            className={inputCls}
            title="Enter 10 to 15 digits only"
            required
          />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input
            data-testid="enquiry-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            className={inputCls}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Company Name</label>
          <input
            data-testid="enquiry-company"
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company / Organization"
            className={inputCls}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Machine Interested In *</label>
          <Select
            value={form.machine_interested}
            onValueChange={(v) => update("machine_interested", v)}
          >
            <SelectTrigger
              data-testid="enquiry-machine-select"
              className="w-full bg-white border-[#E2E8F0] rounded-sm h-12 text-[#0B131E] focus:ring-1 focus:ring-[#D4A017] focus:border-[#D4A017]"
            >
              <SelectValue placeholder="Select a machine category" />
            </SelectTrigger>
            <SelectContent className="rounded-sm">
              {MACHINE_OPTIONS.map((opt) => (
                <SelectItem
                  key={opt}
                  value={opt}
                  data-testid={`enquiry-machine-opt-${opt.replace(/\s/g, "-").toLowerCase()}`}
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Message / Requirement *</label>
          <textarea
            data-testid="enquiry-message"
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            onKeyDown={submitOnEnter}
            placeholder="Describe your machine requirement, expected usage, and any specifications..."
            className={inputCls}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        data-testid="enquiry-submit"
        className="mt-7 w-full bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] disabled:opacity-60 font-bold text-sm uppercase tracking-wider py-4 rounded-sm transition-colors inline-flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Submit Enquiry <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
