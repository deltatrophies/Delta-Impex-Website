import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, MapPinned } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { findProduct } from "../data/catalog";
import { CONTACT_DETAILS, CONTACT_LABELS } from "../data/contact";
import { Clock, MessageCircle } from "../components/icons/legacy";

const CONTACTS = [
  {
    icon: Phone,
    label: CONTACT_LABELS.phone,
    value: CONTACT_DETAILS.phone,
    testid: "contact-phone",
  },
  {
    icon: Mail,
    label: CONTACT_LABELS.email,
    value: CONTACT_DETAILS.email,
    testid: "contact-email",
  },
  {
    icon: MapPin,
    label: CONTACT_LABELS.address,
    value: CONTACT_DETAILS.address,
    testid: "contact-address",
  },
  {
    icon: MessageCircle,
    label: CONTACT_LABELS.whatsapp,
    value: CONTACT_DETAILS.whatsapp,
    testid: "contact-whatsapp",
  },
  {
    icon: Clock,
    label: CONTACT_LABELS.businessHours,
    value: CONTACT_DETAILS.businessHours,
    testid: "contact-hours",
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const productSlug = searchParams.get("product");
  const product = productSlug ? findProduct(productSlug) : null;

  useEffect(() => {
    if (location.hash === "#enquiry" || productSlug) {
      window.setTimeout(() => {
        document.getElementById("enquiry")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  }, [location.hash, productSlug]);

  return (
    <div data-testid="page-contact" className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0B131E] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/pages/contact/hero-w2000.jpg"
            alt="Contact Delta Impex"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/85 to-[#0B131E]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="section-label di-overline text-[#D4A017]">
            Get In Touch
          </span>
          <h1
            data-testid="contact-hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mt-6"
          >
            Contact <span className="text-[#D4A017]">Delta Impex</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mt-6 leading-relaxed">
            Get in touch with us for machine enquiries, product details,
            availability, and business requirements.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-[#F8FAFC] py-20" data-testid="section-contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CONTACTS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  data-testid={c.testid}
                  className="bg-white border border-[#E2E8F0] p-6 rounded-sm hover:border-[#D4A017] hover:-translate-y-1 transition-all"
                >
                  <span className="w-11 h-11 grid place-items-center bg-[#0B131E] text-[#D4A017] rounded-sm">
                    <Icon className="w-5 h-5" />
                  </span>
                  <p className="di-overline text-[#475569] mt-5">{c.label}</p>
                  <p className="font-heading text-base font-bold text-[#0B131E] mt-2 break-words">
                    {c.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section
        id="enquiry"
        className="bg-white py-20 scroll-mt-24"
        data-testid="section-enquiry-form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="section-label di-overline text-[#D4A017]">
              Send Enquiry
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4 leading-tight">
              Tell us about your <br className="hidden md:block" />
              machine <span className="text-[#D4A017]">requirement.</span>
            </h2>
            {product && (
              <p
                data-testid="contact-product-context"
                className="mt-5 inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/30 px-4 py-2 rounded-sm text-sm text-[#0B131E]"
              >
                <span className="di-overline text-[#D4A017]">
                  Enquiring about
                </span>
                <span className="font-bold">{product.name}</span>
              </p>
            )}
            <p className="text-[#475569] mt-6 leading-relaxed max-w-xl">
              Fill out the form and our team will reach out with machine
              details, availability, and pricing tailored to your industrial
              needs.
            </p>
          </div>
          <div className="lg:col-span-5">
            <EnquiryForm
              productSlug={product?.slug}
              defaultMachine={product?.categoryName}
            />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-[#F8FAFC] pb-20" data-testid="section-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="section-label di-overline text-[#D4A017]">
              Find Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B131E] tracking-tight mt-4">
              Our Location
            </h2>
          </div>
          <div
            data-testid="map-placeholder"
            className="di-img-placeholder w-full h-[400px] border border-[#E2E8F0] rounded-sm"
          >
            <div className="relative z-10 text-center">
              <MapPinned className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
              <p className="di-overline text-white/80">
                [Google Map Location Placeholder]
              </p>
              <p className="text-white/55 text-sm mt-2 max-w-md mx-auto">
                Map embed will appear here once location coordinates are added.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B131E] py-20" data-testid="section-contact-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Discuss Your Machine Requirement
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Whether you need a new machine, old machine, or guidance about a
            suitable machine category, Delta Impex is ready to help.
          </p>
          <a
            href="#enquiry"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("enquiry")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            data-testid="contact-cta-contact-now"
            className="mt-10 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Contact Now
          </a>
        </div>
      </section>
    </div>
  );
}
