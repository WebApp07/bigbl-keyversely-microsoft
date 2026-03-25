import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Return Policy | Keyversely LLC",
  description:
    "Keyversely LLC's return policy for digital software licenses. We don't accept returns on activated keys, but we replace or refund any key that doesn't work — within 24 hours.",
  alternates: { canonical: "https://www.bigbl.com/return-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.bigbl.com/return-policy",
    title: "Return Policy | Keyversely LLC",
    description:
      "Keyversely LLC's return policy for digital software licenses. We don't accept returns on activated keys, but we replace or refund any key that doesn't work — within 24 hours.",
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Return Policy | Keyversely LLC",
  url: "https://www.bigbl.com/return-policy",
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
        name: "Return Policy",
        item: "https://www.bigbl.com/return-policy",
      },
    ],
  },
};

export default function ReturnPolicyPage() {
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
          <span>Return Policy</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Return Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Keyversely LLC · Last updated: November 24, 2025
        </p>

        <hr className="border-border mb-10" />

        {/* Intro */}
        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            We sell digital software licenses — activation keys delivered by
            email. Because our products are intangible and delivered instantly,
            they work differently from physical goods. There is nothing to ship
            back.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            That said, we stand fully behind every product we sell. If something
            is wrong with your order — the key doesn&apos;t work, you got the
            wrong product, or your key was already used — we will fix it. No
            hassle, no waiting weeks.
          </p>
        </section>

        {/* No physical returns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            No Physical Returns
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Since all our products are digital, there is no physical item to
            return. Once an activation key has been successfully used to
            activate software, that transaction is considered complete and
            cannot be reversed. This is standard practice for all digital
            software retailers worldwide.
          </p>
        </section>

        {/* What we will fix */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            What We Will Fix — Guaranteed
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Even though returns are not possible, we take full responsibility
            for any of the following situations. In each case, you will receive
            either a free replacement key or a full refund — your choice:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Key doesn't work",
                desc: "If the activation key we sent you fails during installation or setup on a compatible, supported system, we will send a replacement immediately or refund you in full.",
              },
              {
                title: "Wrong product delivered",
                desc: "If you ordered Windows 11 Home and received a key for a different version or product, that is entirely on us. We will send the correct key or refund you.",
              },
              {
                title: "Key was already used",
                desc: "Every key we sell is verified before delivery. If yours was already activated by someone else, we take full responsibility and will replace or refund immediately.",
              },
              {
                title: "Key never arrived",
                desc: "If your key did not arrive within 30 minutes of payment confirmation — and it's not in your spam folder — contact us. We will resend it or refund you right away.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-muted/40 p-5"
              >
                <p className="font-semibold text-foreground mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Not covered */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Situations Not Covered
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We are unable to offer a return or refund in these situations:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              The key has been successfully activated and the software is
              working as described.
            </li>
            <li className="leading-relaxed">
              You purchased the wrong product and the key has already been
              activated. (If it has <em>not</em> been activated yet, contact us
              — we may be able to help.)
            </li>
            <li className="leading-relaxed">
              Your device does not meet the minimum system requirements for the
              software. Please verify compatibility before purchasing.
            </li>
            <li className="leading-relaxed">
              You changed your mind after the key was delivered and activated.
            </li>
            <li className="leading-relaxed">
              Issues caused by incorrect installation or user error unrelated to
              the key itself.
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            If you are unsure whether your situation is covered, reach out
            before assuming it isn't — we would rather talk it through than
            leave you stuck.
          </p>
        </section>

        {/* How to contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How to Contact Us About an Issue
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              support@keyversely.com
            </a>{" "}
            with the following:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base mb-4">
            <li>Your order number or the email address used at checkout</li>
            <li>The product you purchased</li>
            <li>A description of the problem</li>
            <li>A screenshot of any error message (if applicable)</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            We respond to every request within{" "}
            <span className="font-semibold text-foreground">24 hours</span>,
            Monday through Friday, 9:00 AM – 6:00 PM ET.
          </p>
        </section>

        {/* Contact card */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">Contact Us</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We are a real team that reads every message. Don't hesitate to reach
            out.
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
            <p className="pt-2">
              <span className="font-semibold text-foreground">
                Mailing address:{" "}
              </span>
              63 N Burritt Ave, Rm 100 PMB 1180, Buffalo, Wyoming 82834, United
              States
            </p>
          </div>
        </section>

        <hr className="border-border mb-6" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Keyversely LLC · Entity ID 2025-001824045 · Wyoming, United States
          <br />
          This Return Policy is part of our{" "}
          <a
            href="/terms-of-service"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Terms of Service
          </a>
          . See also our{" "}
          <a
            href="/refund-policy"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Refund Policy
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
