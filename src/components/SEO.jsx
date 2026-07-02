import { useEffect } from "react";
import {
  SITE,
  absoluteUrl,
  ORGANIZATION_SCHEMA,
  WEBSITE_SCHEMA,
} from "../data/site";

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value),
  );
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

export default function SEO({
  title = SITE.defaultTitle,
  description = SITE.defaultDescription,
  path = "/",
  image = SITE.defaultImage,
  type = "website",
  noindex = false,
  structuredData = [],
}) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const socialImage = absoluteUrl(image);
    const pageSchemas = Array.isArray(structuredData)
      ? structuredData.filter(Boolean)
      : [structuredData].filter(Boolean);
    const schemas = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, ...pageSchemas].filter(
      (schema, index, collection) =>
        !schema?.["@id"] ||
        collection.findIndex((item) => item?.["@id"] === schema["@id"]) === index,
    );

    document.title = title;
    document.documentElement.lang = SITE.language;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: socialImage });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE.name,
    });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: SITE.locale });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: socialImage });
    upsertLink("canonical", canonical);

    let jsonLd = document.head.querySelector("#seo-structured-data");
    if (schemas.length) {
      if (!jsonLd) {
        jsonLd = document.createElement("script");
        jsonLd.id = "seo-structured-data";
        jsonLd.type = "application/ld+json";
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    } else if (jsonLd) {
      jsonLd.remove();
    }
  }, [title, description, path, image, type, noindex, structuredData]);

  return null;
}
