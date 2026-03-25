// components/ReviewsSection.tsx
// Server component — pulls real reviews directly from DB
// Replaces the hardcoded fake review component

import { prisma } from "@/db/prisma";
import { Star } from "lucide-react";

const trustBadges = [
  {
    src: "/badges/google-safe.png",
    alt: "Google Safe",
    label: "Google Protected",
  },
  {
    src: "/badges/ssl-certificate.png",
    alt: "SSL Secure",
    label: "SSL Secure Checkout",
  },
  { src: "/badges/paypal.png", alt: "PayPal", label: "PayPal Verified" },
  { src: "/badges/guarantee.png", alt: "Guarantee", label: "100% Guarantee" },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-2" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
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

function anonymize(name: string) {
  return name
    .split(" ")
    .map((p, i) => (i === 0 ? p : `${p[0]}.`))
    .join(" ");
}

async function getHomepageReviews() {
  return prisma.review.findMany({
    where: { isVerifiedPurchase: true },
    orderBy: [{ rating: "desc" }, { createdAt: "desc" }],
    take: 6,
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

export default async function ReviewsSection() {
  const [reviews, stats] = await Promise.all([
    getHomepageReviews(),
    getStats(),
  ]);

  if (reviews.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground">
            Trusted by Customers Worldwide
          </h2>

          {/* Aggregate score */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-5xl font-bold text-foreground">
              {stats.avg.toFixed(1)}
            </span>
            <div className="text-left">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.round(stats.avg)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Based on {stats.count} verified review
                {stats.count !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge) => (
            <div key={badge.alt} className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.src}
                alt={badge.alt}
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-sm font-medium text-foreground">
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-muted/40 border border-border p-5 rounded-xl hover:border-primary/30 transition-colors"
            >
              <StarRow rating={review.rating} />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{review.description}"
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3 mt-auto">
                <span className="font-semibold text-foreground">
                  {anonymize(review.user.name)}
                </span>
                <span className="text-muted-foreground/70">
                  {review.product.name.split(" ").slice(0, 3).join(" ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
          >
            See all reviews →
          </a>
        </div>

        {/* Google Safe note */}
        <p className="text-xs text-muted-foreground text-center mt-8">
          Verified &amp; monitored by{" "}
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=https://www.bigbl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Google Safe Browsing
          </a>
        </p>
      </div>
    </section>
  );
}
