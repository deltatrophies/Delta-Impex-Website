import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Headphones,
  Layers,
  Award,
  Users,
} from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/catalog";
import ProductCard from "../components/ProductCard";
import { Wrench } from "../components/icons/legacy";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../data/blog";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "../data/site";

const TRUST_POINTS = [
  "Old & New Machines",
  "Quality Checked",
  "Industrial Support",
  "Professional Guidance",
];

const FEATURES = [
  {
    icon: Layers,
    title: "Wide Range of Machines",
    text: "Delta Tech Force offers multiple types of machines including CNC, plastic, woodworking, laser, sanding, and circular saw machines.",
  },
  {
    icon: Wrench,
    title: "Old & New Machines Available",
    text: "We provide both old and new machines based on customer requirements and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked Equipment",
    text: "Every machine is presented with focus on quality, usability, and industrial performance.",
  },
  {
    icon: Headphones,
    title: "Professional Guidance",
    text: "Customers get proper guidance in selecting the right machine for their business needs.",
  },
  {
    icon: Factory,
    title: "Industrial Experience",
    text: "Delta Tech Force understands industrial machine requirements and helps businesses find suitable machinery.",
  },
  {
    icon: Users,
    title: "Customer-Focused Service",
    text: "We focus on clear communication, reliable service, and long-term business relationships.",
  },
];

