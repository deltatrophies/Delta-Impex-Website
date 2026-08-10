import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { CATEGORIES } from "../data/catalog";
import { CONTACT_DETAILS, hasContactValue } from "../data/contact";

export default function Footer() {
  const phoneHref = CONTACT_DETAILS.phone.replace(/[^\d+]/g, "");

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
            <img
              src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best,w_1200/v1785933005/delta-impex/Logo/delta-impex-logo-transparent.png"
              alt="Delta Tech Force"
              className="h-12 w-auto object-contain"
            />
            <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
              Delta <span className="text-[#D4A017]">Tech</span>
              <span className="ml-1 text-white/85">Force</span>
            </span>
          </Link>
          <p className="mt-6 text-sm leading-relaxed">
            Delta Tech Force deals in industrial machinery including plastic
            processing machines, woodworking machines, signage machines, CNC,
            sanding, router, drill, SPM, laser, and circular saw machines.
          </p>
        </div>

        <div>
          <h4 className="text-[#D4A017] font-bold text-sm di-overline mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-white" to="/" data-testid="footer-link-home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/about" data-testid="footer-link-about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/products" data-testid="footer-link-products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/blog" data-testid="footer-link-blog">
                Machinery Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact" data-testid="footer-link-contact">
                Contact Us
              </Link>
            </li>
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
              <a
                data-testid="footer-phone"
                href={`tel:${phoneHref}`}
                className="hover:text-white"
              >
                {CONTACT_DETAILS.phone}
              </a>
            </li>
            {hasContactValue(CONTACT_DETAILS.email) && (
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A017] mt-1" />
                <a
                  data-testid="footer-email"
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-white"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
            )}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D4A017] mt-1" />
              <a
                data-testid="footer-address"
                href={CONTACT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {CONTACT_DETAILS.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-xs tracking-wider">
        &copy; {new Date().getFullYear()} Delta Tech Force All Rights Reserved.
      </div>
    </footer>
  );
}
