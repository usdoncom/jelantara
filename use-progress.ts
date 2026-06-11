"use client"

import { useState, useEffect } from "react"
import { 
  ProgressData, 
  getProgress, 
  saveProgress, 
  getDefaultProgress, 
  completeMaterial as libCompleteMaterial,
  completeSimulation as libCompleteSimulation,
  completeQuiz as libCompleteQuiz,
  STAGE_ORDER,
  normalizeProgress
} from "@/lib/progress"

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(getDefaultProgress())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = getProgress()
    setProgress(data)
    setLoading(false)
  }, [])

  const refresh = () => {
    const data = getProgress()
    setProgress(data)
  }

  const completeMaterial = (stageId: keyof Omit<ProgressData, "master" | "finalAssessment">) => {
    libCompleteMaterial(stageId)
    refresh()
  }

  const completeSimulation = (stageId: keyof Omit<ProgressData, "master" | "finalAssessment">) => {
    libCompleteSimulation(stageId)
    refresh()
  }

  const completeQuiz = (stageId: keyof Omit<ProgressData, "master" | "finalAssessment">, score: number) => {
    const success = libCompleteQuiz(stageId, score)
    refresh()
    return success
  }

  const completeFinalAssessment = (score: number) => {
    const current = getProgress()
    const updated: ProgressData = {
      ...current,
      master: score >= 75,
      finalAssessment: {
        completed: true,
        score: score,
        passed: score >= 75,
        date: new Date().toISOString()
      }
    }
    saveProgress(updated)
    refresh()
    
    // Simpan badge master juga jika lulus
    if (score >= 75) {
      const storedBadges = localStorage.getItem("jelantara_badges")
      const badges = storedBadges ? JSON.parse(storedBadges) : []
      if (!badges.includes("Lencana Grand Master JELANTARA")) {
        badges.push("Lencana Grand Master JELANTARA")
        localStorage.setItem("jelantara_badges", JSON.stringify(badges))
      }
    }
  }

  const resetProgress = () => {
    const fresh = getDefaultProgress()
    saveProgress(fresh)
    localStorage.removeItem("jelantara_badges")
    localStorage.removeItem("jelantara_quiz_results")
    localStorage.removeItem("jelantara_gateway_completed")
    setProgress(fresh)
  }

  const getCompletionPercentage = () => {
    const completedCount = STAGE_ORDER.filter(
      (id) => progress[id as keyof Omit<ProgressData, "master" | "finalAssessment">]?.status === "completed"
    ).length
    return Math.round((completedCount / STAGE_ORDER.length) * 100)
  }

  return { 
    progress, 
    loading, 
    completeMaterial, 
    completeSimulation, 
    completeQuiz, 
    completeFinalAssessment,
    resetProgress,
    getCompletionPercentage,
    refresh
  }
}
