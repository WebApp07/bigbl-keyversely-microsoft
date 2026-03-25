import type { Metadata } from "next";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "@/components/footer";
import Link from "next/link";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Help Center | Keyversely LLC",
  description:
    "Find answers to common questions about activating your software key, delivery, refunds, and more. Keyversely LLC customer support for bigbl.com.",
  alternates: { canonical: "https://www.bigbl.com/help-center" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.bigbl.com/help-center",
    title: "Help Center | Keyversely LLC",
    description:
      "Find answers to common questions about activating your software key, delivery, refunds, and more.",
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
};

// ── JSON-LD: FAQPage schema (Google rich results) ─────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I activate my software key?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download and install the software from the official manufacturer website. During setup, enter the activation key exactly as it appears in your email. For Windows, go to Settings → System → Activation and click 'Change product key'. For Office, the activation wizard appears on first launch.",
      },
    },
    {
      "@type": "Question",
      name: "I didn't receive my key. What should I do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, check your spam or junk mail folder — our emails sometimes land there. If it's been more than 30 minutes since your purchase and you still can't find it, contact us at support@keyversely.com with your order number and we will resend it immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Is my key genuine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All licenses sold by Keyversely LLC are genuine and sourced through verified distribution channels. We are a recognized partner on the Microsoft Commercial Marketplace, which confirms our legitimacy as a software retailer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my key on multiple devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the license type. Most standard licenses (Windows Home, Windows Pro, Office Home & Student) are for a single device only. Volume or multi-device licenses will be clearly labeled. If you are unsure, check the product description or contact us before purchasing.",
      },
    },
    {
      "@type": "Question",
      name: "Which Windows versions are compatible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each product listing specifies the compatible Windows version. Windows 11 keys require a PC that meets Microsoft's Windows 11 hardware requirements (TPM 2.0, Secure Boot, compatible CPU). Windows 10 keys work on any PC running Windows 7 or later. Always check your device specs against the product requirements before purchasing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email support@keyversely.com with your order number, the product purchased, and a description of the issue. If your key doesn't work, was already used, or you received the wrong product, we will replace it or refund you within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "I received the wrong product. What happens now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's entirely our mistake and we will fix it immediately. Email us at support@keyversely.com with your order number and what you received versus what you ordered. We will send the correct key right away or issue a full refund.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach us by email at support@keyversely.com or by phone at (307) 785-6160. Our team is available Monday through Friday, 9:00 AM to 6:00 PM ET. We respond to every message within 24 hours.",
      },
    },
  ],
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
      name: "Help Center",
      item: "https://www.bigbl.com/help-center",
    },
  ],
};

