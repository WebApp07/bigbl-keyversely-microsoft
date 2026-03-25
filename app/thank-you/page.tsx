import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Order | Keyversely LLC",
  description:
    "Your order has been successfully processed. Check your email for your activation key.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="max-w-lg w-full bg-muted/40 border border-border rounded-2xl p-10 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-3 text-foreground">
          Thank you for your order!
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Your order has been successfully processed. Your activation key is on
          its way to your inbox — it usually arrives within a few minutes.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Can't find it? Check your spam folder. Still nothing after 30 minutes?{" "}
          <a
            href="mailto:support@keyversely.com"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Contact us
          </a>
          .
        </p>

        {/* What's next */}
        <div className="text-left bg-background border border-border rounded-xl p-5 mb-8 space-y-3">
          <p className="text-sm font-semibold text-foreground mb-1">
            What happens next:
          </p>
          {[
            "Check your email inbox for your activation key",
            "Download the software from the official Microsoft website",
            "Enter your key when prompted during installation",
            "Enjoy your software — activation is instant",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Continue Shopping
          </Link>
          <Link
            href="/help-center"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-colors text-sm"
          >
            Help Center
          </Link>
        </div>

        {/* Trustpilot CTA */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground mb-3">
            Happy with your purchase? Leave us a review — it helps other
            customers buy with confidence.
          </p>
          <a
            href="https://www.trustpilot.com/review/bigbl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            ★ Leave a review on Trustpilot
          </a>
        </div>
      </div>
    </main>
  );
}
