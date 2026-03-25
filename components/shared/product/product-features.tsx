"use client";

import {
  CheckCircle,
  Clock,
  KeyRound,
  MessageCircle,
  Tag,
  Download,
  RefreshCcw,
  CalendarClock,
  Infinity,
} from "lucide-react";

interface ProductFeaturesProps {
  title: string;
}

export default function ProductFeatures({ title }: ProductFeaturesProps) {
  const isLifetime = /lifetime/i.test(title);
  const is3Year = /3\s?(year|yr)/i.test(title);
  const is12Month = /(12\s?month|1\s?year|1yr)/i.test(title);
  const isAccount =
    /\b(account|subscription|subscriptions|user|profile)\b/i.test(title);

  const features = [
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: isAccount ? "Subscription Account" : "Genuine Software",
    },

    // License logic
    isLifetime && {
      icon: <Infinity className="w-4 h-4" />,
      text: "Lifetime Subscription",
    },
    isLifetime && {
      icon: <Clock className="w-4 h-4" />,
      text: "No Expiration",
    },
    is3Year && {
      icon: <CalendarClock className="w-4 h-4" />,
      text: "3-Year Subscription",
    },
    is12Month && {
      icon: <CalendarClock className="w-4 h-4" />,
      text: "12-Month Subscription",
    },

    { icon: <KeyRound className="w-4 h-4" />, text: "Product Key" },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "24/7 Live Chat Support",
    },
    { icon: <Tag className="w-4 h-4" />, text: "Standard Warranty" },
    { icon: <Download className="w-4 h-4" />, text: "Installation Files" },
    { icon: <RefreshCcw className="w-4 h-4" />, text: "Free Updates" },
  ].filter((f): f is { icon: JSX.Element; text: string } => Boolean(f)); // remove false items and narrow type

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <span className="text-green-600 dark:text-green-400">
            {feature.icon}
          </span>
          <span className="text-sm text-gray-800 dark:text-gray-200">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
}
