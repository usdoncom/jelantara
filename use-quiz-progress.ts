
"use client"

import { useState, useEffect } from "react"

export interface QuizResult {
  completed: boolean
  score: number
  correct: number
  total: number
}

export type QuizProgress = Record<string, QuizResult>

export function useQuizProgress() {
  const [results, setResults] = useState<QuizProgress>({})
  const [badges, setBadges] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedResults = localStorage.getItem("jelantara_quiz_results")
    const storedBadges = localStorage.getItem("jelantara_badges")
    
    if (storedResults) setResults(JSON.parse(storedResults))
    if (storedBadges) setBadges(JSON.parse(storedBadges))
    
    setLoading(false)
  }, [])

  const saveQuizResult = (quizId: string, result: QuizResult, badgeName: string) => {
    // Save Result
    const newResults = { ...results, [quizId]: result }
    localStorage.setItem("jelantara_quiz_results", JSON.stringify(newResults))
    setResults(newResults)

    // Save Badge if not exists and score >= 75
    if (result.score >= 75 && !badges.includes(badgeName)) {
      const newBadges = [...badges, badgeName]
      localStorage.setItem("jelantara_badges", JSON.stringify(newBadges))
      setBadges(newBadges)
    }
  }

  const getStats = () => {
    const completedCount = Object.values(results).filter(r => r.completed).length
    const totalQuizzes = 9
    const averageScore = completedCount > 0 
      ? Math.round(Object.values(results).reduce((acc, r) => acc + r.score, 0) / completedCount)
      : 0

    return { completedCount, totalQuizzes, averageScore, badgeCount: badges.length }
  }

  return { results, badges, loading, saveQuizResult, getStats }
}
