import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Headphones,
  TrendingUp,
} from "lucide-react";
import { CATEGORIES } from "../data/catalog";
import SEO from "../components/SEO";
import { SITE } from "../data/site";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "We focus on machines that are useful, reliable, and suitable for industrial needs.",
  },
  {
    icon: Handshake,
    title: "Trust",
    text: "We believe in clear communication and honest business relationships.",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "We guide customers in choosing the right machine for their requirement.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "We help businesses grow with better machinery and production support.",
  },
];

const RANGE = [
  "Plastic Processing Machine",
  "Wood Working Machines",
  "Signage Machine",
  "CNC Machines",
  "Sanding Machines",
  "Router Machines",
  "Drill Machines",
  "SPM Machines",
  "Circular Saw Machines",
  "Laser Machines",
];

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE.url}/about`,
    name: "About Delta Tech Force",
    description: "Learn about Delta Tech Force, an industrial machinery supplier based in Jalandhar, Punjab.",
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <div data-testid="page-about">
      <SEO
        title="About Delta Tech Force | Industrial Machinery Company"
        description="Learn about Delta Tech Force, a Jalandhar-based supplier of new and used CNC, plastic, woodworking, laser, sanding and circular saw machines."
        path="/about"
        image="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933059/delta-impex/images/pages/about/hero-w2000.jpg"
        structuredData={aboutSchema}
      />
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0B131E] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933059/delta-impex/images/pages/about/hero-w2000.jpg"
            alt="Delta Tech Force workshop"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/80 to-[#0B131E]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="section-label di-overline text-[#D4A017]">
            About Us
          </span>
          <h1
            data-testid="about-hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mt-6"
          >
            About <span className="text-[#D4A017]">Delta Tech Force</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mt-6 leading-relaxed">
            Reliable Industrial Machinery Solutions for Businesses.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 md:py-28" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="section-label di-overline text-[#D4A017]">
              Company
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4 leading-tight">
              Who We Are
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mt-6">
              Delta Tech Force is a professional industrial machinery company
              dealing in a wide range of machines for different industries. We
              showcase plastic processing machines, woodworking machines, and
              signage machines with subcategories like CNC, sanding, router,
              drill, SPM, circular saw, and laser machines. Our focus
              is to provide customers with reliable machinery options that
              support production, manufacturing, cutting, finishing, and
              processing requirements.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933061/delta-impex/images/pages/about/workshop-w1400.png"
              alt="Company"
              className="w-full h-[460px] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F8FAFC] py-20 md:py-28" data-testid="section-what-we-do">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label di-overline text-[#D4A017] justify-center">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
            A complete machinery showcase platform
          </h2>
          <p className="text-[#475569] text-base md:text-lg leading-relaxed mt-6 text-left">
            We help businesses explore and enquire about different types of
            industrial machines. Whether the customer needs a CNC machine for
            precision work, a plastic processing machine for production, a
            woodworking machine for furniture or material work, a signage laser
            machine for cutting and engraving, a sanding machine for finishing,
            or a circular saw machine for cutting, Delta Tech Force provides a clean and
            organized platform to showcase available machinery.
          </p>
        </div>
      </section>

      {/* MACHINE RANGE */}
      <section className="bg-white py-20 md:py-28" data-testid="section-machine-range">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-label di-overline text-[#D4A017]">
              Catalogue
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
              Our Machine Range
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {RANGE.map((name, i) => (
              <div
                key={name}
                data-testid={`range-${i}`}
                className="bg-[#0B131E] text-white p-6 rounded-sm hover:bg-[#1A2332] transition-colors border border-white/5 hover:border-[#D4A017]/40 group"
              >
                <span className="di-overline text-[#D4A017]">0{i + 1}</span>
                <h3 className="font-heading text-lg font-bold mt-3 group-hover:text-[#D4A017] transition-colors">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#0B131E] py-20 md:py-28 relative overflow-hidden" data-testid="section-mission-vision">
        <div className="absolute inset-0 di-grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#131C28] border border-white/10 p-10 rounded-sm">
            <Target className="w-10 h-10 text-[#D4A017] mb-6" />
            <span className="di-overline text-[#D4A017]">Mission</span>
            <h3 className="font-heading text-3xl font-bold text-white mt-3">
              Our Mission
            </h3>
            <p className="text-white/70 leading-relaxed mt-5">
              Our mission is to provide dependable machinery solutions that
              help businesses improve productivity, machine efficiency, and
              industrial output. We aim to make machine selection easier by
              presenting clear information, organized product categories, and
              direct enquiry options.
            </p>
          </div>
          <div className="bg-[#131C28] border border-white/10 p-10 rounded-sm">
            <Eye className="w-10 h-10 text-[#D4A017] mb-6" />
            <span className="di-overline text-[#D4A017]">Vision</span>
            <h3 className="font-heading text-3xl font-bold text-white mt-3">
              Our Vision
            </h3>
            <p className="text-white/70 leading-relaxed mt-5">
              Our vision is to become a trusted name in industrial machinery
              by offering quality machines, professional support, and
              transparent communication to customers from different
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F8FAFC] py-20 md:py-28" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label di-overline text-[#D4A017] justify-center">
              Principles
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  data-testid={`value-${i}`}
                  className="bg-white border border-[#E2E8F0] p-8 rounded-sm hover:border-[#D4A017] hover:-translate-y-1 transition-all"
                >
                  <span className="w-12 h-12 grid place-items-center bg-[#0B131E] text-[#D4A017] rounded-sm">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#0B131E] mt-6">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mt-3">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B131E] py-20 md:py-28" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Want to Know More About Our Machines?
          </h2>
          <Link
            to="/contact"
            data-testid="about-cta-contact"
            className="mt-10 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Contact Delta Tech Force <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
