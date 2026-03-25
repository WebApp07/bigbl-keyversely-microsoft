"use client";

import Image from "next/image";

const badges = [
  {
    src: "/badges/norton-secure.png",
    alt: "Norton Secured",
    href: "https://www.norton.com/",
  },
  {
    src: "/badges/ssl-certificate.png",
    alt: "SSL Secure",
    href: "https://www.ssl.com/",
  },
  {
    src: "/badges/mcafee-secure.png",
    alt: "McAfee Secure",
    href: "https://www.mcafee.com/",
  },
  {
    src: "/badges/paypal.png",
    alt: "PayPal — The Safer Way to Pay",
    href: "https://www.paypal.com/",
  },
];

const TrustBadges = () => {
  return (
    <section className="max-w-5xl mx-auto my-12 px-6 py-8 rounded-2xl border shadow-md bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        🔒 Trusted & Secure Payments
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
        {badges.map(({ src, alt, href }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className="block w-24 h-24 sm:w-28 sm:h-28 p-3 bg-gray-50 dark:bg-zinc-800 border rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
