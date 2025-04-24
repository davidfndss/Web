"use client";

import { useRouter } from "next/navigation";
import Icon from "./Icon";
import FindBookgroupDivisionByIndex from "@/app/utils/BookGroupDivision";

export default function DynamicHeader(props: { bookIndex: number; bookName: string; chapter: number }) {
  const router = useRouter();
  const groupDivision = FindBookgroupDivisionByIndex(props.bookIndex);

  return (
    <>
      <div
        className={`absolute max-w-[400px] bottom-[400px] flex flex-col transition ${
          (props.chapter == 1 && "bottom-[450px]") || "bottom-[670px]"
        }`}
      >
        <img src={`/img/group-${groupDivision}-cover.png`} className={`rounded-b-4xl w-full`} alt="Book Cover" />
        {/* <i
          className={`bi bi-globe text-5xl z-20 relative bottom-[60px] left-[20px] h-[1px] ${
            props.chapter != 1 && "hidden"
          }`}
        ></i> */}
        <div
          className={`z-20 relative bottom-[90px] left-[20px] h-[1px] ${
            props.chapter != 1 ? "hidden" : "mb-4"
          }`}
        >
          <div className="h-[1px] w-1">
            <div className="h-18 w-18 rounded-2xl p-2">
              <Icon index={groupDivision} />
            </div>
          </div>
        </div>
      </div>

      <header className="w-full py-2 px-4 flex justify-between items-center z-10">
        <i className="bi bi-chevron-left text-3xl"></i>

        <button
          className="border rounded-lg border-zinc-300 py-1 px-8 text-sm cursor-pointer"
          onClick={() => router.push(`/book-selection`)}
        >
          {props.bookName} {props.chapter}{" "}
          <i className="bi bi-chevron-down text-xs ml-1"></i>
        </button>

        {/* <i
          className={`bi bi-globe text-3xl ${
            props.chapter == 1 && "text-transparent"
          }`}
        ></i> */}
        <div className={`h-10 w-10`}>
          <div className={`${
            props.chapter == 1 && "hidden"
          }`}>
            <Icon index={groupDivision} />
          </div>
        </div>
      </header>
    </>
  );
}
