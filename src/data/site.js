export const SITE = {
  name: "Delta Impex Inc.",
  shortName: "Delta Impex",
  url: "https://www.deltaimpexinc.com",
  locale: "en_IN",
  language: "en-IN",
  defaultTitle: "Delta Impex Inc. | Machine Manufacturer & Supplier in Jalandhar",
  defaultDescription:
    "Delta Impex Inc. is an industrial machine manufacturer, seller and supplier in Jalandhar, Punjab for CNC, plastic moulding, woodworking, laser, sanding and circular saw machines.",
  keywords:
    "machine manufacturer in Jalandhar, machine seller in Jalandhar, industrial machinery supplier in Punjab, industrial machines for sale in Jalandhar, CNC machine supplier, plastic moulding machine supplier, woodworking machine supplier, laser machine supplier, sanding machine supplier, circular saw machine supplier",
  defaultImage: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933064/delta-impex/images/pages/home/hero-industrial-machinery-w2000.jpg",
  logo: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933005/delta-impex/Logo/delta-impex-logo-transparent.png",
};

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: ["Delta Impex", "Delta Impex Inc", "Delta Impex Incorporation"],
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  image: absoluteUrl(SITE.defaultImage),
  description: SITE.defaultDescription,
  keywords: SITE.keywords,
  areaServed: [
    {
      "@type": "City",
      name: "Jalandhar",
    },
    {
      "@type": "State",
      name: "Punjab",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  knowsAbout: [
    "CNC machines",
    "Plastic moulding machines",
    "Woodworking machines",
    "Laser machines",
    "Sanding machines",
    "Circular saw machines",
    "New and used industrial machinery",
  ],
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
