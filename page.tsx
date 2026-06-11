
"use client"

import { useStudent } from "@/hooks/use-student"
import { useProgress } from "@/hooks/use-progress"
import { useQuizProgress } from "@/hooks/use-quiz-progress"
import { JelaMascot } from "@/components/shared/jela-mascot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Map, BookOpen, Award, Briefcase, ChevronRight, Play } from "lucide-react"
import Link from "next/link"

const STAGES_CONFIG: Record<string, { label: string; href: string }> = {
  gateway: { label: "Gerbang Nusantara Digital", href: "/dashboard/learn/gateway" },
  sumatera: { label: "Sumatera: IP Address", href: "/dashboard/learn/sumatera" },
  jawa: { label: "Jawa: TCP/IP", href: "/dashboard/learn/jawa" },
  kalimantan: { label: "Kalimantan: Layanan Jaringan", href: "/dashboard/learn/kalimantan" },
  sulawesi: { label: "Sulawesi: Keamanan Jaringan", href: "/dashboard/learn/sulawesi" },
  "bali-nusa": { label: "Bali & Nusa Tenggara: Sistem Seluler", href: "/dashboard/learn/bali-nusa" },
  maluku: { label: "Maluku: WLAN", href: "/dashboard/learn/maluku" },
  papua: { label: "Papua: VSAT IP dan Optik", href: "/dashboard/learn/papua" },
  ikn: { label: "IKN: Smart City", href: "/dashboard/learn/ikn" },
}

export default function DashboardHome() {
  const { student } = useStudent()
  const { progress, loading: progressLoading } = useProgress()
  const { badges = [], loading: quizLoading } = useQuizProgress()

  if (progressLoading || quizLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <JelaMascot size="sm" animated={true} />
      </div>
    )
  }

  const completedCount = Object.entries(progress || {})
    .filter(([key, value]) => key !== "master" && key !== "finalAssessment" && (value as any)?.status === "completed").length
  
  const totalStages = 9
  const progressPercent = Math.round((completedCount / totalStages) * 100)

  const getCurrentStage = () => {
    const activeStage = Object.entries(progress || {}).find(([key, value]) => 
      key !== "master" && 
      key !== "finalAssessment" && 
      ((value as any)?.status === "available" || ((value as any)?.status === "completed" && !(value as any)?.quizCompleted))
    )
    
    if (activeStage && STAGES_CONFIG[activeStage[0]]) {
      return STAGES_CONFIG[activeStage[0]]
    }
    
    if (progress?.master) {
      return { label: "Grand Master JELANTARA", href: "/dashboard/master" }
    }
    
    return STAGES_CONFIG["gateway"]
  }

  const currentStage = getCurrentStage()

  const quickLinks = [
    { label: "Peta Nusantara", icon: Map, color: "text-blue-500", bg: "bg-blue-50", href: "/dashboard/map" },
    { label: "Mulai Quiz", icon: BookOpen, color: "text-green-500", bg: "bg-green-50", href: "/dashboard/quiz" },
    { label: "Badge Saya", icon: Award, color: "text-amber-500", bg: "bg-amber-50", href: "/dashboard/badges" },
    { label: "Info Karir", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50", href: "/dashboard/career" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="relative overflow-hidden bg-primary rounded-[3rem] p-8 md:p-12 text-white shadow-xl min-h-[320px] flex items-center border-4 border-white/10">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-headline font-black tracking-tight uppercase">Halo, {student?.name || "Petualang"}! 👋</h2>
            <p className="text-primary-foreground/90 text-lg max-w-xl font-medium">
              Selamat datang kembali di pusat kendali petualanganmu. JELA siap membantumu menaklukkan rintangan berikutnya!
            </p>
            <div className="pt-4">
              <Link href={currentStage.href}>
                <Button variant="secondary" size="lg" className="rounded-full gap-2 font-black px-10 h-14 bg-white text-primary hover:bg-white/90 shadow-xl">
                  <Play className="w-5 h-5 fill-current" /> LANJUTKAN MISI
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <JelaMascot size="md" className="drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[3rem] bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-8 pt-8">
            <CardTitle className="text-xl font-headline font-bold text-primary uppercase tracking-tight">Statistik Penjelajahan</CardTitle>
            <Link href="/dashboard/map" className="text-sm text-primary font-bold flex items-center hover:underline">
              Buka Peta <ChevronRight className="w-4 h-4" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-8 pt-4 px-8 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-[2rem] bg-secondary/10 text-center border border-secondary/5">
                <p className="text-2xl font-black text-primary">{progressPercent}%</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Selesai</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-secondary/10 text-center border border-secondary/5">
                <p className="text-2xl font-black text-primary">{completedCount}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Pulau</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-secondary/10 text-center border border-secondary/5">
                <p className="text-2xl font-black text-primary">{badges?.length || 0}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Badge</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-secondary/10 text-center border border-secondary/5">
                <p className="text-2xl font-black text-primary">{completedCount * 150}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Total XP</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <span>Modul Aktif: {currentStage.label}</span>
                <span className="text-primary">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} className="h-4 rounded-full bg-secondary/20" />
            </div>

            <div className="p-6 border-2 border-dashed border-primary/10 rounded-[2.5rem] flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shadow-sm">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-primary uppercase tracking-tight text-sm">{currentStage.label}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Lokasi Saat Ini</p>
                </div>
              </div>
              <Link href={currentStage.href}>
                <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90 font-bold h-11 shadow-lg">LANJUT</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-headline font-black px-2 text-primary uppercase tracking-tight">Akses Cepat</h3>
          <div className="grid grid-cols-1 gap-3">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Card className="border-none shadow-sm hover:shadow-xl transition-all cursor-pointer group rounded-[2rem] bg-white border border-slate-50">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${link.bg}`}>
                      <link.icon className={`w-7 h-7 ${link.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-primary uppercase tracking-tight text-sm">{link.label}</p>
                      <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Eksplorasi</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
