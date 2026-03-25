import { Suspense } from "react";
import type { Metadata } from "next";
import { BookOpen, Rss } from "lucide-react";
import {
  getPublishedPosts,
  getFeaturedPost,
  getAllCategories,
} from "@/lib/actions/blog.actions";
import {
  FeaturedPostCard,
  BlogPostCard,
} from "@/components/blog/blog-post-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import { BlogPagination } from "@/components/blog/blog-pagination";

const BASE_URL = "https://www.bigbl.com";

// ── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Blog | Software Guides, Windows Tips & Office Tutorials — Keyversely",
  description:
    "Expert guides on software licenses, Windows activation, Microsoft Office tutorials, and digital security. Learn how to get the most from your software.",
  alternates: { canonical: `${BASE_URL}/blog` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    title:
      "Blog | Software Guides, Windows Tips & Office Tutorials — Keyversely",
    description:
      "Expert guides on software licenses, Windows activation, Microsoft Office tutorials, and digital security.",
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Keyversely Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bigblkey",
    title:
      "Blog | Software Guides, Windows Tips & Office Tutorials — Keyversely",
    description:
      "Expert guides on software licenses, Windows activation, and Microsoft Office tutorials.",
    images: [`${BASE_URL}/og-home.png`],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE_URL}/blog`,
  name: "Keyversely Blog",
  description:
    "Expert guides on software licenses, Windows activation, Microsoft Office tutorials, and digital security.",
  url: `${BASE_URL}/blog`,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Keyversely LLC",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo.svg`,
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
    ],
  },
};

interface Props {
  searchParams: Promise<{ category?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category: categorySlug, page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10));

  const [featuredPost, { posts, total, pages }, categories] = await Promise.all(
    [
      categorySlug ? Promise.resolve(null) : getFeaturedPost(),
      getPublishedPosts({ categorySlug, page, limit: 9 }),
      getAllCategories(),
    ],
  );

  return (
    <div className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-10 pb-10 px-4 text-center overflow-hidden border-b">
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-6">
            <Rss className="w-3 h-3" />
            Resources &amp; Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-5">
            The Keyversely Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Expert guides on software licenses, Windows tips, Office tutorials,
            and everything you need to get the most from your digital products.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {total} articles
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{categories.length} categories</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <Suspense>
          <CategoryFilter categories={categories} current={categorySlug} />
        </Suspense>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        {featuredPost && page === 1 && (
          <div className="mb-8">
            <FeaturedPostCard post={featuredPost} />
          </div>
        )}

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">📭</span>
            <p className="text-muted-foreground text-lg font-medium">
              No posts yet in this category
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Check back soon — we publish regularly.
            </p>
          </div>
        )}

        <Suspense>
          <BlogPagination currentPage={page} totalPages={pages} />
        </Suspense>
      </section>

      {/* Newsletter */}
      <section className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1 text-foreground">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground text-sm">
              New guides, deals, and tips — straight to your inbox. No spam.
            </p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 md:w-64 border border-border rounded-xl px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
