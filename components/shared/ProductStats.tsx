"use client";

import React, { useState, useEffect } from "react";

const ProductStats = () => {
  const [soldCount, setSoldCount] = useState(0);
  const [watchingCount, setWatchingCount] = useState(0);

  useEffect(() => {
    const randomSold = Math.floor(Math.random() * 700) + 300;
    const randomWatching = Math.floor(Math.random() * 50) + 20;

    setSoldCount(randomSold);
    setWatchingCount(randomWatching);
  }, []);

  return (
    <section
      className="my-4 space-y-1 text-gray-700 dark:text-gray-300 animate-fade-in"
      aria-label="Product sales and watching statistics"
    >
      <p className="leading-relaxed text-sm font-medium">
        🔥 <span className="font-semibold">{soldCount.toLocaleString()}</span>{" "}
        sold. This one&apos;s trending.
      </p>
      <p className="leading-relaxed text-sm font-medium">
        👀 <span className="font-semibold">{watchingCount}</span> people are
        watching this item.
      </p>
    </section>
  );
};

export default ProductStats;
