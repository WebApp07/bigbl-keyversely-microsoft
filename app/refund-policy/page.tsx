import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Keyversely LLC",
  description:
    "Keyversely LLC offers a straightforward refund policy for all digital software licenses. If your key doesn't work, we replace it or refund you within 24 hours.",
  alternates: { canonical: "https://www.bigbl.com/refund-policy" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund Policy | Keyversely LLC",
  url: "https://www.bigbl.com/refund-policy",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Keyversely LLC",
    url: "https://www.bigbl.com",
  },
  breadcrumb: {
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
        name: "Refund Policy",
        item: "https://www.bigbl.com/refund-policy",
      },
    ],
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>Refund Policy</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Refund Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Keyversely LLC · Last updated: November 24, 2025
        </p>

        <hr className="border-border mb-10" />

        {/* Intro */}
        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            We want every purchase you make at Keyversely to go smoothly. All of
            our products are digital software licenses — there is no physical
            item to return, and once a key is delivered to your inbox it cannot
            be &quot;sent back.&quot; That said, we stand fully behind the
            quality of what we sell, and our refund policy reflects that.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            If something goes wrong, we will make it right. That is our
            commitment, and it is unconditional.
          </p>
        </section>

        {/* Eligible for refund */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            When You Are Eligible for a Refund
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            You are entitled to a full refund or a free replacement key in any
            of the following situations:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                The key does not work.
              </span>{" "}
              If the activation key we delivered fails to activate the software
              on a supported system, contact us and we will resolve it
              immediately.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                You received the wrong product.
              </span>{" "}
              If the key you received is for a different product or version than
              what you ordered, we will send the correct key or refund you in
              full.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                The key was already used.
              </span>{" "}
              All keys we sell are verified before delivery. If you receive a
              key that has already been activated by someone else, that is
              entirely our responsibility and we will fix it.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                You never received your key.
              </span>{" "}
              If your key did not arrive by email within 30 minutes of payment
              confirmation, contact us and we will resend it or issue a refund.
            </li>
          </ul>
        </section>

        {/* Not eligible */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            When Refunds Do Not Apply
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Because our products are digital and delivered instantly, we are
            unable to offer refunds in the following situations:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              The key has been successfully activated and is working as
              described.
            </li>
            <li className="leading-relaxed">
              You purchased the wrong product and the key has already been
              activated.
            </li>
            <li className="leading-relaxed">
              Your device or operating system does not meet the minimum
              requirements for the software — please check compatibility before
              purchasing.
            </li>
            <li className="leading-relaxed">
              You changed your mind after the key was successfully delivered and
              activated.
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            If you are unsure whether a product is compatible with your system,
            please contact us before purchasing — we are happy to help you
            choose the right one.
          </p>
        </section>

        {/* How to request */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How to Request a Refund
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              support@keyversely.com
            </a>{" "}
            with the following information:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base mb-4">
            <li>Your order number or the email address used at checkout</li>
            <li>The product you purchased</li>
            <li>A brief description of the issue</li>
            <li>A screenshot of the error (if applicable)</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            We respond to all refund requests within{" "}
            <span className="font-semibold text-foreground">24 hours</span>,
            Monday through Friday, 9:00 AM – 6:00 PM ET. Requests submitted over
            the weekend will be handled the next business day.
          </p>
        </section>

        {/* Refund method */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How Refunds Are Issued
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Approved refunds are returned to the original payment method used at
            checkout. Processing times vary depending on your bank or payment
            provider, but typically appear within 3–7 business days.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            In many cases we will offer a replacement key first — this is
            usually the fastest resolution. If you would prefer a refund instead
            of a replacement, just let us know and we will honor that.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">Questions?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We are a small team and we read every message. If you have a
            question about a purchase or are unsure whether your situation
            qualifies, just reach out — we would rather talk it through than
            leave you uncertain.
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Email: </span>
              <a
                href="mailto:support@keyversely.com"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                support@keyversely.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Phone: </span>
              <a
                href="tel:+13077856160"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                (307) 785-6160
              </a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Hours: </span>
              Monday – Friday, 9:00 AM – 6:00 PM ET
            </p>
          </div>
        </section>

        <hr className="border-border mb-6" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Keyversely LLC · Entity ID 2025-001824045 · Wyoming, United States
        </p>
      </main>
      <Footer />
    </>
  );
}
