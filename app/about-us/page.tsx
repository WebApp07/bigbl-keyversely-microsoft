import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import AboutWhatWeDo from "./components/AboutWhatWeDo";
import AboutPromise from "./components/AboutPromise";
import AboutBusinessInfo from "./components/AboutBusinessInfo";
import AboutPolicies from "./components/AboutPolicies";
import AboutFindUs from "./components/AboutFindUs";
import AboutFooterNote from "./components/AboutFooterNote";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

// ── SEO ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "About Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  description:
    "Keyversely LLC is a US-registered software retailer selling genuine Windows, Office, and antivirus activation keys — delivered instantly by email. Verified Microsoft Marketplace partner.",
  alternates: { canonical: "https://www.bigbl.com/about-us" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.bigbl.com/about-us",
    title:
      "About Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Keyversely LLC is a US-registered software retailer selling genuine Windows, Office, and antivirus activation keys — delivered instantly by email. Verified Microsoft Marketplace partner.",
    images: [
      {
        url: "https://www.bigbl.com/og-about.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bigblkey",
    title:
      "About Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Keyversely LLC is a US-registered software retailer selling genuine Windows, Office, and antivirus activation keys — delivered instantly by email. Verified Microsoft Marketplace partner.",
    images: ["https://www.bigbl.com/og-about.png"],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Keyversely LLC",
  legalName: "Keyversely LLC",
  url: "https://www.bigbl.com",
  logo: "https://www.bigbl.com/logo.png",
  foundingDate: "2025",
  description:
    "Keyversely LLC is a US-registered software retailer selling genuine Windows, Office, and antivirus activation keys — delivered instantly by email.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "63 N Burritt Ave, Rm 100 PMB 1180",
    addressLocality: "Buffalo",
    addressRegion: "WY",
    postalCode: "82834",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-307-785-6160",
    email: "support@keyversely.com",
    contactType: "customer support",
    hoursAvailable: "Mo-Fr 09:00-18:00",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/Bigblkey/",
    "https://www.trustpilot.com/review/bigbl.com",
    "https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f2266aa5-5704-4384-ad55-100cf2c530cb/overview",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  url: "https://www.bigbl.com/about-us",
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
        name: "About Us",
        item: "https://www.bigbl.com/about-us",
      },
    ],
  },
};

// ── Page ──────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-14">
        <AboutHero />
        <AboutStory />
        <AboutWhatWeDo />
        <AboutPromise />
        <AboutBusinessInfo />
        <AboutPolicies />
        <AboutFindUs />
        <AboutFooterNote />
      </main>
      <Footer />
    </>
  );
}
