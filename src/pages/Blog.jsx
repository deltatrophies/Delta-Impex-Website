import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../data/blog";
import { SITE } from "../data/site";

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    url: `${SITE.url}/blog`,
    name: "Delta Impex Inc. Industrial Machinery Blog",
    description:
      "Practical industrial machinery buying guides, selection advice and workshop planning articles from Delta Impex Inc.",
    publisher: { "@id": `${SITE.url}/#organization` },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: post.published,
      dateModified: post.updated,
    })),
  };

  return (
    <div data-testid="page-blog">
      <SEO
        title="Industrial Machinery Blog & Buying Guides | Delta Impex Inc."
        description="Read practical CNC, plastic moulding, woodworking and used machinery buying guides from Delta Impex Inc., Jalandhar."
        path="/blog"
        structuredData={blogSchema}
      />

      <section className="relative bg-[#0B131E] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933063/delta-impex/images/pages/home/gallery-cnc-machinery-w1200.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/90 to-[#0B131E]/55" />
          <div className="absolute inset-0 di-grid-bg opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label di-overline text-[#D4A017]">
            Machinery Knowledge
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white tracking-tight mt-6 max-w-4xl leading-tight">
            Industrial Machinery
            <span className="text-[#D4A017]"> Insights & Guides</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mt-6 max-w-3xl">
            Practical guidance for selecting, comparing and planning industrial
            machinery for real production requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group bg-white border border-[#E2E8F0] rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block h-64 overflow-hidden bg-[#D8D3CD]">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </Link>
                <div className="p-6 md:p-8">
                  <p className="di-overline text-[#D4A017]">{post.category}</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0B131E] leading-tight mt-4">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#B58812] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#64748B]">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 text-[#D4A017]" />
                      {new Date(`${post.published}T00:00:00`).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-4 h-4 text-[#D4A017]" /> {post.readTime}
                    </span>
                  </div>
                  <p className="text-[#475569] leading-relaxed mt-5">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0B131E] border-b border-[#D4A017] pb-1 group-hover:gap-3 transition-all"
                  >
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label di-overline text-[#D4A017] justify-center">
            Need Specific Guidance?
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B131E] mt-5">
            Discuss Your Machine Requirement
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Share your material, application and production goals with the Delta Impex Inc. team.
          </p>
          <Link
            to="/contact#enquiry"
            className="mt-8 inline-flex items-center gap-2 bg-[#D4A017] text-[#0B131E] hover:bg-[#B58812] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Send Enquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
