"use client";

import nvi from "@/app/bible/nvi.json";
import { useParams, useRouter } from "next/navigation";

const bible: BibleBook[] = nvi;

export default function VerseSelectionPage() {
  const router = useRouter();
  const { bookabbrev, chapter } = useParams()

  return (
    <main className="flex w-full max-w-[400px] border border-zinc-800 px-4 min-h-screen flex-col items-start mx-auto py-20">
      <h1 className="font-bold text-4xl">Selecionar Versículo</h1>

      <div className="grid grid-cols-4 w-full text-xl gap-3 mt-4">
        {(bible.find(book => book.abbrev === bookabbrev)?.chapters ?? []).map((verse, index) => (
          <button
            className="border grid-span-1 py-2 border-zinc-800 cursor-pointer"
            key={index}
            onClick={() => router.push(`${index + 1}`)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
