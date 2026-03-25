'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  if (totalPages <= 1) return null

  function goTo(page: number) {
    const next = new URLSearchParams(params.toString())
    next.set('page', String(page))
    router.push(`/blog?${next.toString()}`)
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
      >
        <ChevronLeft className="w-4 h-4" /> Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          className={cn(
            'w-9 h-9 rounded-lg border text-sm font-medium transition-all',
            p === currentPage
              ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.35)]'
              : 'border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
          )}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
      >
        Next <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}