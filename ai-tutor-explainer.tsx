"use client"

import { useState } from "react"
import { jelaAITutorExplainer } from "@/ai/flows/jela-ai-tutor-explainer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { JelaMascot } from "./jela-mascot"
import { Loader2, Send, MessageCircle } from "lucide-react"

export function AITutorExplainer() {
  const [question, setQuestion] = useState("")
  const [explanation, setExplanation] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setExplanation(null)
    try {
      const result = await jelaAITutorExplainer({ question })
      setExplanation(result.explanation)
    } catch (error) {
      console.error(error)
      setExplanation("Aduh, maaf ya Petualang! JELA sedang kesulitan terhubung ke jaringan. Coba tanya lagi nanti!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm rounded-[3rem]">
      <CardHeader className="bg-primary/5 pb-4 border-b">
        <div className="flex items-center gap-6">
          <JelaMascot size="xs" animated={false} />
          <div>
            <CardTitle className="font-headline font-black text-primary uppercase tracking-tight">Tanya JELA AI</CardTitle>
            <CardDescription className="font-medium">Pakar Media & Jaringan Telekomunikasi kamu.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleAsk} className="flex gap-3 mb-8">
          <Input 
            placeholder="Contoh: Apa itu topologi bus?" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
            className="flex-1 rounded-2xl h-14 border-primary/20 px-6 focus-visible:ring-primary shadow-inner"
          />
          <Button type="submit" disabled={loading || !question.trim()} className="rounded-2xl w-14 h-14 shadow-lg">
            {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
          </Button>
        </form>

        {explanation && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4">
            <div className="bg-accent/10 border-2 border-dashed border-accent/30 p-6 rounded-[2rem] relative">
              <div className="absolute -top-3 left-6 bg-accent text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.2em]">
                PENJELASAN JELA
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium text-slate-700">{explanation}</p>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs font-black uppercase tracking-widest rounded-full px-8 h-10 border-primary/20 text-primary"
                onClick={() => {
                  setQuestion("")
                  setExplanation(null)
                }}
              >
                Tanya Hal Lain
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
