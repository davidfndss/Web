"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex w-full max-w-[400px] px-4 min-h-screen flex-col items-start mx-auto py-10">
      <img className="rounded-b-2xl mt-20" src="/img/cover.png"></img>

      <div className="flex flex-col mt-6">
        <div className="flex gap-2 items-center">
          <h1 className="text-5xl">Leia a Palavra</h1>

          <img src="/svg/sparkles.svg" className="w-10 h-10"></img>
        </div>
        
        <h2 className="text-3xl">
          Diariamente. Onde Estiver.
        </h2>
        
        <p className="text-zinc-700 mt-3 leading-4">
          Acesse as Escrituras Sagradas com clareza, beleza e praticidade. Descubra devocionais, planos de leitura e estudos, tudo em um só lugar.
        </p>

        <button className="flex justify-between items-center w-full px-4 py-1 mt-6 rounded-full border border-zinc-900 cursor-pointer" onClick={() => router.push('/book-selection')}>
          <span className="text-lg">Comece Sua Jornada Espiritual</span>
          <i className="bi bi-arrow-right text-lg"></i>
        </button>
      </div>
      
      
    </main>
  );
}
