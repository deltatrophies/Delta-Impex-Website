export const SITE = {
  name: "Delta Impex Inc.",
  shortName: "Delta Impex",
  url: "https://www.deltaimpexinc.com",
  locale: "en_IN",
  language: "en-IN",
  defaultTitle: "Delta Impex Inc. | Industrial Machinery Supplier in Jalandhar",
  defaultDescription:
    "Delta Impex Inc. supplies new and used CNC, plastic moulding, woodworking, laser, sanding and circular saw machines from Jalandhar, Punjab, India.",
  defaultImage: "/images/pages/home/hero-industrial-machinery-w2000.jpg",
  logo: "/Logo/delta-impex-logo-transparent.png",
};

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: ["Delta Impex", "Delta Impex Inc", "Delta Impex Incorporation"],
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  image: absoluteUrl(SITE.defaultImage),
  description: SITE.defaultDescription,
  foundingLocation: {
    "@type": "Place",
    name: "Jalandhar, Punjab, India",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 111-A, Janta Colony, Near Maqsudan, G.T. Road",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    postalCode: "144001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98768-47521",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  alternateName: SITE.shortName,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: SITE.language,
};
