'use server'

import { prisma } from '@/db/prisma'
import { revalidatePath } from 'next/cache'
import slugify from 'slugify'
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(3).max(200),
  excerpt: z.string().min(10).max(400),
  content: z.string().min(50),
  coverImage: z.string().optional().or(z.literal('')),
  categoryId: z.string(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  readTime: z.number().int().min(1).max(120).default(5),
})

export type CreatePostInput = z.infer<typeof createPostSchema>

export async function getPublishedPosts({
  categorySlug,
  page = 1,
  limit = 9,
}: {
  categorySlug?: string
  page?: number
  limit?: number
} = {}) {
  const skip = (page - 1) * limit

  const where = {
    published: true,
    ...(categorySlug && categorySlug !== 'all'
      ? { category: { slug: categorySlug } }
      : {}),
  }

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        readTime: true,
        views: true,
        createdAt: true,
        featured: true,
        author: { select: { id: true, name: true, image: true } },
        category: { select: { id: true, name: true, slug: true } },
        tags: { select: { id: true, name: true, slug: true } },
      },
    }),
    prisma.blogPost.count({ where }),
  ])

  return { posts, total, pages: Math.ceil(total / limit) }
}

export async function getFeaturedPost() {
  return prisma.blogPost.findFirst({
    where: { published: true, featured: true },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      readTime: true,
      views: true,
      createdAt: true,
      featured: true,
      author: { select: { id: true, name: true, image: true } },
      category: { select: { id: true, name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
  })
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: {
      author: { select: { id: true, name: true, image: true } },
      category: { select: { id: true, name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
  })

  if (post) {
    prisma.blogPost
      .update({ where: { id: post.id }, data: { views: { increment: 1 } } })
      .catch(() => {})
  }

  return post
}

export async function getRelatedPosts(postId: string, categoryId: string, limit = 3) {
  return prisma.blogPost.findMany({
    where: {
      published: true,
      categoryId,
      id: { not: postId },
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      readTime: true,
      createdAt: true,
      featured: true,
      views: true,
      author: { select: { id: true, name: true, image: true } },
      category: { select: { id: true, name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
  })
}

export async function getAllCategories() {
  return prisma.blogCategory.findMany({
    include: {
      _count: { select: { posts: { where: { published: true } } } },
    },
    orderBy: { name: 'asc' },
  })
}

export async function createPost(
  authorId: string,
  input: CreatePostInput
): Promise<{ success: boolean; slug?: string; error?: string }> {
  try {
    const data = createPostSchema.parse(input)
    const slug = slugify(data.title, { lower: true, strict: true })
    const existing = await prisma.blogPost.findUnique({ where: { slug } })
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug

    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: finalSlug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage || null,
        published: data.published,
        featured: data.featured,
        readTime: data.readTime,
        authorId,
        categoryId: data.categoryId,
      },
    })

    revalidatePath('/blog')
    return { success: true, slug: post.slug }
  } catch (err) {
    console.error('[createPost]', err)
    return { success: false, error: 'Failed to create post' }
  }
}

export async function updatePost(
  postId: string,
  input: Partial<CreatePostInput>
): Promise<{ success: boolean; error?: string }> {
  try {
    await prisma.blogPost.update({
      where: { id: postId },
      data: {
        ...input,
        coverImage: input.coverImage || null,
        updatedAt: new Date(),
      },
    })
    revalidatePath('/blog')
    return { success: true }
  } catch (err) {
    console.error('[updatePost]', err)
    return { success: false, error: 'Failed to update post' }
  }
}

export async function deletePost(
  postId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await prisma.blogPost.delete({ where: { id: postId } })
    revalidatePath('/blog')
    return { success: true }
  } catch (err) {
    console.error('[deletePost]', err)
    return { success: false, error: 'Failed to delete post' }
  }
}

export async function createCategory(
  name: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const slug = slugify(name, { lower: true, strict: true })
    await prisma.blogCategory.upsert({
      where: { slug },
      create: { name, slug },
      update: {},
    })
    return { success: true }
  } catch (err) {
    console.error('[createCategory]', err)
    return { success: false, error: 'Failed to create category' }
  }
}