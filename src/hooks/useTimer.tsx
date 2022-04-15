import React, { useCallback, useEffect, useRef, useState } from "react"

export const useTimer = (initialTime: number, onTimeout: () => void) => {
  const [time, setTime] = useState<number>(initialTime)
  const timeoutRef = useRef<NodeJS.Timeout | null>()
  const startTimer = useCallback(() => {
    const timeout = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)
    timeoutRef.current = timeout
    return timeout
  }, [])
  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current)
    }
    setTime(initialTime)
    return startTimer()
  }, [startTimer, initialTime])
  useEffect(() => {
    if (time === 0 && timeoutRef.current) {
      clearInterval(timeoutRef.current)
      onTimeout()
    }
  }, [onTimeout, time])
  return { time, startTimer, resetTimer }
}
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.round(((time / 60) % 1) * 60)
  return `${Math.floor(minutes / 10) < 1 ? "0" : ""}${minutes}:${seconds}${Math.floor(seconds / 10) < 1 ? "0" : ""}`
}
