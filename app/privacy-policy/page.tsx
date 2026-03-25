import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Keyversely LLC",
  description:
    "Keyversely LLC is committed to protecting your privacy. Learn how we collect, use, and protect your personal information when you shop at bigbl.com.",
  alternates: { canonical: "https://www.bigbl.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Keyversely LLC",
  url: "https://www.bigbl.com/privacy-policy",
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
        name: "Privacy Policy",
        item: "https://www.bigbl.com/privacy-policy",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
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
          <span>Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Keyversely LLC · Last updated: November 24, 2025
        </p>

        <hr className="border-border mb-10" />

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Keyversely LLC ("we," "us," or "our") operates the website
            bigbl.com. This Privacy Policy explains what information we collect
            when you visit or make a purchase from our store, how we use it, and
            what rights you have over it.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We keep this simple: we collect only what we need to process your
            order and support you. We do not sell your personal information to
            anyone, ever.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Information We Collect
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            When you place an order or contact us, we may collect:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base mb-4">
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Contact information
              </span>{" "}
              — your name and email address, used to deliver your license key
              and send order confirmations.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Payment information
              </span>{" "}
              — billing details processed securely through our payment provider.
              We do not store your full card number on our servers.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Order details
              </span>{" "}
              — the products you purchased and transaction history, used to
              fulfill orders and handle refund requests.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Device and usage data
              </span>{" "}
              — basic information like IP address, browser type, and pages
              visited, collected automatically to help us understand how our
              site is used and to prevent fraud.
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            We do not collect more than we need. We do not ask for your phone
            number unless you voluntarily provide it when contacting support.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How We Use Your Information
          </h2>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              To process and deliver your order (primarily, sending your license
              key by email)
            </li>
            <li className="leading-relaxed">
              To send order confirmations and support communications
            </li>
            <li className="leading-relaxed">
              To handle refund or replacement requests
            </li>
            <li className="leading-relaxed">To detect and prevent fraud</li>
            <li className="leading-relaxed">
              To improve our website and customer experience
            </li>
            <li className="leading-relaxed">
              To comply with legal obligations
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            We do not use your information for automated profiling or sell it to
            advertisers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Sharing Your Information
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            We do not sell, trade, or rent your personal information. We may
            share it only with trusted third parties who help us operate our
            business:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Payment processors
              </span>{" "}
              — to securely handle your transaction.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Email service providers
              </span>{" "}
              — to deliver your license key and order confirmation.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Analytics tools
              </span>{" "}
              — to understand website traffic in aggregated, anonymized form.
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Law enforcement or courts
              </span>{" "}
              — if required by law or to protect our rights.
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            All third parties we work with are contractually required to handle
            your data securely and only for the purpose we specify.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Our website uses cookies — small files stored in your browser — to
            keep your shopping session active and to understand how visitors use
            the site. We use:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Essential cookies
              </span>{" "}
              — required for the site to function (e.g., your cart and session).
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-foreground">
                Analytics cookies
              </span>{" "}
              — help us understand which pages are most useful (anonymized
              data).
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            You can disable cookies in your browser settings at any time.
            Disabling essential cookies may affect how the site functions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Data Retention
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We keep your order information for as long as necessary to fulfill
            our legal and business obligations — typically up to 7 years for
            transaction records in accordance with US tax law. If you request
            deletion of your account or data, we will remove what we are legally
            permitted to remove and inform you of anything we are required to
            retain.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Your Rights
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Depending on where you live, you may have the right to:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              Access the personal information we hold about you
            </li>
            <li className="leading-relaxed">
              Request correction of inaccurate data
            </li>
            <li className="leading-relaxed">
              Request deletion of your data (where legally permitted)
            </li>
            <li className="leading-relaxed">
              Opt out of any marketing communications
            </li>
            <li className="leading-relaxed">
              Lodge a complaint with a data protection authority
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              support@keyversely.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Children&apos;s Privacy
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our store is not directed at children under the age of 13. We do not
            knowingly collect personal information from children. If you believe
            we have inadvertently collected such information, please contact us
            and we will delete it promptly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Changes to This Policy
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. When we do, we
            will update the "last updated" date at the top of this page. We
            encourage you to review this page periodically. Continued use of our
            site after changes are posted constitutes your acceptance of the
            updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">Contact Us</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or how we handle
            your data, please get in touch:
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">
                Keyversely LLC
              </span>
            </p>
            <p>63 N Burritt Ave, Rm 100 PMB 1180</p>
            <p>Buffalo, Wyoming 82834, United States</p>
            <p className="mt-2">
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
