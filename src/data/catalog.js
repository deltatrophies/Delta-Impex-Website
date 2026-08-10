// Delta Tech Force - Product Catalog
// Image assets are stored locally under /public/images so the website does
// not depend on third-party image URLs at runtime.

export const CATEGORIES = [
  {
    slug: "plastic-processing-machines",
    name: "Plastic Processing Machine",
    short: "Production",
    description:
      "Industrial plastic processing machines designed for consistent, accurate, and efficient production.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-working-machines",
    name: "Wood Working Machines",
    short: "Craftsmanship",
    description:
      "CNC, sanding, circular saw, SPM, router, and drill machines for woodworking production.",
    image: "/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "signage-machines",
    name: "Signage Machine",
    short: "Laser Signage",
    description:
      "Laser machines for cutting, engraving, marking, and signage production work.",
    image: "/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
  },
];

export const SUBCATEGORIES = [
  {
    slug: "plastic-moulding-machine-type-1",
    parentSlug: "plastic-processing-machines",
    name: "Plastic Moulding Machine - Type 1",
    short: "Moulding System 01",
    description:
      "Industrial plastic moulding machine with a robust hydraulic configuration for consistent production.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "plastic-moulding-machine-type-2",
    parentSlug: "plastic-processing-machines",
    name: "Plastic Moulding Machine - Type 2",
    short: "Moulding System 02",
    description:
      "Enclosed plastic moulding machine built for controlled, reliable, and repeatable manufacturing.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "cnc-machines",
    parentSlug: "wood-working-machines",
    name: "CNC Machines",
    short: "Precision CNC",
    description:
      "CNC machines for accurate cutting, shaping, engraving, and repeatable woodworking production.",
    image: "/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "sanding-machines",
    parentSlug: "wood-working-machines",
    name: "Sanding Machines",
    short: "Surface Finishing",
    description:
      "Reliable sanding solutions for smooth, consistent, and production-ready surfaces.",
    image: "/images/machinery/sanding-machines/sanding-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "sawing-machines",
    parentSlug: "wood-working-machines",
    name: "Circular Saw Machines",
    short: "Precision Cutting",
    description:
      "Strong and accurate circular saw machines for clean, efficient woodworking cuts.",
    image: "/images/machinery/sawing-machines/saw-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "spm-machines",
    parentSlug: "wood-working-machines",
    name: "SPM (Special Purpose Machine)",
    short: "Custom Purpose",
    description:
      "Special purpose machines designed for focused, repeatable, and application-specific production work.",
    image:
      "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-router-machines",
    parentSlug: "wood-working-machines",
    name: "Router Machines",
    short: "Routing & Profiling",
    description:
      "Versatile router machines for grooving, profiling, shaping, and edge work.",
    image:
      "/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "drill-machines",
    parentSlug: "wood-working-machines",
    name: "Drill Machines",
    short: "Single & Dual Drill",
    description:
      "Accurate single and dual-head drilling machines for repeatable woodworking operations.",
    image:
      "/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "laser-machines",
    parentSlug: "signage-machines",
    name: "Laser Machines",
    short: "Precision Light",
    description:
      "Advanced machines for laser cutting, engraving, marking, and precision signage design work.",
    image: "/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
  },
];

export const LEGACY_CATEGORY_ALIASES = {
  "plastic-machines": "plastic-processing-machines",
  "wood-turning-lathes": "spm-machines",
  "wood-saw-machines": "sawing-machines",
  "wood-sanding-machines": "sanding-machines",
};

export const CATEGORY_TREE = CATEGORIES.map((category) => ({
  ...category,
  subcategories: SUBCATEGORIES.filter((sub) => sub.parentSlug === category.slug),
}));

export const findSubcategory = (slug) =>
  SUBCATEGORIES.find((c) => c.slug === slug);

export const subcategoriesByParent = (slug) =>
  SUBCATEGORIES.filter((c) => c.parentSlug === slug);

export const findCategoryNode = (slug) =>
  CATEGORIES.find((c) => c.slug === slug) || findSubcategory(slug);

export const resolveCategorySlug = (slug) => LEGACY_CATEGORY_ALIASES[slug] || slug;

export const PLASTIC_CATEGORIES = SUBCATEGORIES.filter(
  (c) => c.parentSlug === "plastic-processing-machines"
).map((c) => ({
  ...c,
  href: `/products?category=${c.slug}`,
}));

export const WOODWORKING_CATEGORIES = SUBCATEGORIES.filter(
  (c) => c.parentSlug === "wood-working-machines"
).map((c) => ({
  ...c,
  href: `/products?category=${c.slug}`,
}));

