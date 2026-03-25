// lib/faq-data.ts
// Plain data file — no "use client", safe to import in Server Components

export const faqs = [
  {
    question: "How will I get my product?",
    answer:
      "You will receive your activation key by email. Delivery is instant in most cases — within minutes of purchase. We guarantee delivery within 24 hours. Check your spam folder if you don't see it right away.",
  },
  {
    question: "How do I install the software?",
    answer:
      "Detailed installation instructions are included in the email with your product key. If you need extra help, our support team is available 24/7 to guide you through the process step by step.",
  },
  {
    question: "Is the software compatible with my device?",
    answer:
      "Check the product description for full compatibility details. If you're unsure, contact us before purchasing and we'll confirm whether the product works with your device and operating system.",
  },
  {
    question: "What happens if I lose my product key?",
    answer:
      "Don't worry — just contact us with your order information and we'll resend the key to your email address immediately.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Since our products are digital and delivered instantly, all sales are final once the key is activated. However, if your key doesn't work as described, we'll replace it or refund you within 24 hours — no questions asked.",
  },
  {
    question: "Can I send the software as a gift to someone else?",
    answer:
      "Absolutely. Purchase the product using your details, then forward the key and installation instructions to the recipient. Contact us if you'd like us to send it directly to a specific email address.",
  },
  {
    question: "Can I get help with installation or activation?",
    answer:
      "Yes — we offer 24/7 professional support for installation, activation, and any software issues. Reach us via live chat or email and we'll get you sorted quickly.",
  },
  {
    question: "Can I buy for multiple devices or users?",
    answer:
      "It depends on the license type. Some products support multiple devices, others are single-device only. Check the product description carefully, or contact us before purchasing to confirm.",
  },
  {
    question: "Do you offer support for resellers or wholesalers?",
    answer:
      "Yes — we work with both resellers and wholesalers and offer competitive pricing. Contact us to discuss how we can work together.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
