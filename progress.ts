
"use client"

export type StageStatus = "locked" | "available" | "completed"

export interface IslandProgress {
  status: StageStatus
  materialCompleted: boolean
  simulationCompleted: boolean
  quizCompleted: boolean
  score: number
}

export interface ProgressData {
  gateway: IslandProgress
  sumatera: IslandProgress
  jawa: IslandProgress
  kalimantan: IslandProgress
  sulawesi: IslandProgress
  "bali-nusa": IslandProgress
  maluku: IslandProgress
  papua: IslandProgress
  ikn: IslandProgress
  master: boolean
  finalAssessment?: {
    completed: boolean
    score: number
    passed: boolean
    date: string
  }
}

export const STAGE_ORDER: (keyof Omit<ProgressData, "master" | "finalAssessment">)[] = [
  "gateway",
  "sumatera",
  "jawa",
  "kalimantan",
  "sulawesi",
  "bali-nusa",
  "maluku",
  "papua",
  "ikn"
]

const createStageProgress = (status: StageStatus = "locked"): IslandProgress => ({
  status,
  materialCompleted: false,
  simulationCompleted: false,
  quizCompleted: false,
  score: 0,
})

export function getDefaultProgress(): ProgressData {
  return {
    gateway: createStageProgress("available"),
    sumatera: createStageProgress("locked"),
    jawa: createStageProgress("locked"),
    kalimantan: createStageProgress("locked"),
    sulawesi: createStageProgress("locked"),
    "bali-nusa": createStageProgress("locked"),
    maluku: createStageProgress("locked"),
    papua: createStageProgress("locked"),
    ikn: createStageProgress("locked"),
    master: false
  }
}

/**
 * Normalizes progress data to ensure consistency and perform auto-healing
 */
export function normalizeProgress(data: any): ProgressData {
  if (!data || typeof data !== 'object') return getDefaultProgress();
  
  const progress = { ...data };

  // 1. Migration for Bali Nusa naming variants
  if (progress["bali-nusa-tenggara"]) {
    progress["bali-nusa"] = progress["bali-nusa-tenggara"];
    delete progress["bali-nusa-tenggara"];
  }
  if (progress["baliNusa"]) {
    progress["bali-nusa"] = progress["baliNusa"];
    delete progress["baliNusa"];
  }

  // 2. Ensure all stages exist as objects (handle legacy boolean true)
  STAGE_ORDER.forEach(id => {
    if (progress[id] === true) {
      progress[id] = {
        status: "completed",
        materialCompleted: true,
        simulationCompleted: true,
        quizCompleted: true,
        score: 100
      };
    } else if (typeof progress[id] !== 'object' || !progress[id]) {
      progress[id] = createStageProgress(id === 'gateway' ? 'available' : 'locked')
    }
  });

  // 3. Auto-healing: If current is completed, next MUST be at least available
  for (let i = 0; i < STAGE_ORDER.length - 1; i++) {
    const currentId = STAGE_ORDER[i];
    const nextId = STAGE_ORDER[i + 1];

    if (progress[currentId]?.status === "completed") {
      if (!progress[nextId] || progress[nextId].status === "locked") {
        progress[nextId] = { ...createStageProgress("available"), status: "available" };
      }
    }
  }

  // 4. Ensure master status logic
  const allCompleted = STAGE_ORDER.every(id => progress[id]?.status === "completed");
  if (allCompleted) {
    progress.master = true;
  }

  // 5. Ensure gateway is never locked
  if (progress.gateway && progress.gateway.status === "locked") {
    progress.gateway.status = "available";
  }

  return progress;
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return getDefaultProgress()
  const stored = localStorage.getItem("jelantara_progress")
  if (!stored) {
    const initial = getDefaultProgress()
    saveProgress(initial)
    return initial
  }
  try {
    const parsed = JSON.parse(stored)
    return normalizeProgress(parsed)
  } catch (e) {
    return getDefaultProgress()
  }
}

export function saveProgress(progress: ProgressData) {
  if (typeof window === "undefined") return
  localStorage.setItem("jelantara_progress", JSON.stringify(progress))
}

export function completeMaterial(stageId: keyof Omit<ProgressData, "master" | "finalAssessment">) {
  const progress = getProgress()

  if (!progress[stageId] || typeof progress[stageId] === "boolean") {
    progress[stageId] = createStageProgress(
      stageId === "gateway" ? "available" : "locked"
    )
  }

  progress[stageId].materialCompleted = true

  if (progress[stageId].status === "locked") {
    progress[stageId].status = "available"
  }

  saveProgress(progress)
  return progress
}

export function completeSimulation(stageId: keyof Omit<ProgressData, "master" | "finalAssessment">) {
  const progress = getProgress()

  if (!progress[stageId] || typeof progress[stageId] === "boolean") {
    progress[stageId] = createStageProgress(
      stageId === "gateway" ? "available" : "locked"
    )
  }

  progress[stageId].simulationCompleted = true
  saveProgress(progress)
  return progress
}

export function completeQuiz(stageId: keyof Omit<ProgressData, "master" | "finalAssessment">, score: number) {
  const progress = getProgress()

  if (!progress[stageId] || typeof progress[stageId] === "boolean") {
    progress[stageId] = createStageProgress(
      stageId === "gateway" ? "available" : "locked"
    )
  }

  if (score >= 75) {
    progress[stageId].quizCompleted = true
    progress[stageId].score = score
    progress[stageId].status = "completed"
    
    const currentIndex = STAGE_ORDER.indexOf(stageId)
    if (currentIndex < STAGE_ORDER.length - 1) {
      const nextStageId = STAGE_ORDER[currentIndex + 1]
      if (progress[nextStageId].status === "locked") {
        progress[nextStageId].status = "available"
      }
    }
    
    // Check if everything is done to unlock master
    const allDone = STAGE_ORDER.every(id => progress[id]?.status === "completed" || id === stageId);
    if (allDone) {
      progress.master = true;
    }

    saveProgress(progress)
    return true
  }
  
  progress[stageId].score = Math.max(progress[stageId].score, score)
  saveProgress(progress)
  return false
}
