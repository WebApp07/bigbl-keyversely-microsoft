import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllCategories } from "@/lib/actions/blog.actions";
import { BlogPostForm } from "@/components/blog/admin/blog-post-form";

export const metadata = { title: "New Post – Admin" };

export default async function NewBlogPostPage() {
  const session = await auth();
  if (!session || session.user.role !== "admin") redirect("/");

  const categories = await getAllCategories();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">New Blog Post</h1>
        <BlogPostForm categories={categories} authorId={session.user.id!} />
      </div>
    </div>
  );
}
