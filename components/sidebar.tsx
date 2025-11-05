"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Plus, FileText, Search, Settings, LogOut } from "lucide-react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Plus, label: "New Note", href: "/dashboard/editor" },
    { icon: FileText, label: "All Notes", href: "/dashboard" },
    { icon: Search, label: "Search Notes", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ]

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 md:hidden z-40 p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-6 flex flex-col transition-transform duration-300 transform z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-8 pt-2">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-3xl">🐝</span> NoteHive
          </h1>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-all duration-200 hover:scale-105 cursor-pointer group"
            >
              <item.icon size={20} className="group-hover:text-primary transition-colors" />
              <span className="group-hover:font-semibold transition-all">{item.label}</span>
            </Link>
          ))}
        </nav>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all duration-200 hover:scale-105 cursor-pointer font-medium">
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-20 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
