import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] bg-[#0B131E] pt-32 pb-20 flex items-center">
      <SEO
        title="Page Not Found | Delta Tech Force"
        description="The requested page could not be found."
        path="/404"
        noindex
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="di-overline text-[#D4A017]">Error 404</p>
        <h1 className="font-heading text-5xl md:text-7xl font-black text-white mt-5">Page Not Found</h1>
        <p className="text-white/65 text-lg mt-6">The page may have moved or the address may be incorrect.</p>
        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider"
        >
          Return Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
