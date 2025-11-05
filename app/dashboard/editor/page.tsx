"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Trash2, Sparkles } from "lucide-react"

export default function Editor() {
  const [title, setTitle] = useState("Untitled Note")
  const [content, setContent] = useState("")
  const [lastSaved, setLastSaved] = useState("Just now")

  const handleSave = () => {
    setLastSaved("Just now")
    // Save logic here
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      // Delete logic here
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 text-xl sm:text-2xl font-bold bg-transparent border-b-2 border-transparent focus:border-primary focus:outline-none transition-colors duration-200 px-2"
              placeholder="Untitled Note"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleSave}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-medium"
            >
              <Save size={18} />
              <span className="hidden sm:inline">Save</span>
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-medium"
            >
              <Trash2 size={18} />
              <span className="hidden sm:inline">Delete</span>
            </button>
            <button
              disabled
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground/50 rounded-lg cursor-not-allowed opacity-50"
            >
              <Sparkles size={18} />
              <span className="hidden sm:inline">Summarize</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl bg-card rounded-xl border border-border shadow-md p-6 sm:p-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start typing your note here..."
            className="w-full h-96 sm:h-[500px] bg-transparent text-foreground placeholder-muted-foreground resize-none focus:outline-none text-base sm:text-lg leading-relaxed"
          />

          <div className="mt-6 text-sm text-muted-foreground border-t border-border pt-4">Last saved: {lastSaved}</div>
        </div>
      </div>
    </div>
  )
}
