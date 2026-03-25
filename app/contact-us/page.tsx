import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import Link from "next/link";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | Keyversely LLC",
  description:
    "Get in touch with Keyversely LLC. We respond to every message within 24 hours. Email us at support@keyversely.com or call (307) 785-6160.",
  alternates: { canonical: "https://www.bigbl.com/contact-us" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.bigbl.com/contact-us",
    title: "Contact Us | Keyversely LLC",
    description:
      "Get in touch with Keyversely LLC. We respond to every message within 24 hours.",
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | Keyversely LLC",
  url: "https://www.bigbl.com/contact-us",
  description:
    "Contact Keyversely LLC for support with software licenses, activation keys, refunds, and general enquiries.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Keyversely LLC",
    url: "https://www.bigbl.com",
    telephone: "+1-307-785-6160",
    email: "support@keyversely.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "63 N Burritt Ave, Rm 100 PMB 1180",
      addressLocality: "Buffalo",
      addressRegion: "WY",
      postalCode: "82834",
      addressCountry: "US",
    },
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
        name: "Contact Us",
        item: "https://www.bigbl.com/contact-us",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>Contact Us</span>
        </nav>

        {/* Header */}
        <section className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We&apos;re a real team and we read every message. Whatever your
            question, we&apos;ll get back to you within 24 hours.
          </p>
        </section>

        {/* Business Info */}
        <section className="bg-muted/40 border border-border p-6 rounded-xl space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Customer Service
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">
                Business Name:{" "}
              </span>
              Keyversely LLC
            </li>
            <li>
              <span className="font-semibold text-foreground">Address: </span>
              63 N Burritt Ave, Rm 100 PMB 1180, Buffalo, Wyoming 82834, United
              States
            </li>
            <li>
              <span className="font-semibold text-foreground">Email: </span>
              <a
                href="mailto:support@keyversely.com"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                support@keyversely.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-foreground">Phone: </span>
              <a
                href="tel:+13077856160"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                (307) 785-6160
              </a>
            </li>
            <li>
              <span className="font-semibold text-foreground">Live Chat: </span>
              Available on site
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Business Hours:{" "}
              </span>
              Monday – Friday, 9:00 AM – 6:00 PM ET
            </li>
          </ul>
        </section>

        {/* Need Help */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">
            Need Help?
          </h2>
          <p className="text-muted-foreground mb-4">
            Reach out via the form below or email us directly — we usually
            respond within a few hours on business days.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { href: "/help-center", label: "Help Center" },
              { href: "/refund-policy", label: "Refund Policy" },
              { href: "/return-policy", label: "Return Policy" },
              { href: "/shipping-delivery", label: "Shipping & Delivery" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Send Us a Message
          </h2>
          <div className="border border-border bg-background p-6 rounded-xl">
            <ContactForm />
          </div>
        </section>

        <hr className="border-border" />
        <p className="text-xs text-muted-foreground">
          Keyversely LLC · Entity ID 2025-001824045 · Wyoming, United States
        </p>
      </main>
      <Footer />
    </>
  );
}
