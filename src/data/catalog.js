// Delta Impex Inc. - Product Catalog
// Image assets are stored locally under /public/images so the website does
// not depend on third-party image URLs at runtime.

export const CATEGORIES = [
  {
    slug: "cnc-machines",
    name: "CNC Machines",
    short: "Precision",
    description:
      "Precision machines designed for cutting, shaping, engraving, and automated manufacturing work.",
    image: "/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "plastic-machines",
    name: "Plastic Machines",
    short: "Production",
    description:
      "Industrial plastic moulding machines designed for consistent, accurate, and efficient production.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-working-machines",
    name: "Wood Working Machines",
    short: "Craftsmanship",
    description:
      "Reliable machines for cutting, shaping, finishing, and processing wood materials.",
    image: "/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "laser-machines",
    name: "Laser Machines",
    short: "Precision Light",
    description:
      "Advanced machines for laser cutting, engraving, marking, and precision design work.",
    image: "/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
  },
  {
    slug: "sanding-machines",
    name: "Sanding Machines",
    short: "Finishing",
    description:
      "Machines used for smooth finishing, surface preparation, and polishing applications.",
    image: "/images/machinery/sanding-machines/sanding-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "sawing-machines",
    name: "Sawing Machines",
    short: "Cutting",
    description:
      "Strong and efficient machines for accurate cutting of wood, metal, plastic, and other materials.",
    image: "/images/machinery/sawing-machines/saw-machine/front-view.png",
    imageFit: "contain",
  },
];

export const PLASTIC_CATEGORIES = [
  {
    slug: "plastic-moulding-machine-type-1",
    name: "Plastic Moulding Machine - Type 1",
    short: "Moulding System 01",
    description:
      "Industrial plastic moulding machine with a robust hydraulic configuration for consistent production.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    href: "/products/plastic-moulding-machine-type-1",
  },
  {
    slug: "plastic-moulding-machine-type-2",
    name: "Plastic Moulding Machine - Type 2",
    short: "Moulding System 02",
    description:
      "Enclosed plastic moulding machine built for controlled, reliable, and repeatable manufacturing.",
    image:
      "/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
    href: "/products/plastic-moulding-machine-type-2",
  },
];

export const WOODWORKING_CATEGORIES = [
  {
    slug: "drill-machines",
    name: "Drilling Machines",
    short: "Single & Dual Drill",
    description:
      "Accurate single and dual-head drilling machines for repeatable woodworking operations.",
    image:
      "/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    href: "/products/single-drill-machine",
  },
  {
    slug: "wood-turning-lathes",
    name: "Wood-Turning Lathes",
    short: "Turning & Shaping",
    description:
      "Precision lathe machines for turning, shaping, and finishing wooden components.",
    image:
      "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    href: "/products/wood-cutting-machine",
  },
  {
    slug: "wood-sanding-machines",
    name: "Sanding Machines",
    short: "Surface Finishing",
    description:
      "Reliable sanding solutions for smooth, consistent, and production-ready surfaces.",
    image:
      "/images/machinery/sanding-machines/sanding-machine/front-view.png",
    href: "/products?category=sanding-machines",
  },
  {
    slug: "wood-saw-machines",
    name: "Saw Machines",
    short: "Precision Cutting",
    description:
      "Strong and accurate saw machines for clean, efficient woodworking cuts.",
    image: "/images/machinery/sawing-machines/saw-machine/front-view.png",
    href: "/products?category=sawing-machines",
  },
  {
    slug: "wood-router-machines",
    name: "Wood Router Machines",
    short: "Routing & Profiling",
    description:
      "Versatile router machines for grooving, profiling, shaping, and edge work.",
    image:
      "/images/machinery/wood-working-machines/router-machine/front-view.png",
    href: "/products/wood-working-machine",
  },
];

export const PRODUCTS = [
  {
    slug: "cnc-cutting-machine-type-1",
    name: "CNC Cutting Machine - Type 1",
    category: "cnc-machines",
    categoryName: "CNC Cutting Machine",
    condition: "New",
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
      condition: "New",
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
    parentCategory: "plastic-machines",
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
    parentCategory: "plastic-machines",
    categoryName: "Plastic Moulding Machine",
    condition: "New",
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
      condition: "New",
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
    category: "wood-working-machines",
    categoryName: "Wood Working Machine",
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
      "/images/machinery/wood-working-machines/drill-machine/front-view.png",
      "/images/machinery/wood-working-machines/drill-machine/side-view.png",
      "/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
      "/images/machinery/wood-working-machines/dual-drill-machine/side-view.png",
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
    name: "Wood Turning Lathe Machine",
    category: "wood-working-machines",
    categoryName: "Wood Working Machine",
    condition: "New",
    description:
      "Wood-turning lathe designed for accurate shaping, turning, and finishing of wooden components.",
    features: [
      "Accurate and balanced wood turning",
      "Smooth shaping and finishing",
      "Durable industrial build",
      "Suitable for repeatable production work",
    ],
    applications:
      "Furniture parts, decorative columns, wooden handles, craft products, and joinery workshops.",
    image: "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
      "/images/machinery/wood-working-machines/wood-turning-lathe/side-view.png",
    ],
    specs: {
      machine_type: "Wood Turning Lathe",
      condition: "New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Hardwood, Softwood",
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
    condition: "New",
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
      condition: "New",
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
    condition: "New",
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
      condition: "New",
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
    categoryName: "Laser Machine",
    condition: "New",
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
      condition: "New",
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
    slug: "laser-engraving-machine",
    name: "Laser Engraving Machine",
    category: "laser-machines",
    categoryName: "Laser Machine",
    condition: "Old / New",
    description:
      "Laser engraving machine designed for detailed engraving, marking, and creative production work.",
    features: [
      "Fine detailing",
      "Clean marking output",
      "Suitable for design and branding work",
      "Professional finish",
    ],
    applications: "Branding, awards, custom gifts, industrial marking.",
    image: "/images/machinery/laser-machines/laser-machine/lid-open.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/laser-machines/laser-machine/lid-open.png",
      "/images/machinery/laser-machines/laser-machine/lid-closed.png",
    ],
    specs: {
      machine_type: "Laser Engraver",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, Metal, Acrylic, Leather",
      usage: "Commercial / Industrial",
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
    name: "Sawing Machine",
    category: "sawing-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Sawing Machine",
    condition: "Old / New",
    description:
      "Strong cutting machine designed for accurate and efficient sawing applications.",
    features: [
      "Clean cutting output",
      "Durable frame",
      "Suitable for workshop and industrial use",
      "Reliable performance",
    ],
    applications: "General workshops, metal cutting, lumber yards, fabrication.",
    image: "/images/machinery/sawing-machines/saw-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "/images/machinery/sawing-machines/saw-machine/front-view.png",
      "/images/machinery/sawing-machines/saw-machine/side-view.png",
    ],
    specs: {
      machine_type: "Sawing",
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
  CATEGORIES.find((c) => c.slug === slug);

export const productsByCategory = (slug) =>
  PRODUCTS.filter(
    (p) => p.category === slug || p.parentCategory === slug
  );
