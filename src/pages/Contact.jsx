import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { findProduct } from "../data/catalog";
import { CONTACT_DETAILS, CONTACT_LABELS, hasContactValue } from "../data/contact";
import { Clock, MessageCircle } from "../components/icons/legacy";
import SEO from "../components/SEO";
import { SITE } from "../data/site";
import LocationMap from "../components/LocationMap";

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
].filter((contact) => hasContactValue(contact.value));

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
      <SEO
        title="Contact Machine Supplier in Jalandhar | Delta Impex Incorporation"
        description="Contact Delta Impex Incorporation, a machine manufacturer, seller and supplier in Jalandhar, Punjab for CNC, plastic moulding, woodworking, laser, sanding and circular saw machine enquiries."
        path="/contact"
        image="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933062/delta-impex/images/pages/contact/hero-w2000.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE.url}/contact`,
          name: "Contact Delta Impex Incorporation",
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }}
      />
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0B131E] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933062/delta-impex/images/pages/contact/hero-w2000.jpg"
            alt="Contact Delta Impex Incorporation"
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
            Contact <span className="text-[#D4A017]">Delta Impex Incorporation</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mt-6 leading-relaxed">
            Get in touch with a Jalandhar-based industrial machine seller and
            supplier for machine enquiries, product details, availability, and
            business requirements.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-[#F8FAFC] py-20" data-testid="section-contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div className="w-full h-[400px] overflow-hidden border border-[#E2E8F0] rounded-sm">
            <LocationMap />
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
            suitable machine category, Delta Impex Incorporation is ready to help.
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
