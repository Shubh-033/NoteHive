"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { SearchBar } from "@/components/search-bar"
import { Plus, Clock } from "lucide-react"

interface Note {
  id: string
  title: string
  snippet: string
  lastEdited: string
}

const mockNotes: Note[] = [
  {
    id: "1",
    title: "Welcome to NoteHive",
    snippet: "Start writing your first note here. This is a powerful cloud notes application...",
    lastEdited: "2 days ago",
  },
  {
    id: "2",
    title: "Project Ideas",
    snippet: "Brainstorm new ideas for upcoming projects and innovations...",
    lastEdited: "5 days ago",
  },
  {
    id: "3",
    title: "Meeting Notes",
    snippet: "Key takeaways from the weekly team meeting and action items...",
    lastEdited: "1 week ago",
  },
  {
    id: "4",
    title: "Personal Goals",
    snippet: "Track your personal and professional development goals...",
    lastEdited: "3 days ago",
  },
  {
    id: "5",
    title: "Research Notes",
    snippet: "Comprehensive research findings and reference materials...",
    lastEdited: "1 week ago",
  },
  {
    id: "6",
    title: "Code Snippets",
    snippet: "Useful code examples and programming solutions...",
    lastEdited: "4 days ago",
  },
]

export default function Dashboard() {
  const [notes] = useState<Note[]>(mockNotes)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main content */}
      <main className="md:ml-64 transition-margin duration-300">
        {/* Sticky top bar */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="p-4 sm:p-6">
            <SearchBar />
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 sm:p-6 animate-fade-in-up">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">All Notes</h2>
            <p className="text-muted-foreground">You have {notes.length} notes</p>
          </div>

          {/* Grid of notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {notes.map((note, idx) => (
              <div
                key={note.id}
                className="animate-fade-in-up bg-card rounded-xl p-5 sm:p-6 border border-border hover:scale-102 hover:shadow-md transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {note.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">{note.snippet}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={14} />
                  <span>{note.lastEdited}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating "+" button */}
      <Link
        href="/dashboard/editor"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer z-10 group"
      >
        <Plus size={28} className="group-hover:rotate-90 transition-transform duration-300" />
      </Link>
    </div>
  )
}
