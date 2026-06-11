
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Map, 
  Award, 
  Briefcase, 
  User, 
  Info,
  ShieldCheck
} from "lucide-react"

const NAV_ITEMS = [
  { label: "Beranda", icon: Home, href: "/dashboard" },
  { label: "Peta Nusantara", icon: Map, href: "/dashboard/map" },
  { label: "Asesmen Akhir", icon: ShieldCheck, href: "/dashboard/final-assessment" },
  { label: "Lencana Saya", icon: Award, href: "/dashboard/badges" },
  { label: "Karir TJKT", icon: Briefcase, href: "/dashboard/career" },
  { label: "Profil", icon: User, href: "/dashboard/profile" },
  { label: "Tentang", icon: Info, href: "/dashboard/about" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white border-r p-6 z-20">
      <div className="mb-10 space-y-2">
        <Link href="/dashboard" className="block outline-none">
          <div className="px-1">
            <img 
              src="/assets/logojelantara.png" 
              alt="Logo JELANTARA" 
              className="h-14 w-auto max-w-[180px] object-contain"
            />
          </div>
        </Link>
        <div className="px-1 pt-1">
          <p className="text-[9px] text-primary/70 font-bold uppercase tracking-tight leading-tight">
            Menjelajah Teknologi,<br />
            Menghubungkan Nusantara
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          const baseClass = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm uppercase tracking-tight"
          const activeClass = isActive 
            ? "bg-primary text-white shadow-md shadow-primary/20" 
            : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`${baseClass} ${activeClass}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="pt-6 mt-6 border-t border-dashed">
        <p className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest text-center">
          JELANTARA v1.0 • 2026
        </p>
      </div>
    </aside>
  )
}

export function MobileBottomNav() {
  const pathname = usePathname()
  const displayItems = NAV_ITEMS.slice(0, 5)

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t flex justify-around p-2 z-50 rounded-t-[2.5rem] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-x-4 border-white/50">
      {displayItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all flex-1 ${isActive ? "text-primary bg-primary/5" : "text-muted-foreground"}`}
          >
            <item.icon className={`w-6 h-6 ${isActive ? "fill-primary/20" : ""}`} />
            <span className="text-[9px] font-black uppercase tracking-tight">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
