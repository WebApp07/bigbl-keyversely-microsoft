import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from "@/components/WhatsappButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Keyversely",
    default: "Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  },
  description:
    "Buy genuine Windows, Microsoft Office, and antivirus activation keys at Keyversely. Instant email delivery, verified Microsoft Marketplace partner, 30-day money back guarantee.",

  // ✅ Google verification ONLY
  verification: {
    google: "_9rp5MYCUxCwLBmiWo9eA6E-V1ou8FdZ2-bFRdCL0To",
  },

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
