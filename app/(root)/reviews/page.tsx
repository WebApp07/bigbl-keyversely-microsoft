import type { Metadata } from "next";
import { prisma } from "@/db/prisma";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews | Keyversely LLC",
  description:
    "Read genuine verified purchase reviews for Keyversely LLC. Real experiences from people who bought Windows, Office, and antivirus licenses at bigbl.com.",
  alternates: { canonical: "https://www.bigbl.com/reviews" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.bigbl.com/reviews",
    title: "Customer Reviews | Keyversely LLC",
    description:
      "Genuine verified purchase reviews for Keyversely LLC — real experiences from real customers.",
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
};

export const revalidate = 86400;

// ── Data ──────────────────────────────────────────────────────
async function getReviews() {
  return prisma.review.findMany({
    where: { isVerifiedPurchase: true },
    orderBy: [{ rating: "desc" }, { createdAt: "desc" }],
    include: {
      user: { select: { name: true } },
      product: { select: { name: true } },
    },
  });
}

async function getStats() {
  const result = await prisma.review.aggregate({
    _avg: { rating: true },
    _count: { id: true },
  });
  return {
    avg: Math.round((result._avg.rating ?? 0) * 10) / 10,
    count: result._count.id,
  };
}

// ── Helpers ───────────────────────────────────────────────────
function anonymize(name: string) {
  return name
    .split(" ")
    .map((p, i) => (i === 0 ? p : `${p[0]}.`))
    .join(" ");
}

function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }
        />
      ))}
    </div>
  );
}

function RatingBar({
  star,
  count,
  total,
}: {
  star: number;
  count: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-muted-foreground w-4 text-right shrink-0">
        {star}
      </span>
      <Star size={12} className="fill-yellow-400 text-yellow-400 shrink-0" />
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-muted-foreground w-4 shrink-0">{count}</span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default async function ReviewsPage() {
  const [reviews, stats] = await Promise.all([getReviews(), getStats()]);

  // Schema.org AggregateRating + individual Review objects
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keyversely LLC",
    url: "https://www.bigbl.com",
    ...(stats.count > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: stats.avg.toFixed(1),
        reviewCount: stats.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: anonymize(r.user.name) },
        datePublished: r.createdAt.toISOString().split("T")[0],
        name: r.title,
        reviewBody: r.description,
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
      })),
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bigbl.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reviews",
        item: "https://www.bigbl.com/reviews",
      },
    ],
  };

  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="max-w-2xl mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-muted-foreground mb-8"
        >
          <a href="/" className="text-primary hover:underline">
            Home
          </a>
          <span className="mx-2">›</span>
          <span>Customer Reviews</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Customer Reviews
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Real experiences from verified buyers. Every review came from a
          confirmed purchase on bigbl.com.
        </p>

        <hr className="border-border mb-10" />

        {/* Rating summary */}
        {stats.count > 0 && (
          <section className="mb-12 rounded-xl border border-border bg-muted/40 p-7">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="text-center sm:text-left shrink-0">
                <p className="text-6xl font-bold text-foreground leading-none">
                  {stats.avg.toFixed(1)}
                </p>
                <div className="mt-2">
                  <StarRow rating={Math.round(stats.avg)} size={20} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {stats.count} verified review{stats.count !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex-1 w-full space-y-2.5">
                {breakdown.map(({ star, count }) => (
                  <RatingBar
                    key={star}
                    star={star}
                    count={count}
                    total={stats.count}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reviews list */}
        {reviews.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium text-foreground mb-2">
              No reviews yet
            </p>
            <p className="text-sm">
              Be the first to leave a review after your purchase.
            </p>
          </div>
        ) : (
          <section className="grid gap-4">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-xl border border-border bg-background p-6 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <StarRow rating={review.rating} />
                    <h3 className="font-semibold text-foreground mt-1 leading-snug">
                      {review.title}
                    </h3>
                  </div>
                  {review.isVerifiedPurchase && (
                    <span className="shrink-0 text-xs font-medium text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/40 rounded-full px-2.5 py-0.5">
                      Verified Purchase
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span className="font-medium text-foreground">
                    {anonymize(review.user.name)}
                  </span>
                  <div className="text-right space-y-0.5">
                    <p className="text-muted-foreground/70">
                      {review.product.name.split(" ").slice(0, 4).join(" ")}
                    </p>
                    <time dateTime={review.createdAt.toISOString()}>
                      {review.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Trustpilot CTA */}
        <div className="mt-14 rounded-xl border border-border bg-muted/40 p-7 text-center">
          <p className="text-base font-semibold text-foreground mb-1">
            Happy with your purchase?
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            Leave a review on Trustpilot and help other customers buy with
            confidence.
          </p>
          <a
            href="https://www.trustpilot.com/review/bigbl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Leave a Review on Trustpilot
          </a>
        </div>

        <hr className="border-border mt-14 mb-6" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Keyversely LLC · Entity ID 2025-001824045 · Wyoming, United States
          <br />
          All reviews are from verified purchases. We do not fabricate or pay
          for reviews.
        </p>
      </main>
    </>
  );
}
