import { Link } from "react-router-dom";
import { Factory, Phone, Mail, MapPin } from "lucide-react";
import { CATEGORIES } from "../data/catalog";
import { CONTACT_DETAILS } from "../data/contact";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0B131E] pt-20 pb-10 border-t border-white/10 text-white/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link
            to="/"
            className="flex items-center gap-3"
            data-testid="footer-logo"
          >
            <span className="w-10 h-10 grid place-items-center bg-[#D4A017] text-[#0B131E] rounded-sm">
              <Factory className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-heading font-black tracking-tight text-white text-2xl">
              Delta<span className="text-[#D4A017]">Impex</span>
            </span>
          </Link>
          <p className="mt-6 text-sm leading-relaxed">
            Delta Impex deals in industrial machinery including CNC machines,
            plastic machines, woodworking machines, laser machines, sanding
            machines, and sawing machines.
          </p>
        </div>

        <div>
          <h4 className="text-[#D4A017] font-bold text-sm di-overline mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-white" to="/" data-testid="footer-link-home">Home</Link></li>
            <li><Link className="hover:text-white" to="/about" data-testid="footer-link-about">About Us</Link></li>
            <li><Link className="hover:text-white" to="/products" data-testid="footer-link-products">Products</Link></li>
            <li><Link className="hover:text-white" to="/contact" data-testid="footer-link-contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#D4A017] font-bold text-sm di-overline mb-5">
            Machine Categories
          </h4>
          <ul className="space-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products?category=${c.slug}`}
                  className="hover:text-white"
                  data-testid={`footer-cat-${c.slug}`}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#D4A017] font-bold text-sm di-overline mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#D4A017] mt-1" />
              <span data-testid="footer-phone">{CONTACT_DETAILS.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#D4A017] mt-1" />
              <span data-testid="footer-email">{CONTACT_DETAILS.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D4A017] mt-1" />
              <span data-testid="footer-address">{CONTACT_DETAILS.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-xs tracking-wider">
        © {new Date().getFullYear()} Delta Impex. All Rights Reserved.
      </div>
    </footer>
  );
}