export const PRODUCTS = [
  {
    slug: "cnc-cutting-machine-type-1",
    name: "CNC Cutting Machine - Type 1",
    category: "cnc-machines",
    parentCategory: "wood-working-machines",
    categoryName: "CNC Cutting Machine",
    condition: "Old / New",
    description:
      "A precision CNC cutting machine designed for accurate cutting, shaping, and repeatable production work.",
    features: [
      "High-accuracy CNC cutting",
      "Strong and stable machine body",
      "Suitable for wood, acrylic, MDF, and similar materials",
      "Reliable performance for repeatable production",
    ],
    applications:
      "Furniture manufacturing, signage, panel processing, modular production, and prototyping.",
    image: "/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
      "/images/machinery/cnc-machines/cnc-cutting-machine-type-1/side-view.png",
    ],
    specs: {
      machine_type: "CNC Cutting Machine - Type 1",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard 4x8 ft",
      material_support: "Wood, Acrylic, MDF, Plastic",
      usage: "Industrial / Commercial",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "cnc-cutting-machine-type-2",
    name: "CNC Cutting Machine - Type 2",
    category: "cnc-machines",
    parentCategory: "wood-working-machines",
    categoryName: "CNC Cutting Machine",
    condition: "Old / New",
    description:
      "An industrial CNC cutting machine with a different configuration for accurate and automated production work.",
    features: [
      "Computer-controlled precision cutting",
      "Smooth and consistent finishing",
      "Strong configuration for industrial workshops",
      "Reliable performance for continuous production",
    ],
    applications:
      "Furniture components, panel processing, signage, workshop production, and custom manufacturing.",
    image: "/images/machinery/cnc-machines/cnc-cutting-machine-type-2/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/cnc-machines/cnc-cutting-machine-type-2/front-view.png",
      "/images/machinery/cnc-machines/cnc-cutting-machine-type-2/side-view.png",
    ],
    specs: {
      machine_type: "CNC Cutting Machine - Type 2",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Wood, Acrylic, MDF, Plastic",
      usage: "Industrial",
      automation_level: "Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "plastic-moulding-machine-type-1",
    name: "Plastic Moulding Machine - Type 1",
    category: "plastic-moulding-machine-type-1",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Moulding Machine",
    condition: "Old / New",
    description:
      "Industrial plastic moulding machine with a robust hydraulic configuration for consistent and accurate production.",
    features: [
      "Heavy-duty hydraulic moulding system",
      "Stable and repeatable production cycle",
      "Strong industrial machine structure",
      "Suitable for continuous manufacturing",
    ],
    applications:
      "Plastic components, household products, industrial parts, packaging items, and custom moulded products.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/side-view-1.png",
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/side-view-2.png",
    ],
    specs: {
      machine_type: "Plastic Moulding Machine - Type 1",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Contact for details",
      material_support: "Thermoplastics",
      usage: "Industrial / Manufacturing",
      automation_level: "Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "plastic-moulding-machine-type-2",
    name: "Plastic Moulding Machine - Type 2",
    category: "plastic-moulding-machine-type-2",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Moulding Machine",
    condition: "Old / New",
    description:
      "Enclosed plastic moulding machine designed for controlled, efficient, and repeatable industrial manufacturing.",
    features: [
      "Enclosed production-focused design",
      "Consistent and controlled moulding output",
      "Integrated operating controls",
      "Built for reliable industrial production",
    ],
    applications:
      "Injection-moulded components, consumer products, automotive parts, packaging items, and industrial products.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-2/side-view.png",
    ],
    specs: {
      machine_type: "Plastic Moulding Machine - Type 2",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Contact for details",
      material_support: "Thermoplastics",
      usage: "Industrial / Manufacturing",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "wood-working-machine",
    name: "Wood Router Machine",
    category: "wood-router-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Router Machine",
    condition: "Old / New",
    description:
      "A reliable wood router machine for grooving, profiling, edge shaping, and material preparation.",
    features: [
      "Accurate routing and profiling",
      "Strong and stable working platform",
      "Suitable for grooves, edges, and shaping work",
      "Useful for furniture and workshop industries",
    ],
    applications:
      "Furniture manufacturing, cabinetry, joinery, edge profiling, and carpentry workshops.",
    image: "/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/wood-working-machines/router-machine/front-view.png",
      "/images/machinery/wood-working-machines/router-machine/side-view.png",
    ],
    specs: {
      machine_type: "Wood Router",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Hardwood, Softwood, MDF, Plywood",
      usage: "Workshop / Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "wood-cutting-machine",
    name: "SPM (Special Purpose Machine)",
    category: "spm-machines",
    parentCategory: "wood-working-machines",
    categoryName: "SPM",
    condition: "Old / New",
    description:
      "Special purpose machine designed for focused, repeatable, and application-specific industrial production.",
    features: [
      "Application-specific machine setup",
      "Repeatable production performance",
      "Durable industrial build",
      "Suitable for focused workshop and industrial operations",
    ],
    applications:
      "Custom production tasks, workshop operations, component processing, and industrial manufacturing support.",
    image: "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
      "/images/machinery/wood-working-machines/wood-turning-lathe/side-view.png",
    ],
    specs: {
      machine_type: "SPM (Special Purpose Machine)",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Contact for details",
      usage: "Commercial",
      automation_level: "Manual / Semi-Auto",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "single-drill-machine",
    name: "Single Drill Machine",
    category: "drill-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Drilling Machine",
    condition: "Old / New",
    description:
      "A dependable single-head drill machine for accurate and repeatable woodworking operations.",
    features: [
      "Accurate single-head drilling",
      "Stable working platform",
      "Simple and reliable operation",
      "Suitable for workshop production",
    ],
    applications:
      "Furniture components, joinery, cabinet work, and general woodworking production.",
    image:
      "/images/machinery/wood-working-machines/drill-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/wood-working-machines/drill-machine/front-view.png",
      "/images/machinery/wood-working-machines/drill-machine/side-view.png",
    ],
    specs: {
      machine_type: "Single Drill",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, MDF, Plywood",
      usage: "Workshop / Commercial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "dual-drill-machine",
    name: "Dual Drill Machine",
    category: "drill-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Drilling Machine",
    condition: "Old / New",
    description:
      "A dual-head drill machine built for faster, consistent, and repeatable woodworking production.",
    features: [
      "Dual-head drilling operation",
      "Improved production efficiency",
      "Strong and stable machine body",
      "Consistent drilling accuracy",
    ],
    applications:
      "Furniture production, cabinet components, joinery, and repetitive drilling work.",
    image:
      "/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
      "/images/machinery/wood-working-machines/dual-drill-machine/side-view.png",
    ],
    specs: {
      machine_type: "Dual Drill",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, MDF, Plywood",
      usage: "Workshop / Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "laser-cutting-machine",
    name: "Laser Cutting Machine",
    category: "laser-machines",
    parentCategory: "signage-machines",
    categoryName: "Laser Machine",
    condition: "Old / New",
    description:
      "Advanced laser machine for cutting, engraving, and marking work with precision.",
    features: [
      "High precision cutting",
      "Smooth engraving",
      "Suitable for multiple materials",
      "Modern industrial application",
    ],
    applications:
      "Signage, jewelry, metal fabrication, advertising and design industries.",
    image: "/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/laser-machines/laser-machine/lid-closed.png",
      "/images/machinery/laser-machines/laser-machine/lid-open.png",
    ],
    specs: {
      machine_type: "Laser Cutter",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Steel, Acrylic, Wood, Leather",
      usage: "Industrial",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "industrial-sanding-machine",
    name: "Industrial Sanding Machine",
    category: "sanding-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Sanding Machine",
    condition: "Old / New",
    description:
      "Industrial sanding machine for surface finishing and smoothing applications.",
    features: [
      "Smooth surface finishing",
      "Useful for wood and industrial materials",
      "Strong machine structure",
      "Efficient finishing process",
    ],
    applications:
      "Furniture finishing, automotive prep, wood industry, surface preparation.",
    image: "/images/machinery/sanding-machines/sanding-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/sanding-machines/sanding-machine/front-view.png",
      "/images/machinery/sanding-machines/sanding-machine/side-view.png",
    ],
    specs: {
      machine_type: "Sanding",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, Metal Surfaces",
      usage: "Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "sawing-machine",
    name: "Circular Saw Machine",
    category: "sawing-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Circular Saw Machine",
    condition: "Old / New",
    description:
      "Strong circular saw machine designed for accurate and efficient cutting applications.",
    features: [
      "Clean cutting output",
      "Durable frame",
      "Suitable for workshop and industrial use",
      "Reliable performance",
    ],
    applications: "General workshops, circular cutting operations, lumber yards, fabrication, and production work.",
    image: "/images/machinery/sawing-machines/saw-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/sawing-machines/saw-machine/front-view.png",
      "/images/machinery/sawing-machines/saw-machine/side-view.png",
    ],
    specs: {
      machine_type: "Circular Saw",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, Metal, Plastic",
      usage: "Workshop / Industrial",
      automation_level: "Manual / Semi-Auto",
      availability: "Available",
      price: "Contact for Price",
    },
  },
];

export const findProduct = (slug) =>
  PRODUCTS.find((p) => p.slug === slug);

export const findCategory = (slug) =>
  findCategoryNode(resolveCategorySlug(slug));

export const productsByCategory = (slug) => {
  const resolved = resolveCategorySlug(slug);
  return PRODUCTS.filter(
    (p) => p.category === resolved || p.parentCategory === resolved
  );
};

