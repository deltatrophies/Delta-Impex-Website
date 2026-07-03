import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product, idx = 0 }) {
  const isNew = product.condition === "New";
  const navigate = useNavigate();
  const detailPath = `/products/${product.slug}`;

  const openDetails = () => navigate(detailPath);

  const openDetailsFromKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetails();
    }
  };

  return (
    <article
      data-testid={`product-card-${product.slug}`}
      role="link"
      tabIndex={0}
      onClick={openDetails}
      onKeyDown={openDetailsFromKeyboard}
      className="group bg-white border border-[#E2E8F0] rounded-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2"
    >
      <div
        style={{ "--machine-card-image": `url("${product.image}")` }}
        className="machine-card-media relative h-64 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading={idx < 3 ? "eager" : "lazy"}
          className="machine-card-media-image relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
        <span
          className={`absolute z-20 top-4 left-4 text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md ${
            isNew
              ? "bg-[#D4A017] text-[#0B131E]"
              : "bg-[#0B131E] text-white border border-[#D4A017]/40"
          }`}
          data-testid={`product-condition-${product.slug}`}
        >
          {product.condition}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="di-overline text-[#D4A017] mb-3">
          {product.categoryName}
        </span>
        <h3 className="font-heading text-xl font-bold text-[#0B131E] mb-3 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto pt-4 flex gap-3">
          <Link
            to={detailPath}
            data-testid={`view-details-${product.slug}`}
            onClick={(event) => event.stopPropagation()}
            className="flex-1 border border-[#0B131E] text-[#0B131E] hover:bg-[#0B131E] hover:text-[#D4A017] py-2.5 text-xs font-bold uppercase tracking-wider text-center rounded-sm transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/contact?product=${product.slug}#enquiry`}
            data-testid={`enquire-${product.slug}`}
            onClick={(event) => event.stopPropagation()}
            className="flex-1 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] py-2.5 text-xs font-bold uppercase tracking-wider text-center rounded-sm transition-colors inline-flex items-center justify-center gap-1"
          >
            Enquire <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
