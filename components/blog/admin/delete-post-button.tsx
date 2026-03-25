"use client";

import { useTransition, useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { deletePost } from "@/lib/actions/blog.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  postId: string;
  postTitle: string;
}

export function DeletePostButton({ postId, postTitle }: Props) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleDelete() {
    startTransition(async () => {
      const result = await deletePost(postId);
      if (!result.success) setError(result.error ?? "Failed to delete");
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-500/40 px-3 py-1.5 rounded-lg transition-all">
          {isPending ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Trash2 className="w-3.5 h-3.5" />
          )}
          Delete
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-[#111113] border-white/10 text-white">
        <AlertDialog>
          <AlertDialogTitle>Delete post?</AlertDialogTitle>
          <AlertDialogDescription className="text-zinc-400">
            <strong className="text-white">&quot;{postTitle}&quot;</strong> will
            be permanently deleted. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialog>
        {error && <p className="text-red-400 text-sm px-1">{error}</p>}
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-500 text-white"
          >
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
