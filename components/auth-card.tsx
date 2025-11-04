import type React from "react"
export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md">
      <div className="bg-card rounded-2xl shadow-lg border border-border p-8 backdrop-blur-sm">{children}</div>
      <p className="text-center text-muted-foreground text-xs mt-4">© 2025 NoteHive. All rights reserved.</p>
    </div>
  )
}
