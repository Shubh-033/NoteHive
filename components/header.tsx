"use client"

import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isAuthPage = pathname === "/login" || pathname === "/signup"

  return (
    <header
      className={`border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">NoteHive</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          {!isAuthPage && (
            <>
              <button
                onClick={() => router.push("/login")}
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/signup")}
                className="px-3 sm:px-4 py-2 bg-primary text-primary-foreground font-medium rounded-full text-sm sm:text-base hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md btn-primary-hover"
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
