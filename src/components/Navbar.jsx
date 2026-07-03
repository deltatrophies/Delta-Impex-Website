import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "./icons/legacy";

const links = [
  { to: "/", label: "Home", testid: "nav-link-home" },
  { to: "/about", label: "About Us", testid: "nav-link-about" },
  { to: "/products", label: "Products", testid: "nav-link-products" },
  { to: "/blog", label: "Blog", testid: "nav-link-blog" },
  { to: "/contact", label: "Contact Us", testid: "nav-link-contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B131E]/95 backdrop-blur-md border-b border-white/10"
          : "bg-[#0B131E]/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center gap-3 group"
          >
            <img
              src="/Logo/delta-impex-logo-transparent.png"
              alt="Delta Impex Inc."
              className="h-11 w-auto object-contain"
            />
            <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
              Delta <span className="text-[#D4A017]">Impex</span>
              <span className="ml-1 text-white/85">Inc.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={l.testid}
                className={({ isActive }) =>
                  `di-link text-sm font-bold uppercase tracking-[0.18em] ${
                    isActive ? "text-[#D4A017]" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact#enquiry"
              data-testid="navbar-enquire-btn"
              className="bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] rounded-sm font-bold px-6 py-3 text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#D4A017]/20 inline-flex items-center gap-2"
            >
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-white/10 bg-[#0B131E]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-${l.testid}`}
                className={({ isActive }) =>
                  `block text-base font-bold uppercase tracking-wider py-2 ${
                    isActive ? "text-[#D4A017]" : "text-white/85"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact#enquiry"
              data-testid="mobile-navbar-enquire-btn"
              className="bg-[#D4A017] text-[#0B131E] rounded-sm font-bold px-6 py-3 text-sm uppercase tracking-wider text-center"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
