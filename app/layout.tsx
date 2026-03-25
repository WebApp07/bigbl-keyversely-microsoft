import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import WhatsappButton from "@/components/WhatsappButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const metadata: Metadata = {
  title: {
    template: "%s | Keyversely",
    default: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  },
  description:
    "Buy genuine Windows, Microsoft Office, and antivirus activation keys at Keyversely. Instant email delivery, verified Microsoft Marketplace partner, 30-day money back guarantee.",
  metadataBase: new URL("https://www.bigbl.com"),
  authors: [{ name: "Keyversely LLC", url: "https://www.bigbl.com" }],
  creator: "Keyversely LLC",
  publisher: "Keyversely LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bigbl.com",
    siteName: "Keyversely — bigbl.com",
    title: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Buy genuine Windows, Microsoft Office, and antivirus activation keys. Instant email delivery. Verified Microsoft partner.",
    images: [
      {
        url: "https://www.bigbl.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Keyversely — Genuine Software Licenses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bigblkey",
    creator: "@Bigblkey",
    title: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
    description:
      "Genuine Windows, Office, and antivirus keys. Instant delivery. Verified Microsoft partner.",
    images: ["https://www.bigbl.com/og-home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-5KDXYVX406"
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-5KDXYVX406');
                `,
              }}
            />
          </>
        )}

        {/* Facebook Pixel */}
        {isProduction && FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Ahrefs Analytics */}
        {isProduction && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="Hcb8YOH2s2CejLAzBuJYFQ"
            async
            strategy="afterInteractive"
          />
        )}
      </head>

      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <WhatsappButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
