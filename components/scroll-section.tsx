"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useScrollObserver } from "./scroll-observer"

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
}

export function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = useCallback((visible: boolean) => {
    if (visible) {
      setIsVisible(true)
    }
  }, [])

  const ref = useScrollObserver(handleVisibility)

  return (
    <div ref={ref} className={`section-fade-in ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
