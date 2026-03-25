import Link from "next/link";
import Image from "next/image";
import { Clock, Eye, ArrowRight } from "lucide-react";
import { BlogPostSummary } from "@/types/blog";
import { cn } from "@/lib/utils";

const COVER_GRADIENTS: Record<string, string> = {
  "microsoft-office": "from-blue-950 via-blue-900 to-blue-800",
  windows: "from-slate-900 via-blue-950 to-slate-800",
  security: "from-zinc-900 via-red-950 to-zinc-900",
  "how-to-guides": "from-emerald-950 via-teal-900 to-slate-900",
  news: "from-violet-950 via-purple-900 to-slate-900",
  default: "from-slate-900 via-slate-800 to-zinc-900",
};

const CATEGORY_ICONS: Record<string, string> = {
  "microsoft-office": "/icons/office.svg",
  windows: "/icons/windows.png",
  security: "/icons/security.svg",
  "how-to-guides": "/icons/how-to-guides.svg",
  news: "/icons/news.svg",
  default: "/icons/default.svg",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function FeaturedPostCard({ post }: { post: BlogPostSummary }) {
  const gradient =
    COVER_GRADIENTS[post.category.slug] ?? COVER_GRADIENTS.default;
  const icon = CATEGORY_ICONS[post.category.slug] ?? CATEGORY_ICONS.default;

  return (
    <Link
      href={"/blog/" + post.slug}
      className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
    >
      <div
        className={cn(
          "relative flex-shrink-0 md:w-[45%] min-h-[200px] md:min-h-[300px] flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br " + gradient,
        )}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Image
            src={icon}
            alt={post.category.name + " icon"}
            width={96}
            height={96}
            className="object-contain"
          />
        )}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary text-primary-foreground text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
          ⭐ Featured
        </div>
      </div>

      <div className="flex flex-col justify-center p-7 md:p-10 flex-1">
        <div className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold tracking-[0.1em] uppercase mb-4 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {post.category.name}
        </div>

        <h2 className="text-2xl md:text-[1.7rem] leading-[1.25] font-bold mb-4 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{formatDate(post.createdAt)}</span>
            <span className="opacity-40">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
            {post.views > 0 && (
              <>
                <span className="opacity-40">·</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {post.views.toLocaleString()}
                </span>
              </>
            )}
          </div>
          <span className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  const gradient =
    COVER_GRADIENTS[post.category.slug] ?? COVER_GRADIENTS.default;
  const icon = CATEGORY_ICONS[post.category.slug] ?? CATEGORY_ICONS.default;

  return (
    <Link
      href={"/blog/" + post.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
    >
      <div
        className={cn(
          "relative h-44 flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br " + gradient,
        )}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Image
            src={icon}
            alt={post.category.name + " icon"}
            width={64}
            height={64}
            className="object-contain"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <span className="text-primary text-[11px] font-bold tracking-[0.1em] uppercase mb-2">
          {post.category.name}
        </span>

        <h3 className="text-[0.97rem] font-semibold leading-snug mb-2.5 flex-1 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="text-[10px] font-medium text-muted-foreground bg-muted border px-2 py-0.5 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t pt-3.5">
          <span className="text-[11px] text-muted-foreground">
            {formatDate(post.createdAt)}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.readTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}
