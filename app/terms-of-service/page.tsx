import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Keyversely LLC",
  description:
    "Read the Terms of Service for Keyversely LLC (bigbl.com). Understand your rights and responsibilities when purchasing digital software licenses from our store.",
  alternates: { canonical: "https://www.bigbl.com/terms-of-service" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | Keyversely LLC",
  url: "https://www.bigbl.com/terms-of-service",
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
        name: "Terms of Service",
        item: "https://www.bigbl.com/terms-of-service",
      },
    ],
  },
};

export default function TermsOfServicePage() {
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
          <span>Terms of Service</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Keyversely LLC · Last updated: November 24, 2025
        </p>

        <hr className="border-border mb-10" />

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            These Terms of Service govern your use of the Keyversely website
            (bigbl.com) and any purchase you make from us. By accessing our site
            or placing an order, you agree to these terms. Please read them
            before you buy.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We have written these terms in plain language. If anything is
            unclear, contact us before purchasing — we are happy to explain.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            1. About Us
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Keyversely LLC is a limited liability company registered in Wyoming,
            United States (Entity ID: 2025-001824045). We operate the digital
            software store at bigbl.com, selling genuine software activation
            keys for personal and business use.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            2. Our Products
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            All products sold by Keyversely are digital software licenses —
            specifically, activation keys delivered by email. There are no
            physical goods involved in any transaction.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            The licenses we sell are genuine and sourced through verified
            distribution channels. We are a recognized partner on the Microsoft
            Commercial Marketplace.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            It is your responsibility to verify that the software you are
            purchasing is compatible with your device and operating system
            before completing your purchase. Product descriptions on our site
            include compatibility information — please read them carefully.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            3. Orders and Payment
          </h2>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              All prices are listed in US dollars and are inclusive of any
              applicable fees unless otherwise stated at checkout.
            </li>
            <li className="leading-relaxed">
              By placing an order, you confirm that you are authorized to use
              the payment method provided.
            </li>
            <li className="leading-relaxed">
              We reserve the right to cancel or refuse any order at our
              discretion, including in cases of suspected fraud or payment
              issues. You will be notified and any charge will be refunded in
              full.
            </li>
            <li className="leading-relaxed">
              Your order is confirmed when you receive an email from us with
              your activation key.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            4. Delivery
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Activation keys are delivered to the email address you provide at
            checkout, typically within minutes of payment confirmation. Delivery
            times may occasionally be longer due to payment verification.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you have not received your key within 30 minutes, please check
            your spam folder and then contact us at{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              support@keyversely.com
            </a>
            . We will resend it promptly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            5. License Usage
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Software licenses purchased from Keyversely are for personal or
            internal business use only. By purchasing a license, you agree to:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              Use the license in accordance with the software
              manufacturer&apos;s end-user license agreement (EULA).
            </li>
            <li className="leading-relaxed">
              Not resell, redistribute, sublicense, or transfer the activation
              key to any third party without our written permission.
            </li>
            <li className="leading-relaxed">
              Not use the key for any unlawful purpose.
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            Violation of these terms may result in cancellation of your license
            and potential legal action.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            6. Refunds
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our refund policy is detailed separately on our{" "}
            <a
              href="/refund-policy"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Refund Policy page
            </a>
            , which forms part of these Terms of Service. In summary: if your
            key does not work as described, we will replace it or refund you
            within 24 hours. Refunds are not available for successfully
            activated keys.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            7. Intellectual Property
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All software products sold on this site are the intellectual
            property of their respective manufacturers (such as Microsoft
            Corporation). Keyversely LLC is an independent reseller and is not
            affiliated with, endorsed by, or a subsidiary of any software
            manufacturer. Product names, trademarks, and logos belong to their
            respective owners.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            8. Limitation of Liability
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Keyversely LLC&apos;s liability to you in connection with any
            purchase is limited to the amount you paid for the product in
            question. We are not liable for:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base">
            <li className="leading-relaxed">
              Indirect, incidental, or consequential damages
            </li>
            <li className="leading-relaxed">
              Loss of data or software resulting from use of our products
            </li>
            <li className="leading-relaxed">
              Issues caused by incompatibility with your device or system
            </li>
            <li className="leading-relaxed">
              Actions taken by the software manufacturer (e.g., license
              revocation)
            </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-4">
            Nothing in these terms limits our liability for fraud, gross
            negligence, or any liability that cannot be excluded by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            9. Governing Law
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            These Terms of Service are governed by the laws of the State of
            Wyoming, United States, without regard to conflict of law
            principles. Any disputes arising from these terms or your use of our
            site shall be subject to the exclusive jurisdiction of the courts of
            Wyoming.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            10. Changes to These Terms
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We may update these Terms of Service at any time. Changes take
            effect as soon as they are posted on this page. We will update the
            &quot;last updated&quot; date accordingly. Your continued use of our
            site after changes are posted means you accept the updated terms.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-3 text-foreground">
            Questions About These Terms?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            If anything in these terms is unclear, please reach out before
            purchasing. We are happy to clarify.
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">
                Keyversely LLC
              </span>
            </p>
            <p>
              63 N Burritt Ave, Rm 100 PMB 1180, Buffalo, Wyoming 82834, United
              States
            </p>
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
