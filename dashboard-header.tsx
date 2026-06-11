"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useStudent } from "@/hooks/use-student"
import { Search, Bell, Menu, X, ArrowRight, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JelaMascot } from "@/components/shared/jela-mascot"
import { SEARCH_INDEX, SearchItem } from "@/data/search"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function DashboardHeader() {
  const { student, logout } = useStudent()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectResult = (route: string) => {
    router.push(route)
    setSearchQuery("")
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b lg:ml-64">
      <div className="flex items-center gap-4 flex-1">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="relative w-full max-w-md hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
            <input 
              type="text" 
              placeholder="Cari materi, quiz, atau karir..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-2xl border-2 border-primary/5 bg-secondary/10 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/20 text-sm transition-all font-medium"
            />
          </div>

          {isOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-primary/10 shadow-2xl rounded-[1.5rem] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-2 max-h-[480px] overflow-y-auto">
                {results.length > 0 ? (
                  results.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectResult(item.route)}
                      className="w-full text-left p-4 hover:bg-primary/5 rounded-xl transition-all group flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-primary truncate">{item.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-sm font-medium text-muted-foreground">Tidak ada hasil.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-primary/5">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white"></span>
        </Button>
        <div className="pl-4 border-l">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 outline-none hover:opacity-80 transition-opacity">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-black leading-tight truncate max-w-[120px] uppercase tracking-tight">{student?.name || "Petualang"}</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{student?.className || "Siswa SMK"}</p>
                </div>
                {/* Professional Student Avatar Container */}
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl overflow-hidden border-2 border-primary/10 relative shadow-inner">
                  {student?.photo ? (
                    <img src={student.photo} alt="Avatar" className="w-full h-full object-cover object-[center_top]" />
                  ) : (
                    <div className="w-full h-full p-1 flex items-center justify-center bg-blue-50">
                      <JelaMascot size="xs" animated={false} className="scale-75" />
                    </div>
                  )}
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 rounded-[2rem] p-3 shadow-2xl border-primary/10 bg-white">
              <DropdownMenuLabel className="font-headline font-black text-primary uppercase tracking-tight text-center pb-4 pt-2">Akun Penjelajah</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/dashboard/profile">
                <DropdownMenuItem className="rounded-xl cursor-pointer gap-3 py-4 font-bold text-slate-700">
                  <User className="w-5 h-5 text-primary" /> Profil Saya
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => logout()} 
                className="rounded-xl cursor-pointer gap-3 py-4 font-bold text-destructive"
              >
                <LogOut className="w-5 h-5" /> Keluar Aplikasi
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
