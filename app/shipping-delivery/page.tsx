import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Delivery | Keyversely LLC",
  description:
    "All Keyversely software licenses are delivered digitally by email within minutes of purchase. No physical shipping. Learn how delivery works at bigbl.com.",
  alternates: { canonical: "https://www.bigbl.com/shipping-delivery" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shipping & Delivery | Keyversely LLC",
  url: "https://www.bigbl.com/shipping-delivery",
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
        name: "Shipping & Delivery",
        item: "https://www.bigbl.com/shipping-delivery",
      },
    ],
  },
};

export default function ShippingDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />
      <main className="max-w-2xl mx-auto px-6 py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>Shipping &amp; Delivery</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Shipping &amp; Delivery
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Keyversely LLC · Last updated: November 24, 2025
        </p>

        <hr className="border-border mb-10" />

        {/* Summary card */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">
            The short version
          </h2>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li>
              ✅{" "}
              <span className="font-semibold text-foreground">
                100% digital delivery
              </span>{" "}
              — no physical product is ever shipped.
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold text-foreground">
                Delivered by email
              </span>{" "}
              — your activation key goes straight to your inbox.
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold text-foreground">
                Usually within minutes
              </span>{" "}
              — most orders are delivered in under 10 minutes.
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold text-foreground">
                Free delivery
              </span>{" "}
              — there is no shipping charge on any order.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How Delivery Works
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Keyversely sells digital software licenses only. Every product we
            offer is an activation key — a unique code you enter into your
            software to unlock it. There is no disc, no box, and no physical
            delivery of any kind.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Once your payment is confirmed, your activation key is automatically
            sent to the email address you provided at checkout. Most customers
            receive their key within 5–10 minutes. In some cases, payment
            verification may take a little longer, but you will always receive
            your key within 30 minutes.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The email will come from{" "}
            <span className="font-semibold text-foreground">
              support@keyversely.com
            </span>
            . If you do not see it in your inbox, please check your spam or junk
            mail folder before contacting us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Delivery Timeframes
          </h2>
          <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
            {[
              {
                method: "Standard digital delivery",
                time: "5–10 minutes",
                cost: "Free",
              },
              {
                method: "Delayed (payment verification required)",
                time: "Up to 30 minutes",
                cost: "Free",
              },
              {
                method: "Physical shipping",
                time: "Not available",
                cost: "N/A",
              },
            ].map((row) => (
              <div key={row.method} className="flex gap-4 px-5 py-3 text-sm">
                <span className="flex-1 text-muted-foreground">
                  {row.method}
                </span>
                <span className="font-semibold text-foreground w-32 text-right">
                  {row.time}
                </span>
                <span className="text-primary font-semibold w-12 text-right">
                  {row.cost}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            What to Do After You Receive Your Key
          </h2>
          <ol className="space-y-3 list-decimal pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              Open the email from support@keyversely.com and copy your
              activation key.
            </li>
            <li className="leading-relaxed">
              Download and install the software from the official
              manufacturer&apos;s website (e.g., microsoft.com for Windows or
              Office).
            </li>
            <li className="leading-relaxed">
              During installation or setup, enter your activation key when
              prompted.
            </li>
            <li className="leading-relaxed">
              Your software is now activated and ready to use.
            </li>
          </ol>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            If you run into any issues during activation, contact us right away.
            We will walk you through the process or replace the key if there is
            a problem.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            I Haven&apos;t Received My Key
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            If 30 minutes have passed since your purchase and you still have not
            received your key, here is what to check:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base mb-4">
            <li className="leading-relaxed">
              Check your{" "}
              <span className="font-semibold text-foreground">
                spam or junk mail
              </span>{" "}
              folder.
            </li>
            <li className="leading-relaxed">
              Make sure the email address you provided at checkout was correct.
            </li>
            <li className="leading-relaxed">
              Check that your payment was successfully processed (look for a
              confirmation from your bank or payment provider).
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you have checked all of the above and still have not received
            your key, contact us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              support@keyversely.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13077856160"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              (307) 785-6160
            </a>
            . We will resend your key immediately or issue a full refund if the
            issue cannot be resolved.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            International Orders
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Because all our products are delivered digitally, we can serve
            customers anywhere in the world. There are no shipping restrictions
            based on location. Please note that some software licenses may be
            region-specific — product descriptions will indicate if this
            applies. If you are unsure whether a product works in your region,
            contact us before purchasing.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">Need Help?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Our support team is available Monday through Friday and responds to
            every message.
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
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
