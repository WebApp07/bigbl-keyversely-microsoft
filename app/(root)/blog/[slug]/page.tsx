import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/actions/blog.actions";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { prisma } from "@/db/prisma";

const BASE_URL = "https://www.bigbl.com";

interface Props {
  params: Promise<{ slug: string }>;
}

const GRADIENTS: Record<string, string> = {
  "microsoft-office": "from-blue-950 via-blue-900 to-blue-800",
  windows: "from-slate-900 via-blue-950 to-slate-800",
  security: "from-zinc-900 via-red-950 to-zinc-900",
  "how-to-guides": "from-emerald-950 via-teal-900 to-slate-900",
  news: "from-violet-950 via-purple-900 to-slate-900",
  default: "from-slate-900 via-slate-800 to-zinc-900",
};

const ICONS: Record<string, string> = {
  "microsoft-office": "/icons/office.svg",
  windows: "/icons/windows.png",
  security: "/icons/security.svg",
  "how-to-guides": "/icons/how-to-guides.png",
  news: "/icons/news.svg",
  default: "/icons/default.svg",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

// ── Metadata ──────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${BASE_URL}/blog/${post.slug}`;
  const images = post.coverImage
    ? [{ url: post.coverImage, alt: post.title }]
    : [];

  return {
    title: `${post.title} | Keyversely Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      images,
      siteName: "Keyversely — bigbl.com",
      locale: "en_US",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author.name ?? "Keyversely"],
      tags: post.tags.map((t) => t.name),
    },
    twitter: {
      card: "summary_large_image",
      site: "@Bigblkey",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const relatedPosts = await getRelatedPosts(post.id, post.categoryId);

  // Products from DB based on category
  let products: { id: string; name: string; slug: string }[] = [];
  try {
    products = await prisma.product.findMany({
      where: { category: post.category.name },
      take: 3,
      select: { id: true, name: true, slug: true },
    });
    if (products.length === 0) {
      products = await prisma.product.findMany({
        take: 3,
        select: { id: true, name: true, slug: true },
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  const gradient = GRADIENTS[post.category.slug] ?? GRADIENTS.default;
  const icon = ICONS[post.category.slug] ?? ICONS.default;

  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;

  // ── BlogPosting JSON-LD ─────────────────────────────────────
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": postUrl,
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    image: post.coverImage ?? `${BASE_URL}/og-default.png`,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: post.author.name ?? "Keyversely Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Keyversely LLC",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.svg`,
        width: 200,
        height: 60,
      },
    },
    articleSection: post.category.name,
    keywords: post.tags.map((t) => t.name).join(", "),
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.category.name,
          item: `${BASE_URL}/blog?category=${post.category.slug}`,
        },
        { "@type": "ListItem", position: 4, name: post.title, item: postUrl },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero */}
      <div
        className={`relative w-full h-48 md:h-64 bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={`${post.title} cover image`}
            fill
            className="object-cover opacity-70"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <Image
              src={icon}
              alt={`${post.category.name} icon`}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        )}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6 pt-4">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground">{post.category.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Article */}
          <article>
            <header className="mb-8">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase mb-4">
                {post.category.name}
              </div>
              <h1 className="text-3xl md:text-4xl leading-tight font-bold mb-5">
                {post.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 pb-6 border-b">
                <div className="flex items-center gap-2.5">
                  {post.author.image ? (
                    <Image
                      src={post.author.image}
                      alt={post.author.name ?? ""}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {post.author.name?.[0] ?? "?"}
                    </div>
                  )}
                  <span className="text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(post.createdAt)}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </span>
              </div>
            </header>

            {/* Content */}
            <div
              className="prose prose-slate dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={"/blog?tag=" + tag.slug}
                    className="text-xs text-muted-foreground bg-muted border px-3 py-1 rounded-full hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            {/* Share */}
            <div className="rounded-2xl border bg-card p-5 flex gap-2">
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border py-2 rounded-lg hover:text-foreground hover:border-primary/50 transition-all text-xs font-medium text-muted-foreground"
              >
                Twitter
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border py-2 rounded-lg hover:text-foreground hover:border-primary/50 transition-all text-xs font-medium text-muted-foreground"
              >
                Facebook
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border py-2 rounded-lg hover:text-foreground hover:border-primary/50 transition-all text-xs font-medium text-muted-foreground"
              >
                LinkedIn
              </a>
            </div>

            {/* Products */}
            <div className="rounded-2xl border bg-card p-5">
              <div className="text-3xl mb-3 text-center">🔑</div>
              <h4 className="font-bold text-center mb-1">Ready to buy?</h4>
              <p className="text-xs text-muted-foreground text-center leading-relaxed mb-4">
                Genuine licenses with instant delivery and free support.
              </p>
              <div className="space-y-2">
                {products.length > 0 ? (
                  products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm py-2.5 rounded-xl transition-colors text-center"
                    >
                      {product.name}
                    </Link>
                  ))
                ) : (
                  <Link
                    href="/search"
                    className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm py-2.5 rounded-xl transition-colors text-center"
                  >
                    Browse All Products
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Related Articles</h3>
              <Link
                href={"/blog?category=" + post.category.slug}
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
              >
                More in {post.category.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <BlogPostCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
