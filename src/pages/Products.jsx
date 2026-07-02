import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/catalog";
import ProductCard from "../components/ProductCard";
import SEO from "../components/SEO";
import { SITE } from "../data/site";

const ALL_FILTERS = [
  { id: "all", label: "All Machines" },
  ...CATEGORIES.map((c) => ({ id: c.slug, label: c.name })),
  { id: "old", label: "Old Machines" },
  { id: "new", label: "New Machines" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("category") || "all";
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && cat !== active) setActive(cat);
  }, [searchParams]); // eslint-disable-line

  const onSelect = (id) => {
    setActive(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  const filtered = useMemo(() => {
    if (active === "all") return PRODUCTS;
    if (active === "new")
      return PRODUCTS.filter((p) => p.condition === "New");
    if (active === "old")
      return PRODUCTS.filter((p) => p.condition.includes("Old"));
    return PRODUCTS.filter(
      (p) => p.category === active || p.parentCategory === active
    );
  }, [active]);

  return (
    <div data-testid="page-products">
      <SEO
        title="Industrial Machines for Sale | Delta Impex Inc."
        description="Explore new and used CNC cutting, plastic moulding, woodworking, drilling, laser, sanding and sawing machines available from Delta Impex Inc."
        path="/products"
        image="/images/pages/products/hero-w2000.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: `${SITE.url}/products`,
          name: "Industrial Machines for Sale",
          description: "New and used industrial machinery supplied by Delta Impex Inc.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PRODUCTS.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE.url}/products/${product.slug}`,
              name: product.name,
            })),
          },
        }}
      />
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0B131E] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/pages/products/hero-w2000.jpg"
            alt="Industrial products"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/85 to-[#0B131E]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="section-label di-overline text-[#D4A017]">
            Products
          </span>
          <h1
            data-testid="products-hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mt-6"
          >
            Our <span className="text-[#D4A017]">Machines</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mt-6 leading-relaxed">
            Explore our range of CNC machines, plastic machines, woodworking
            machines, laser machines, sanding machines, and sawing machines.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-[#F8FAFC] py-16 md:py-20" data-testid="section-products-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 text-[#475569]">
            <Filter className="w-4 h-4" />
            <span className="di-overline">Filter by category & condition</span>
          </div>
          <div
            data-testid="products-filters"
            className="flex flex-wrap gap-3 mb-10"
          >
            {ALL_FILTERS.map((f) => {
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => onSelect(f.id)}
                  data-testid={`filter-${f.id}`}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors ${
                    isActive
                      ? "bg-[#0B131E] text-[#D4A017] border-[#0B131E]"
                      : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#0B131E]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mb-8 text-sm text-[#475569]">
            <span data-testid="results-count">
              Showing <strong className="text-[#0B131E]">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "machine" : "machines"}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.slug} product={p} idx={i} />
              ))}
            </div>
          ) : (
            <div
              data-testid="no-products"
              className="bg-white border border-[#E2E8F0] p-12 text-center rounded-sm"
            >
              <p className="text-[#475569]">
                No machines in this filter. Try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B131E] py-20 md:py-28" data-testid="section-products-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Need More Details About Any Machine?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Share your requirement with Delta Impex Inc. and we will help you with
            suitable machine details, availability, and guidance.
          </p>
          <Link
            to="/contact#enquiry"
            data-testid="products-cta-send-enquiry"
            className="mt-10 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Send Enquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
