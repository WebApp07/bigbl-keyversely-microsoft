'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Eye, EyeOff, Star } from 'lucide-react'
import { createPost, updatePost } from '@/lib/actions/blog.actions'
import { BlogCategory } from '@/types/blog'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  title: z.string().min(3).max(200),
  excerpt: z.string().min(10).max(400),
  content: z.string().min(50),
  coverImage: z.string().optional().or(z.literal('')),
  categoryId: z.string().min(1, 'Please select a category'),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  readTime: z.number().int().min(1).max(120).default(5),
})

type FormInput = z.infer<typeof formSchema>

interface Props {
  categories: BlogCategory[]
  authorId: string
  post?: {
    id: string
    title: string
    excerpt: string
    content: string
    coverImage: string | null
    categoryId: string
    published: boolean
    featured: boolean
    readTime: number
  }
}

export function BlogPostForm({ categories, authorId, post }: Props) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: post
      ? {
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage ?? '',
          categoryId: post.categoryId,
          published: post.published,
          featured: post.featured,
          readTime: post.readTime,
        }
      : {
          published: false,
          featured: false,
          readTime: 5,
        },
  })

  const published = watch('published')
  const featured = watch('featured')

  async function onSubmit(data: FormInput) {
    setIsSubmitting(true)
    setError(null)
    try {
      if (post) {
        const result = await updatePost(post.id, data)
        if (!result.success) throw new Error(result.error)
      } else {
        const result = await createPost(authorId, data)
        if (!result.success) throw new Error(result.error)
      }
      router.push('/admin/blog')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {error && (
        <div className="bg-red-950/40 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      <Field label="Title" error={errors.title?.message}>
        <input
          {...register('title')}
          placeholder="e.g. Windows 11 Pro vs Home: Which Should You Buy?"
          className={inputCls(!!errors.title)}
        />
      </Field>

      <Field label="Excerpt" error={errors.excerpt?.message}>
        <textarea
          {...register('excerpt')}
          rows={2}
          placeholder="A short description shown in the blog listing (max 400 chars)"
          className={inputCls(!!errors.excerpt)}
        />
      </Field>

      <Field label="Content (HTML)" error={errors.content?.message}>
        <textarea
          {...register('content')}
          rows={18}
          placeholder="<h2>Introduction</h2><p>Your article content here...</p>"
          className={cn(inputCls(!!errors.content), 'font-mono text-xs leading-relaxed')}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Category" error={errors.categoryId?.message}>
          <select {...register('categoryId')} className={inputCls(!!errors.categoryId)}>
            <option value="">Select a category…</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </Field>

        <Field label="Read time (minutes)" error={errors.readTime?.message}>
          <input
            type="number"
            min={1}
            max={120}
            {...register('readTime', { valueAsNumber: true })}
            className={inputCls(!!errors.readTime)}
          />
        </Field>
      </div>

      <Field label="Cover Image URL (optional)" error={errors.coverImage?.message}>
        <input
          {...register('coverImage')}
          placeholder="https://utfs.io/f/..."
          className={inputCls(!!errors.coverImage)}
        />
      </Field>

      <div className="flex items-center gap-4 flex-wrap">
        <ToggleButton
          icon={published ? Eye : EyeOff}
          label={published ? 'Published' : 'Draft'}
          active={published}
          onClick={() => setValue('published', !published)}
          activeClass="bg-emerald-600/20 border-emerald-500/40 text-emerald-400"
        />
        <ToggleButton
          icon={Star}
          label={featured ? 'Featured' : 'Not Featured'}
          active={featured}
          onClick={() => setValue('featured', !featured)}
          activeClass="bg-yellow-600/15 border-yellow-500/35 text-yellow-400"
        />
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {post ? 'Save Changes' : 'Create Post'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/blog')}
          className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2.5"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full bg-white/4 border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600',
    'focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none',
    hasError ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-zinc-300">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

function ToggleButton({
  icon: Icon,
  label,
  active,
  onClick,
  activeClass,
}: {
  icon: React.ElementType
  label: string
  active: boolean
  onClick: () => void
  activeClass: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border transition-all',
        active ? activeClass : 'text-zinc-500 border-white/10 bg-white/3 hover:text-zinc-300'
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  )
}