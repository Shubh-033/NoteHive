"use client"

import { useEffect, useRef } from "react"

interface ScrollObserverOptions {
  threshold?: number | number[]
  margin?: string
}

export function useScrollObserver(callback: (isVisible: boolean) => void, options: ScrollObserverOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const { threshold = 0.2, margin = "0px" } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin: margin,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [callback, threshold, margin])

  return elementRef
}
