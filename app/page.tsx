"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollSection } from "@/components/scroll-section"
import { DashboardMockup } from "@/components/dashboard-mockup"
import { EditorMockup } from "@/components/editor-mockup"
import { AISummaryMockup } from "@/components/ai-summary-mockup"
import { DeviceShowcase } from "@/components/device-showcase"

export default function LandingPage() {
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-gradient-to-b from-background via-secondary to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection("dashboard-section")}
            className="animate-bounce-soft text-primary hover:text-accent transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to next section"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance animate-fade-in-up mb-4 sm:mb-6">
            Write. Organize. Summarize.
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance animate-fade-in-up mb-6 sm:mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            Your thoughts, everywhere.
          </p>

          <p
            className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto text-balance animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            NoteHive is your intelligent cloud notes companion. Capture ideas, organize them effortlessly, and summarize
            key insights instantly.
          </p>

          <button
            onClick={() => router.push("/signup")}
            className="inline-flex px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-md hover:shadow-lg btn-primary-hover animate-fade-in-up text-sm sm:text-base"
            style={{ animationDelay: "0.3s" }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section
        id="dashboard-section"
        className="py-16 sm:py-28 px-4 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"
      >
        <ScrollSection className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Organize Your Notes Effortlessly
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A clean dashboard with intuitive folders and quick search. Find what you need in seconds.
            </p>
          </div>

          <div className="animate-fade-in">
            <DashboardMockup />
          </div>
        </ScrollSection>
      </section>

      {/* Note Editor Section */}
      <section className="py-16 sm:py-28 px-4">
        <ScrollSection className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Focus on Writing
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                A distraction-free editor built for flow. Rich formatting, smooth typing, and instant auto-save keep
                your ideas flowing without interruption.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  Rich text formatting with keyboard shortcuts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  Seamless auto-save to the cloud
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  Minimal UI for maximum focus
                </li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <EditorMockup />
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* AI Summarization Section */}
      <section className="py-16 sm:py-28 px-4 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <ScrollSection className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <AISummaryMockup />
            </div>

            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                AI-Powered Summaries
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Let NoteHive extract key insights automatically. Save hours of review time with intelligent summaries
                powered by cutting-edge AI.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                  One-click summaries of long notes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                  Highlight key points automatically
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                  Export summaries in multiple formats
                </li>
              </ul>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Cloud Sync Section */}
      <section className="py-16 sm:py-28 px-4">
        <ScrollSection className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Access Anywhere
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Your notes are always in sync across all your devices. Start on your phone, continue on your laptop.
            </p>
          </div>

          <div className="relative w-full min-h-80 sm:min-h-96 flex items-center justify-center animate-fade-in">
            <DeviceShowcase />
          </div>
        </ScrollSection>
      </section>

      {/* Security & Speed Section */}
      <section className="py-16 sm:py-28 px-4 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <ScrollSection className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Built for Trust & Speed
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security with lightning-fast performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: "🔐", label: "Encrypted", desc: "End-to-end encryption" },
              { icon: "💾", label: "Auto-Save", desc: "Never lose your work" },
              { icon: "⚡", label: "Fast", desc: "Optimized for speed" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-card border border-border rounded-2xl text-center feature-card hover:cursor-pointer"
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{feature.label}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </ScrollSection>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 px-4 bg-gradient-to-b from-transparent to-secondary/50">
        <ScrollSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6 sm:mb-8">
            Ready to make your thoughts unstoppable?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 max-w-xl mx-auto">
            Join thousands of users who are already writing, organizing, and summarizing smarter with NoteHive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/signup")}
              className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-md hover:shadow-lg btn-primary-hover text-sm sm:text-base"
            >
              Get Started Free
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-6 sm:px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full border border-border hover:bg-muted transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base btn-primary-hover"
            >
              Sign In
            </button>
          </div>
        </ScrollSection>
      </section>

      <Footer />
    </main>
  )
}
