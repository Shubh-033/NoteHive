"use client"

import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 relative">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        />
      </div>
      <button className="p-2 hover:bg-secondary rounded-lg transition-all duration-200 cursor-pointer">
        <span className="text-lg">👤</span>
      </button>
    </div>
  )
}
