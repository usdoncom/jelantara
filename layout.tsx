
"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { DashboardSidebar, MobileBottomNav } from "@/components/layout/dashboard-navigation"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { useStudent } from "@/hooks/use-student"
import { Compass, Loader2 } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { student, loading } = useStudent()
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("Menghubungkan ke JELANTARA...")

  // Dynamic Loading Messages
  useEffect(() => {
    if (loading || !isAuthorized) {
      const messages = [
        "Menyiapkan Peta Nusantara...",
        "Memuat petualangan belajar...",
        "JELA sedang membuka gerbang...",
        "Menghubungkan ke JELANTARA...",
        "Menyiapkan modul telekomunikasi..."
      ]
      let i = 0
      const interval = setInterval(() => {
        i = (i + 1) % messages.length
        setLoadingMessage(messages[i])
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [loading, isAuthorized])

  // Auth Protection
  useEffect(() => {
    if (!loading) {
      if (!student || !student.isLoggedIn) {
        router.push("/login")
      } else {
        setIsAuthorized(true)
      }
    }
  }, [student, loading, router])

  if (loading || !isAuthorized) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-white transition-all duration-500">
        <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary animate-pulse">
              <Compass className="w-12 h-12" />
            </div>
            <div className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-[2rem] animate-spin" />
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-primary tracking-tighter uppercase">JELANTARA</h1>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                Menjelajah Teknologi, Menghubungkan Nusantara
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm font-bold text-primary transition-all duration-500 min-h-[1.25rem]">
                {loadingMessage}
              </p>
              <div className="w-48 h-1.5 bg-secondary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]" 
                     style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/5">
      <DashboardSidebar />
      <DashboardHeader />
      <main className="lg:ml-64 p-6 pb-24 lg:pb-6 relative min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  )
}
