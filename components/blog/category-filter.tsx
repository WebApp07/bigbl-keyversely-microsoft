"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { BlogCategory } from "@/types/blog";

interface Props {
  categories: (BlogCategory & { _count?: { posts: number } })[];
  current?: string;
}

export function CategoryFilter({ categories, current = "all" }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function selectCategory(slug: string) {
    const next = new URLSearchParams(params.toString());
    if (slug === "all") {
      next.delete("category");
    } else {
      next.set("category", slug);
    }
    next.delete("page");
    startTransition(() => router.push(`/blog?${next.toString()}`));
  }

  const all = [
    { id: "all", name: "All Posts", slug: "all", _count: undefined },
    ...categories,
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {all.map((cat) => {
        const active = cat.slug === (current || "all");
        return (
          <button
            key={cat.id}
            onClick={() => selectCategory(cat.slug)}
            disabled={isPending}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
              active
                ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : ": bg-muted border-border text-muted-foreground hover:text-foreground hover:border-primary/50,",
              isPending && "opacity-60 cursor-wait",
            )}
          >
            {cat.name}
            {cat._count && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-semibold",
                  active
                    ? "bg-blue-500/50 text-blue-100"
                    : "bg-white/8 text-zinc-500",
                )}
              >
                {cat._count.posts}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
