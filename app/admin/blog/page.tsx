import Link from "next/link";
import { PlusCircle, Eye, EyeOff, Edit, Star } from "lucide-react";
import { prisma } from "@/db/prisma";
import { requireAdmin } from "@/lib/auth-guard";
import { DeletePostButton } from "@/components/blog/admin/delete-post-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Blog – Admin",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function AdminBlogPage() {
  await requireAdmin();

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: { select: { name: true } },
      category: { select: { name: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Blog Posts</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {posts.length} total posts
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          New Post
        </Link>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left px-5 py-3 font-medium">Title</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                Category
              </th>
              <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">
                Author
              </th>
              <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">
                Date
              </th>
              <th className="text-center px-4 py-3 font-medium">Status</th>
              <th className="text-right px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {posts.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-muted-foreground"
                >
                  No posts yet.{" "}
                  <Link
                    href="/admin/blog/new"
                    className="text-blue-400 hover:underline"
                  >
                    Create your first post →
                  </Link>
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {post.featured && (
                        <Star className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                      )}
                      <span className="font-medium line-clamp-1">
                        {post.title}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs mt-0.5 block">
                      /blog/{post.slug}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden md:table-cell">
                    {post.category.name}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden lg:table-cell">
                    {post.author.name}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden lg:table-cell text-xs">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {post.published ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <Eye className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground text-xs font-medium bg-muted border px-2.5 py-1 rounded-full">
                        <EyeOff className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border px-3 py-1.5 rounded-lg transition-all"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        Edit
                      </Link>
                      <DeletePostButton
                        postId={post.id}
                        postTitle={post.title}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
