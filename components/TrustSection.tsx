"use client";

import { Facebook, Globe2, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const trustBadges = [
  {
    src: "/badges/google-safe.png",
    alt: "Google Safe",
    label: "Google Protected",
  },
  {
    src: "/badges/ssl-certificate.png",
    alt: "SSL Secure",
    label: "SSL Secure Checkout",
  },
  { src: "/badges/paypal.png", alt: "PayPal", label: "PayPal Verified" },
  { src: "/badges/guarantee.png", alt: "Guarantee", label: "100% Guarantee" },
];

const reviewTabs = [
  { label: "Google", icon: <Globe2 size={16} /> },
  { label: "Facebook", icon: <Facebook size={16} /> },
  { label: "Trustpilot", icon: <Star size={16} /> },
];

const allReviews = {
  Google: [
    {
      name: "Amelia R.",
      text: "Excellent service, fast delivery and no issues. Highly recommended!",
    },
    {
      name: "John K.",
      text: "Very smooth transaction. Will buy again from Bigbl.",
    },
    {
      name: "Lucas D.",
      text: "Digital product worked flawlessly. Great value!",
    },
    {
      name: "Marta L.",
      text: "Trustworthy service, no hidden fees. Fast support!",
    },
    {
      name: "Ben A.",
      text: "Easy purchase and super quick delivery. Love it!",
    },
  ],
  Facebook: [
    {
      name: "Natalie W.",
      text: "Loved the experience. Customer support was quick and helpful.",
    },
    {
      name: "Victor H.",
      text: "Super reliable service and top quality. Five stars!",
    },
    {
      name: "Diana F.",
      text: "Easy to use website, and product delivered instantly.",
    },
    {
      name: "Kevin B.",
      text: "Bigbl is the real deal. Thanks for making it so smooth.",
    },
    {
      name: "Olivia N.",
      text: "Quick response and no issues with activation.",
    },
  ],
  Trustpilot: [
    {
      name: "Alicia M.",
      text: "It just works. Perfect for digital tools and fast response.",
    },
    {
      name: "Robert D.",
      text: "Professional and honest. The download was instant.",
    },
    {
      name: "George T.",
      text: "I was skeptical, but now I'm a fan. Totally legit.",
    },
    {
      name: "Sophia A.",
      text: "Amazing quality and great customer experience overall.",
    },
    { name: "Emily J.", text: "Genuine licenses and amazing customer care!" },
  ],
};

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof allReviews>("Google");

  return (
    <section className="py-16 px-6 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Trusted by Thousands Worldwide
        </h2>

        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge) => (
            <div key={badge.alt} className="flex flex-col items-center gap-2">
              <Image src={badge.src} alt={badge.alt} width={48} height={48} />
              <p className="text-sm font-medium">{badge.label}</p>
            </div>
          ))}
        </div>

        {/* Review Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {reviewTabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() =>
                  setActiveTab(tab.label as keyof typeof allReviews)
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {allReviews[activeTab].map((review, idx) => (
            <div
              key={idx}
              className="bg-muted p-5 rounded-xl shadow hover:shadow-md transition duration-300 dark:bg-[#1d1d1d]"
            >
              <p className="text-sm mb-3 text-muted-foreground">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Google Safe Note */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
          Verified & Monitored by{" "}
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=https://Bigbl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Google Safe Browsing
          </a>
        </p>
      </div>
    </section>
  );
}
