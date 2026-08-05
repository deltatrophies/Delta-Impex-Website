import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
import SEO from "../components/SEO";
import { BLOG_POSTS, findBlogPost } from "../data/blog";
import { PRODUCTS } from "../data/catalog";
import { SITE, absoluteUrl } from "../data/site";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = findBlogPost(slug);

  if (!post) return <Navigate to="/404" replace />;

  const relatedProducts = PRODUCTS.filter((product) =>
    post.relatedProducts.includes(product.slug),
  );
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleUrl = `${SITE.url}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: SITE.language,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <div data-testid="page-blog-detail">
      <SEO
        title={`${post.title} | Delta Impex Inc.`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        keywords={post.keywords}
        type="article"
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      <article>
        <header className="bg-[#0B131E] pt-28 pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 di-grid-bg opacity-30" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/65 hover:text-[#D4A017] text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all guides
            </Link>
            <p className="di-overline text-[#D4A017] mt-10">{post.category}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mt-5">
              {post.title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mt-6 max-w-4xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-white/60 mt-7">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#D4A017]" />
                {new Date(`${post.published}T00:00:00`).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-[#D4A017]" /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-[#D8D3CD] overflow-hidden rounded-sm mb-10">
                <img src={post.image} alt={post.imageAlt} className="w-full max-h-[560px] object-contain" />
              </div>

              <div className="blog-article text-[#334155] text-[1.05rem] leading-8">
                {post.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {post.sections.map((section, index) => (
                  <section key={section.heading} id={`section-${index + 1}`}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>
                            <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                <div className="bg-[#F8FAFC] border-l-4 border-[#D4A017] p-6 md:p-8 mt-10">
                  <h2 className="!mt-0">Final takeaway</h2>
                  <p className="!mb-0">{post.conclusion}</p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-7">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-sm">
                  <p className="di-overline text-[#D4A017]">In This Guide</p>
                  <nav className="mt-5 space-y-3" aria-label="Article contents">
                    {post.sections.map((section, index) => (
                      <a
                        key={section.heading}
                        href={`#section-${index + 1}`}
                        className="block text-sm text-[#475569] hover:text-[#B58812] border-b border-[#E2E8F0] pb-3"
                      >
                        {section.heading}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-[#0B131E] p-7 rounded-sm text-white">
                  <p className="di-overline text-[#D4A017]">Machine Enquiry</p>
                  <h2 className="font-heading text-2xl font-bold mt-4">Need help choosing?</h2>
                  <p className="text-white/65 text-sm leading-relaxed mt-4">
                    Tell us your material, application and required production capacity.
                  </p>
                  <Link
                    to="/contact#enquiry"
                    className="mt-6 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="bg-[#F8FAFC] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="section-label di-overline text-[#D4A017]">Relevant Machines</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Explore Related Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {relatedProducts.slice(0, 3).map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="bg-white border border-[#E2E8F0] p-5 rounded-sm hover:border-[#D4A017] transition-colors"
                  >
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-44 object-contain bg-[#D8D3CD]" />
                    <p className="di-overline text-[#D4A017] mt-5">{product.categoryName}</p>
                    <h3 className="font-heading text-xl font-bold mt-2">{product.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">More Machinery Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
              {relatedPosts.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="border-t-2 border-[#D4A017] pt-5 group">
                  <p className="di-overline text-[#64748B]">{item.category}</p>
                  <h3 className="font-heading text-xl font-bold mt-3 group-hover:text-[#B58812] transition-colors">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
