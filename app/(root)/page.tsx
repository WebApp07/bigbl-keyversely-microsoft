import type { Metadata } from "next";
import DealCountdown from "@/components/deal-countdown";
import FAQPage from "@/components/FAQ";
import IconBoxes from "@/components/icon-boxes";
import ReviewsSection from "@/components/ReviewsSection";
import SafeBrowsingTrust from "@/components/SafeBrowsingTrust";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-button";
import CollectionsSection from "@/components/shared/collections-section";
import {
  getFeaturedProdcuts,
  getLatestProducts,
} from "@/lib/actions/product.actions";
import { faqSchema } from "@/lib/faq-data"; // ← from lib, not from component

const BASE_URL = "https://www.bigbl.com";

export const metadata: Metadata = {
  title: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  description:
    "Buy genuine Windows, Microsoft Office, and antivirus activation keys at Keyversely. Instant email delivery, verified Microsoft Marketplace partner, 30-day money back guarantee.",
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Buy genuine Windows, Microsoft Office, and antivirus activation keys. Instant email delivery, verified Microsoft partner, 30-day money back guarantee.",
    images: [
      {
        url: `${BASE_URL}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Keyversely — Genuine Software Licenses",
      },
    ],
    siteName: "Keyversely — bigbl.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bigblkey",
    title: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Genuine Windows, Office, and antivirus keys. Instant delivery. Verified Microsoft partner.",
    images: [`${BASE_URL}/og-home.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Keyversely LLC",
  legalName: "Keyversely LLC",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.svg`,
    width: 200,
    height: 60,
  },
  foundingDate: "2025",
  description:
    "Keyversely LLC is a US-registered digital software retailer selling genuine activation keys for Windows, Microsoft Office, and antivirus software — delivered instantly by email.",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Keyversely",
  description:
    "Genuine software licenses at affordable prices — delivered instantly by email.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  description:
    "Buy genuine Windows, Microsoft Office, and antivirus activation keys. Instant email delivery. Verified Microsoft Marketplace partner.",
  inLanguage: "en-US",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    ],
  },
};

const Home = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProdcuts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {featuredProducts.length > 0 && (
        <section className="mb-16">
          <ProductCarousel data={featuredProducts} />
        </section>
      )}

      <section className="mb-16">
        <ProductList data={latestProducts} title="Newest Arrivals" />
      </section>

      <section className="mb-16">
        <CollectionsSection />
      </section>

      <div className="mt-16 text-center">
        <ViewAllProductsButton />
      </div>

      {/* 

      <section className="mb-16">
        <SafeBrowsingTrust />
      </section>

      <section className="mb-16">
        <DealCountdown />
      </section>

      */}

      <section className="mb-16">
        <ReviewsSection />
      </section>

      <section className="mb-16">
        <IconBoxes />
      </section>

      <section className="mb-20">
        <FAQPage />
      </section>
    </>
  );
};

export default Home;