// ── FAQ sections ──────────────────────────────────────────────
const sections = [
  {
    id: "your-order",
    title: "Your Order & Delivery",
    icon: "📦",
    items: [
      {
        question: "I didn't receive my key. What should I do?",
        answer: (
          <div className="space-y-3">
            <p>
              Keys are delivered within minutes — but sometimes emails get
              caught by spam filters. Here&apos;s what to check:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Check your{" "}
                <strong className="text-foreground">spam or junk mail</strong>{" "}
                folder.
              </li>
              <li>
                Make sure the email address you entered at checkout was correct.
              </li>
              <li>
                Confirm your payment went through (check your bank or PayPal).
              </li>
            </ol>
            <p>
              Still nothing after 30 minutes? Email us at{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-primary underline underline-offset-4"
              >
                support@keyversely.com
              </a>{" "}
              with your order number and we&apos;ll resend your key immediately
              — or refund you if we can&apos;t.
            </p>
          </div>
        ),
      },
      {
        question: "I received the wrong product. What happens now?",
        answer: (
          <p>
            That&apos;s entirely our mistake and we&apos;ll fix it right away.
            Email{" "}
            <a
              href="mailto:support@keyversely.com"
              className="text-primary underline underline-offset-4"
            >
              support@keyversely.com
            </a>{" "}
            with your order number and tell us what you received versus what you
            ordered. We&apos;ll send the correct key immediately, or issue a
            full refund — your choice. You won&apos;t be left waiting.
          </p>
        ),
      },
    ],
  },
  {
    id: "activation",
    title: "Activating Your Key",
    icon: "🔑",
    items: [
      {
        question: "How do I activate my software key?",
        answer: (
          <div className="space-y-4">
            <p>
              The steps vary slightly by product, but here&apos;s the general
              process:
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Windows 10 / 11
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>
                    Go to{" "}
                    <strong className="text-foreground">
                      Settings → System → Activation
                    </strong>
                  </li>
                  <li>
                    Click{" "}
                    <strong className="text-foreground">
                      Change product key
                    </strong>
                  </li>
                  <li>
                    Enter your 25-character key exactly as shown in your email
                  </li>
                  <li>
                    Click <strong className="text-foreground">Next</strong> and
                    follow the prompts
                  </li>
                </ol>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Microsoft Office
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>
                    Download Office from{" "}
                    <a
                      href="https://office.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4"
                    >
                      office.com
                    </a>
                  </li>
                  <li>Sign in with or create a Microsoft account</li>
                  <li>Enter your product key when prompted</li>
                  <li>Install and launch — activation is automatic</li>
                </ol>
              </div>
            </div>
            <p>
              If you hit an error during activation, screenshot it and send it
              to{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-primary underline underline-offset-4"
              >
                support@keyversely.com
              </a>
              . We&apos;ll help you through it.
            </p>
          </div>
        ),
      },
      {
        question: "Which Windows versions are compatible with my key?",
        answer: (
          <div className="space-y-3">
            <p>
              Each product listing on our site specifies the exact compatible
              version. Here&apos;s a quick reference:
            </p>
            <div className="rounded-lg border border-border overflow-hidden text-sm">
              {[
                [
                  "Windows 11 Home",
                  "Requires TPM 2.0, Secure Boot, compatible CPU",
                ],
                [
                  "Windows 11 Pro",
                  "Same hardware requirements as Home + Pro features",
                ],
                [
                  "Windows 10 Home / Pro",
                  "Works on any PC running Windows 7 or later",
                ],
                ["Office 2021 / 2024", "Windows 10 or later required"],
              ].map(([product, note]) => (
                <div
                  key={product}
                  className="flex gap-4 px-4 py-2.5 even:bg-muted/40 border-b border-border last:border-0"
                >
                  <span className="font-semibold text-foreground w-44 shrink-0">
                    {product}
                  </span>
                  <span className="text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>
            <p>
              Not sure if your PC qualifies for Windows 11? Run Microsoft&apos;s
              official{" "}
              <a
                href="https://aka.ms/GetPCHealthCheckApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                PC Health Check app
              </a>{" "}
              before purchasing.
            </p>
          </div>
        ),
      },
      {
        question: "Can I use my key on multiple devices?",
        answer: (
          <div className="space-y-3">
            <p>
              It depends on the license type — check the product description
              carefully before purchasing.
            </p>
            <div className="rounded-lg border border-border overflow-hidden text-sm">
              {[
                ["Windows Home / Pro", "1 device only"],
                ["Office Home & Student", "1 device only"],
                ["Office Home & Business", "1 device only"],
                ["Microsoft 365 Personal", "Up to 5 devices"],
                ["Microsoft 365 Family", "Up to 6 users, 5 devices each"],
              ].map(([product, limit]) => (
                <div
                  key={product}
                  className="flex gap-4 px-4 py-2.5 even:bg-muted/40 border-b border-border last:border-0"
                >
                  <span className="font-semibold text-foreground w-52 shrink-0">
                    {product}
                  </span>
                  <span className="text-muted-foreground">{limit}</span>
                </div>
              ))}
            </div>
            <p>
              If you need a license for more than one device, contact us — we
              can point you to the right product.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "trust",
    title: "Trust & Authenticity",
    icon: "🛡️",
    items: [
      {
        question: "Is my key genuine?",
        answer: (
          <div className="space-y-3">
            <p>
              Yes — every key we sell is genuine. We source all licenses through
              verified distribution channels and we are a recognized partner
              listed on the{" "}
              <a
                href="https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f2266aa5-5704-4384-ad55-100cf2c530cb/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                Microsoft Commercial Marketplace
              </a>
              . That&apos;s not a self-issued badge — it&apos;s Microsoft&apos;s
              own verified partner directory.
            </p>
            <p>
              If a key ever fails to activate on a supported system, that&apos;s
              something we take seriously and will resolve immediately —
              replacement or full refund, no questions asked.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "refunds",
    title: "Refunds & Returns",
    icon: "💳",
    items: [
      {
        question: "How do I request a refund?",
        answer: (
          <div className="space-y-3">
            <p>
              Email us at{" "}
              <a
                href="mailto:support@keyversely.com"
                className="text-primary underline underline-offset-4"
              >
                support@keyversely.com
              </a>{" "}
              with the following:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your order number or the email used at checkout</li>
              <li>The product you purchased</li>
              <li>A description of the issue</li>
              <li>A screenshot of any error (if applicable)</li>
            </ul>
            <p>
              We respond within{" "}
              <strong className="text-foreground">24 hours</strong> and will
              replace your key or refund you in full. Refunds are available if
              your key doesn&apos;t work, was already used, you received the
              wrong product, or your key never arrived. See our full{" "}
              <a
                href="/refund-policy"
                className="text-primary underline underline-offset-4"
              >
                Refund Policy
              </a>{" "}
              and{" "}
              <a
                href="/return-policy"
                className="text-primary underline underline-offset-4"
              >
                Return Policy
              </a>
              .
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "contact",
    title: "Contacting Support",
    icon: "💬",
    items: [
      {
        question: "How do I contact support?",
        answer: (
          <div className="space-y-3">
            <p>
              We are a real team and we read every message. You can reach us by
              email or phone:
            </p>
            <div className="rounded-xl border border-border bg-muted/40 p-5 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-foreground">Email: </span>
                <a
                  href="mailto:support@keyversely.com"
                  className="text-primary underline underline-offset-4"
                >
                  support@keyversely.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone: </span>
                <a
                  href="tel:+13077856160"
                  className="text-primary underline underline-offset-4"
                >
                  (307) 785-6160
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Hours: </span>
                Monday – Friday, 9:00 AM – 6:00 PM ET
              </p>
            </div>
            <p>
              Responses within 24 hours on business days. Weekend messages are
              handled first thing Monday morning.
            </p>
          </div>
        ),
      },
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────
export default function HelpCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <span>Help Center</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
          Help Center
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Quick answers to the most common questions. Can't find what you need?{" "}
          <a
            href="mailto:support@keyversely.com"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Just ask us directly.
          </a>
        </p>

        <hr className="border-border mb-12" />

        {/* Section nav */}
        <nav aria-label="Help sections" className="flex flex-wrap gap-2 mb-12">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              {s.icon} {s.title}
            </a>
          ))}
        </nav>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold mb-5 text-foreground">
                {section.icon} {section.title}
              </h2>
              <FAQAccordion items={section.items} />
            </section>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-16 rounded-xl border border-border bg-muted/40 p-7">
          <h2 className="text-xl font-bold mb-2 text-foreground">
            Still need help?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            If your question isn't answered here, reach out directly. We respond
            to every message and we'll get you sorted.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:support@keyversely.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Email support
            </a>
            <a
              href="tel:+13077856160"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-muted/50 transition-colors"
            >
              (307) 785-6160
            </a>
          </div>
        </div>

        <hr className="border-border mt-14 mb-6" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Keyversely LLC · Entity ID 2025-001824045 · Wyoming, United States
        </p>
      </main>
      <Footer />
    </>
  );
}
