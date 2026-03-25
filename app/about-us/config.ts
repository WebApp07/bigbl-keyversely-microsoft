export const BUSINESS = {
  legalName: "Keyversely LLC",
  entityId: "2025-001824045",
  entityType: "Limited Liability Company (LLC)",
  formationState: "Wyoming, United States",
  formationDate: "November 24, 2025",
  status: "Active / Good Standing",
  address: {
    street: "63 N Burritt Ave, Rm 100 PMB 1180",
    city: "Buffalo",
    state: "Wyoming",
    zip: "82834",
    country: "United States",
    display:
      "63 N Burritt Ave, Rm 100 PMB 1180\nBuffalo, Wyoming 82834\nUnited States",
  },
  website: "https://www.bigbl.com",
  email: "support@keyversely.com",
  phone: {
    display: "(307) 785-6160",
    href: "tel:+13077856160",
    schema: "+1-307-785-6160",
  },
  hours: "Monday – Friday, 9:00 AM – 6:00 PM ET",
  hoursSchema: "Mo-Fr 09:00-18:00",
};

export const LINKS = {
  microsoftPartner:
    "https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f2266aa5-5704-4384-ad55-100cf2c530cb/overview",
  instagram: "https://www.instagram.com/Bigblkey/",
  trustpilot: "https://www.trustpilot.com/review/bigbl.com",
};

export const SEO = {
  title:
    "About Keyversely LLC | Genuine Software Licenses at Affordable Prices",
  description:
    "Keyversely LLC is a US-registered software retailer selling genuine Windows, Office, and antivirus activation keys — delivered instantly by email. Verified Microsoft Marketplace partner.",
  canonical: `${BUSINESS.website}/about-us`,
  ogImage: `${BUSINESS.website}/og-about.png`, // ← replace with a real 1200×630 image
  twitterHandle: "@Bigblkey",
};
