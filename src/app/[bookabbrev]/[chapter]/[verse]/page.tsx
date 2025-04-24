"use client";

import nvi from "@/app/bible/nvi.json";
import { useParams, useRouter } from "next/navigation";
import { BiChevronLeft, BiGlobe, BiGlobeAlt, BiWorld } from "react-icons/bi";
import { IoGlobeOutline } from "react-icons/io5";

const bible: BibleBook[] = nvi;

export default function ReadPage() {
  const router = useRouter();

  const { bookabbrev, chapter: chapterParam, verse } = useParams();
  const chapter =
    typeof chapterParam === "string" ? parseInt(chapterParam, 10) : undefined;

  const book = bible.find((book) => book.abbrev === bookabbrev);
  const verses = chapter !== undefined ? book?.chapters[chapter - 1] : [];

  return (
    <main className="flex w-full max-w-[400px] border border-zinc-800 min-h-screen flex-col items-start mx-auto pt-4 pb-14 overflow-hidden">
      <div
        className={`absolute max-w-[400px] bottom-[400px] flex flex-col ${
          (chapter == 1 && "bottom-[450px]") || "bottom-[680px]"
        }`}
      >
        <img src="/img/gn.png" className={`rounded-4xl w-full`} alt="Gênesis" />
        <i
          className={`bi bi-globe text-5xl z-20 relative bottom-[60px] left-[20px] h-[1px] ${
            chapter != 1 && "hidden"
          }`}
        ></i>
      </div>

      <header className="w-full py-2 px-4 flex justify-between items-center z-10">
        <i className="bi bi-chevron-left text-3xl"></i>

        <button
          className="border rounded-lg border-zinc-300 py-1 px-8 text-sm cursor-pointer"
          onClick={() => router.push(`book-selection`)}
        >
          {book?.name} {chapter}{" "}
          <i className="bi bi-chevron-down text-xs ml-1"></i>
        </button>

        <i
          className={`bi bi-globe text-3xl ${
            chapter == 1 && "text-transparent"
          }`}
        ></i>
      </header>

      <h1 className={`text-3xl px-4 mt-8 ${chapter == 1 && "mt-[280px]"}`}>
        {book?.name} {chapter}
      </h1>

      {/* Verses division */}
      <div className="flex flex-col text-xl gap-1 mt-4 px-2">
        {verses?.map((bibleVerse, index) => (
          <p
            key={index}
            className={`${
              index === (verse ? Number(verse) - 1 : -1) ? "bg-zinc-900 rounded" : ""
            } px-2`}
          >{`${index + 1}. ${bibleVerse}`}</p>
        ))}
      </div>
    </main>
  );
}
