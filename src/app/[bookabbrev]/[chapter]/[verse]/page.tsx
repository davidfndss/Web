"use client"


import nvi from "@/app/bible/nvi.json";
import { useParams } from "next/navigation";

const bible: BibleBook[] = nvi;

export default function ReadPage() {
 const {bookabbrev, chapter, verse} = useParams()


  return (
    <main className="flex w-full max-w-[400px] border border-zinc-800 px-4 min-h-screen flex-col items-start mx-auto py-20">
      <h1 className="font-bold text-4xl">{`${bible.find(book => bookabbrev == book.abbrev)?.name} ${chapter}`}</h1>


      {/* Verses division */}
      <div className="flex flex-col text-xl gap-1 mt-4">
        {
          bible.find(book => bookabbrev == book.abbrev)?.chapters[chapter - 1].map((verse, index) => (
            <p key={index}>{`${index + 1}. ${verse}`}</p>
          ))
        }
      </div>
      
    </main>
  );
}
