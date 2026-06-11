"use client"

import { useState, useEffect } from "react"

export interface StudentData {
  name: string
  className: string
  school: string
  isLoggedIn: boolean
  photo?: string
}

const STORAGE_KEY = "jelantara_user"
const UPDATE_EVENT = "jelantara_user_updated"

export function useStudent() {
  const [student, setStudent] = useState<StudentData | null>(null)
  const [loading, setLoading] = useState(true)

  const loadStudent = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setStudent(JSON.parse(stored))
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY)
      }
    } else {
      setStudent(null)
    }
  }

  useEffect(() => {
    loadStudent()
    setLoading(false)

    const handleUpdate = () => {
      loadStudent()
    }

    window.addEventListener(UPDATE_EVENT, handleUpdate)
    return () => window.removeEventListener(UPDATE_EVENT, handleUpdate)
  }, [])

  const login = (data: Omit<StudentData, "isLoggedIn">) => {
    const newStudent = { ...data, isLoggedIn: true }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStudent))
    setStudent(newStudent)
    window.dispatchEvent(new Event(UPDATE_EVENT))
  }

  const updateProfile = (data: Partial<StudentData>) => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return
    
    const current = JSON.parse(stored)
    const updated = { ...current, ...data }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setStudent(updated)
    // Dispatch custom event so other hook instances can sync
    window.dispatchEvent(new Event(UPDATE_EVENT))
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setStudent(null)
    window.dispatchEvent(new Event(UPDATE_EVENT))
    window.location.href = "/login"
  }

  return { student, loading, login, logout, updateProfile }
}
