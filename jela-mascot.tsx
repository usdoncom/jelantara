"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

interface JelaMascotProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
  glow?: boolean
}

/**
 * @fileOverview Komponen Maskot Resmi JELA.
 * Menggunakan aset statis /assets/jela.png secara eksklusif.
 */
export function JelaMascot({ 
  size = "md", 
  className = "", 
  animated = true,
  glow = false
}: JelaMascotProps) {
  const [hasError, setHasError] = useState(false);
  
  // Pemetaan ukuran standar
  const sizes = {
    xs: "h-10 w-auto",
    sm: "h-32 w-auto",
    md: "h-[220px] w-auto", 
    lg: "h-[320px] w-auto",
    xl: "h-[450px] md:h-[500px] w-auto"
  }

  if (hasError) {
    return (
      <div className={cn("text-[10px] font-bold text-primary/50 uppercase tracking-widest", className)}>
        Maskot JELA sedang dimuat...
      </div>
    )
  }

  return (
    <div className={cn(
      "relative inline-flex items-center justify-center",
      animated ? "animate-float" : "",
      glow ? "drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "drop-shadow-xl",
      className
    )}>
      <img 
        src="/assets/jela.png" 
        alt="JELA - Maskot Resmi JELANTARA" 
        className={cn("object-contain", sizes[size])}
        draggable={false}
        onError={() => setHasError(true)}
      />
    </div>
  )
}