const GALLERY = [
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933009/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    alt: "CNC cutting machine type 1 front view",
    category: "CNC Machines",
    title: "CNC Cutting Machine - Type 1",
    position: "center center",
  },
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933043/delta-impex/images/machinery/wood-working-machines/drill-machine/front-view.png",
    alt: "Drill machine front view",
    category: "Woodworking Machines",
    title: "Single Drill Machine",
    position: "center center",
  },
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933048/delta-impex/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    alt: "Dual drill machine front view",
    category: "Woodworking Machines",
    title: "Dual Drill Machine",
    position: "center 52%",
  },
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933020/delta-impex/images/machinery/laser-machines/laser-machine/lid-closed.png",
    alt: "Laser machine with lid closed",
    category: "Laser Machines",
    title: "Laser Cutting Machine",
    position: "center center",
  },
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933032/delta-impex/images/machinery/sanding-machines/sanding-machine/front-view.png",
    alt: "Sanding machine front view",
    category: "Sanding Machines",
    title: "Industrial Sanding Machine",
    position: "center 52%",
  },
  {
    src: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933038/delta-impex/images/machinery/sawing-machines/saw-machine/front-view.png",
    alt: "Circular saw machine front view",
    category: "Circular Saw Machines",
    title: "Circular Saw Machine",
    position: "center 52%",
  },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <div data-testid="page-home">
      <SEO
        title="Delta Tech Force | Machine Manufacturer & Supplier in Jalandhar"
        description="Delta Tech Force is a machine manufacturer, seller and industrial machinery supplier in Jalandhar, Punjab for CNC, plastic moulding, woodworking, laser, sanding and circular saw machines."
        path="/"
        structuredData={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]}
      />
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-[#0B131E] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            poster="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933064/delta-impex/images/pages/home/hero-industrial-machinery-w2000.jpg"
            aria-label="Industrial machinery"
          >
            <source
              src="/videos/home/hero-background.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/85 to-[#0B131E]/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full -translate-y-6 lg:-translate-y-12">
          <div className="max-w-3xl">
            <span
              data-testid="hero-overline"
              className="section-label di-overline text-[#D4A017]"
            >
              Delta Tech Force — One Stop Shop
            </span>
            <h1
              data-testid="hero-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mt-6"
            >
              Industrial Machinery
              <br />
              Solutions for
              <span className="text-[#D4A017]"> Modern Businesses.</span>
            </h1>
            <p
              data-testid="hero-subheading"
              className="mt-8 text-lg text-white/75 max-w-2xl leading-relaxed"
            >
              One stop shop for industrial machinery solutions.
              <br />
              Delta Tech Force is a machine manufacturer, seller, and
              industrial machinery supplier in Jalandhar providing CNC machines, plastic machines,
              woodworking machines, laser machines, sanding machines, and
              circular saw machines for industrial and commercial needs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                data-testid="hero-cta-products"
                className="bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-xl shadow-[#D4A017]/30"
              >
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-cta-contact"
                className="bg-transparent border border-white/30 text-white hover:border-[#D4A017] hover:text-[#D4A017] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {TRUST_POINTS.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-white/80 text-sm"
                  data-testid={`hero-trust-${t.replace(/\s/g, "-").toLowerCase()}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[#F8FAFC] py-16 md:py-24" data-testid="section-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="section-label di-overline text-[#D4A017]">
                What We Deal In
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4 max-w-2xl leading-tight">
                Our Machine Categories
              </h2>
            </div>
            <p className="lg:col-span-5 text-[#475569] max-w-xl lg:max-w-none text-base md:text-lg leading-relaxed lg:pl-6 lg:border-l lg:border-[#D4A017]/40">
              A complete range of industrial machinery — engineered for
              precision, built for production, ready for your workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                data-testid={`category-card-${cat.slug}`}
                className="group relative overflow-hidden bg-white border border-[#E2E8F0] rounded-sm p-6 hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-xl transition-all duration-300"
              >
                <div
                  style={{ "--machine-card-image": `url("${cat.image}")` }}
                  className="machine-card-media relative h-48 w-full overflow-hidden rounded-sm mb-6"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="machine-card-media-image relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <span className="absolute z-20 top-3 left-3 di-overline text-white/80 bg-[#0B131E]/70 backdrop-blur px-2.5 py-1 rounded-sm">
                    0{i + 1}
                  </span>
                </div>
                <span className="di-overline text-[#D4A017]">{cat.short}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0B131E] mt-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mt-3">
                  {cat.description}
                </p>
                <span className="mt-6 text-[#0B131E] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:gap-3 transition-all border-b border-[#D4A017] pb-1">
                  Explore Machines <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16 md:py-24" data-testid="section-featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="section-label di-overline text-[#D4A017]">
                Featured Inventory
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
                Featured Machines
              </h2>
            </div>
            <Link
              to="/products"
              data-testid="featured-view-all"
              className="text-sm font-bold uppercase tracking-wider text-[#0B131E] inline-flex items-center gap-2 border-b border-[#D4A017] pb-1 hover:gap-3 transition-all"
            >
              View all machines <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0B131E] py-20 md:py-28 relative overflow-hidden" data-testid="section-why-choose">
        <div className="absolute inset-0 di-grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="section-label di-overline text-[#D4A017]">
              Why Delta Tech Force
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mt-4">
              Built for Industry.<br />
              Backed by <span className="text-[#D4A017]">Service.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  data-testid={`feature-${i}`}
                  className="group bg-[#131C28] border border-white/10 p-7 rounded-sm hover:border-[#D4A017]/60 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 grid place-items-center bg-[#D4A017]/10 text-[#D4A017] rounded-sm border border-[#D4A017]/20">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="di-overline text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mt-6">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mt-3">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-[#F8FAFC] py-20 md:py-28" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933065/delta-impex/images/pages/home/workshop-preview-w1400.jpg"
                alt="Delta Tech Force workshop"
                className="w-full h-[460px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#D4A017] text-[#0B131E] p-6 md:p-8 rounded-sm max-w-xs shadow-xl">
                <Award className="w-7 h-7 mb-3" />
                <p className="font-heading font-bold text-lg leading-tight">
                  Trusted by industrial buyers across multiple sectors
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="section-label di-overline text-[#D4A017]">
              About Delta Tech Force
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4 leading-tight">
              An industrial machinery company built for serious business.
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mt-6">
              Delta Tech Force is an industrial machinery manufacturer,
              seller, and supplier in Jalandhar focused on
              providing reliable machine solutions for businesses and
              industries. We deal in CNC machines, plastic machines,
              woodworking machines, laser machines, sanding machines, and
              circular saw machines. Our aim is to help customers find suitable
              machines that improve productivity, accuracy, and business
              operations.
            </p>
            <Link
              to="/about"
              data-testid="about-preview-cta"
              className="mt-8 inline-flex items-center gap-2 bg-[#0B131E] text-[#D4A017] hover:bg-[#1A2332] px-7 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-20 md:py-28" data-testid="section-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label di-overline text-[#D4A017]">
                Visual Showcase
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
                Machine Gallery
              </h2>
            </div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                data-testid={`gallery-${i}`}
                tabIndex={0}
                aria-label={`${item.category}: ${item.title}`}
                className="machine-gallery-card group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-sm align-top"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{ objectPosition: item.position }}
                  className="machine-gallery-image block w-full h-auto object-contain"
                />
                <div
                  aria-hidden="true"
                  className="machine-gallery-gradient absolute inset-0 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="machine-gallery-hover-overlay absolute inset-0 pointer-events-none"
                />
                <div className="machine-gallery-copy absolute left-4 bottom-4 md:left-6 md:bottom-6 right-4 md:right-6 pointer-events-none">
                  <p className="text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.22em] text-[#D4A017] leading-tight">
                    {item.category}
                  </p>
                  <h3 className="machine-gallery-title mt-2 text-xl md:text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY GUIDES */}
      <section className="bg-[#F8FAFC] py-16 md:py-24" data-testid="section-blog-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="section-label di-overline text-[#D4A017]">Expert Resources</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
                Machinery Buying Guides
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-bold uppercase tracking-wider text-[#0B131E] inline-flex items-center gap-2 border-b border-[#D4A017] pb-1 hover:gap-3 transition-all"
            >
              View All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.slug} className="bg-white border border-[#E2E8F0] rounded-sm overflow-hidden group">
                <Link to={`/blog/${post.slug}`} className="block h-52 overflow-hidden bg-[#D8D3CD]">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <p className="di-overline text-[#D4A017]">{post.category}</p>
                  <h3 className="font-heading text-xl font-bold leading-snug mt-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#B58812] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mt-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider border-b border-[#D4A017] pb-1"
                  >
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B131E] py-20 md:py-28 relative overflow-hidden" data-testid="section-cta-home">
        <div className="absolute inset-0 di-grid-bg opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label di-overline text-[#D4A017] justify-center">
            Talk to our team
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mt-6 leading-tight">
            Looking for the Right Machine
            <br />
            for Your <span className="text-[#D4A017]">Business?</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Contact Delta Tech Force today and share your machinery requirement.
            Our team will help you find a suitable machine according to your
            work, budget, and industry needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#enquiry"
              data-testid="home-cta-send-enquiry"
              className="bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
            >
              Send Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              data-testid="home-cta-view-products"
              className="bg-transparent border border-white/30 text-white hover:border-[#D4A017] hover:text-[#D4A017] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
