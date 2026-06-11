
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JelaMascot } from "@/components/shared/jela-mascot"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-blue-50/30">
      <div className="relative">
        <JelaMascot size="md" />
        <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-1 rounded-full text-xs font-black shadow-lg">404</div>
      </div>
      
      <div className="mt-8 space-y-2">
        <h1 className="text-4xl font-headline font-black text-primary uppercase tracking-tighter">Radar Tidak Ditemukan</h1>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Wah, sepertinya radar JELA tidak menemukan pulau atau halaman yang kamu cari. Koordinat ini tidak ada dalam peta Nusantara Digital.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/">
          <Button className="rounded-full px-10 py-7 text-lg font-bold bg-primary shadow-xl gap-2 group">
            <Home className="w-5 h-5 transition-transform group-hover:scale-110" /> Kembali ke Beranda Utama
          </Button>
        </Link>
      </div>
    </div>
  )
}
