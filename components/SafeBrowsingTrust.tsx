"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SafeBrowsingTrust() {
  return (
    <section className="rounded-2xl border shadow-md max-w-4xl mx-auto my-12 p-6 md:p-10 bg-white dark:bg-zinc-900 border-green-200 dark:border-green-700">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
            <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-300" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">
          Google Safe Browsing Verified
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Our site is verified safe by{" "}
          <span className="font-medium">Google Safe Browsing</span>. Check the
          official transparency report to confirm we’re free from malicious or
          deceptive content.
        </p>

        <Link
          href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.Bigbl.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition"
        >
          View Google Transparency Report
        </Link>
      </div>
    </section>
  );
}
