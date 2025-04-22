"use client"

import nvi from "@/app/bible/nvi.json";
import { useRouter } from "next/navigation";

const bible: BibleBook[] = nvi;

export default function BookSelectionPage() {
  const router = useRouter();

  return (
    <main className="flex w-full max-w-[400px] border border-zinc-800 px-4 min-h-screen flex-col items-start mx-auto py-20">
      <h1 className="font-bold text-4xl">Selecionar Livro</h1>

      <div className="flex w-full flex-col text-xl gap-1 mt-4">
        {bible.map((book, index) => (
          <button
            className="border border-zinc-800 cursor-pointer"
            onClick={() => router.push(`/${book.abbrev}/chapter-selection`)}
          >
            {book.name}
          </button>
        ))}
      </div>
    </main>
  );
}
