
"use client"

import { Compass } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-500">
      <div className="relative">
        <div className="w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center text-primary/40">
          <Compass className="w-10 h-10 animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 border-2 border-primary/10 border-t-primary rounded-[1.5rem] animate-spin" />
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-sm font-bold text-primary animate-pulse">Mengarahkan Navigasi...</p>
        <div className="w-32 h-1 bg-secondary/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}
