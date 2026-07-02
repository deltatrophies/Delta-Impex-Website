import fs from "node:fs/promises";
import { PRODUCTS } from "../src/data/catalog.js";
import { BLOG_POSTS } from "../src/data/blog.js";
import { SITE } from "../src/data/site.js";

const today = new Date().toISOString().slice(0, 10);
const coreRoutes = ["/", "/about", "/products", "/contact", "/blog"];

const entries = [
  ...coreRoutes.map((path) => ({ path, lastmod: today })),
  ...PRODUCTS.map((product) => ({
    path: `/products/${product.slug}`,
    lastmod: today,
  })),
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.updated,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ path, lastmod }) =>
      `  <url><loc>${SITE.url}${path}</loc><lastmod>${lastmod}</lastmod></url>`,
  )
  .join("\n")}
</urlset>
`;

await fs.writeFile(new URL("../public/sitemap.xml", import.meta.url), xml, "utf8");
console.log(`Generated sitemap.xml with ${entries.length} URLs`);
