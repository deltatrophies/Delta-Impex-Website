import { useState, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { findProduct, PRODUCTS } from "../data/catalog";
import ProductCard from "../components/ProductCard";
import EnquiryForm from "../components/EnquiryForm";
import SEO from "../components/SEO";
import { SITE, absoluteUrl } from "../data/site";

const SPEC_LABELS = {
  machine_type: "Machine Type",
  condition: "Condition",
  power: "Power",
  working_area: "Working Area",
  material_support: "Material Support",
  usage: "Usage",
  automation_level: "Automation Level",
  availability: "Availability",
  price: "Price",
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const [active, setActive] = useState(0);

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(
      (p) => p.category === product.category && p.slug !== product.slug
    ).slice(0, 3);
  }, [product]);

  if (!product) return <Navigate to="/products" replace />;

  const gallery = product.gallery;
  const productUrl = `${SITE.url}/products/${product.slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: product.gallery.map(absoluteUrl),
    category: product.categoryName,
    url: productUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.url}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  return (
    <div data-testid="page-product-detail" className="bg-white">
      <SEO
        title={`${product.name} | Delta Impex Inc.`}
        description={`${product.description} Contact Delta Impex Inc. in Jalandhar for availability and details.`}
        path={`/products/${product.slug}`}
        image={product.image}
        type="product"
        structuredData={[productSchema, breadcrumbSchema]}
      />
      {/* Breadcrumb */}
      <div className="bg-[#0B131E] pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs di-overline text-white/55">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-white">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#D4A017]" data-testid="breadcrumb-current">
            {product.name}
          </span>
        </div>
      </div>

      {/* PRODUCT HEADER */}
      <section className="bg-[#0B131E] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div
              className={`relative rounded-sm overflow-hidden border border-white/10 ${
                product.imageFit === "contain" ? "bg-[#D8D3CD]" : "bg-[#131C28]"
              }`}
            >
              <img
                src={gallery[active]}
                alt={product.name}
                data-testid="product-main-image"
                className={`w-full h-[420px] md:h-[560px] ${
                  product.imageFit === "contain" ? "object-contain p-3" : "object-cover"
                }`}
              />
              <span
                className="absolute top-5 left-5 text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md bg-white text-[#0B131E]"
              >
                Old / New
              </span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  data-testid={`thumb-${i}`}
                  className={`relative h-24 overflow-hidden rounded-sm border-2 transition-all ${
                    active === i
                      ? "border-[#D4A017]"
                      : "border-white/10 hover:border-white/30"
                  } ${product.imageFit === "contain" ? "bg-[#D8D3CD]" : "bg-[#131C28]"}`}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className={`w-full h-full ${
                      product.imageFit === "contain" ? "object-contain p-1" : "object-cover"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 text-white">
            <Link
              to="/products"
              className="flex w-fit items-center gap-2 text-white/60 hover:text-[#D4A017] text-xs font-bold uppercase tracking-wider mb-6"
              data-testid="back-to-products"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all machines
            </Link>
            <span className="block di-overline text-[#D4A017]">
              {product.categoryName}
            </span>
            <h1
              data-testid="product-name"
              className="font-heading text-4xl md:text-5xl font-black tracking-tight mt-3 leading-tight"
            >
              {product.name}
            </h1>
            <p className="text-white/75 mt-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="di-overline text-white/55">Key Features</span>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-white/85"
                    data-testid={`feature-${f.slice(0, 12)}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={scrollToEnquiry}
                data-testid="detail-enquire-btn"
                className="flex-1 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-wider text-center transition-colors"
              >
                Enquire About This Machine
              </button>
              <Link
                to="/products"
                data-testid="detail-view-others"
                className="flex-1 bg-transparent border border-white/30 text-white hover:border-[#D4A017] hover:text-[#D4A017] px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-wider text-center transition-colors"
              >
                View Other Machines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS + APPLICATIONS */}
      <section className="bg-white py-20" data-testid="section-specs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="section-label di-overline text-[#D4A017]">
              Technical Specs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B131E] tracking-tight mt-4">
              Technical Specifications
            </h2>
            <table
              data-testid="specs-table"
              className="w-full border border-[#E2E8F0] mt-8 text-sm"
            >
              <tbody>
                {Object.entries(product.specs).map(([k, v]) => (
                  <tr
                    key={k}
                    className="border-b border-[#E2E8F0] odd:bg-[#F8FAFC]"
                  >
                    <td className="p-4 font-bold text-[#0B131E] w-1/3 di-overline">
                      {SPEC_LABELS[k] || k}
                    </td>
                    <td className="p-4 text-[#475569]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-5">
            <span className="section-label di-overline text-[#D4A017]">
              Use Cases
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B131E] tracking-tight mt-4">
              Applications
            </h2>
            <div className="mt-8 bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-sm">
              <p className="text-[#475569] leading-relaxed">
                {product.applications}
              </p>
            </div>
            <div className="mt-6 bg-[#0B131E] text-white p-8 rounded-sm">
              <span className="di-overline text-[#D4A017]">Availability</span>
              <p className="font-heading text-2xl font-bold mt-2">
                Contact for Price
              </p>
              <p className="text-white/65 text-sm mt-3 leading-relaxed">
                Reach out to Delta Impex Inc. for current pricing, lead time, and
                customization options for this machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        id="enquiry"
        className="bg-[#F8FAFC] py-20"
        data-testid="section-product-enquiry"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label di-overline text-[#D4A017] justify-center">
              Send Enquiry
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] tracking-tight mt-4">
              Enquire About <span className="text-[#D4A017]">{product.name}</span>
            </h2>
          </div>
          <EnquiryForm
            productSlug={product.slug}
            defaultMachine={product.categoryName}
          />
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-white py-20" data-testid="section-related">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-label di-overline text-[#D4A017]">
                Related
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B131E] tracking-tight mt-4">
                Related Machines
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} idx={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
