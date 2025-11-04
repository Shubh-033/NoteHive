export function EditorMockup() {
  return (
    <div className="w-full bg-card rounded-xl overflow-hidden border border-border shadow-lg">
      {/* Toolbar */}
      <div className="bg-primary/5 border-b border-border p-3 sm:p-4 flex items-center gap-2 overflow-x-auto">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-muted rounded hover:bg-muted/80 transition-colors" />
          ))}
        </div>
        <div className="w-px h-6 bg-border/50 mx-2"></div>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-muted rounded hover:bg-muted/80 transition-colors" />
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="p-4 sm:p-8 space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-2/3"></div>
          <div className="h-3 bg-muted/50 rounded w-1/2"></div>
        </div>

        <div className="space-y-3 pt-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 bg-muted/40 rounded" style={{ width: `${90 - i * 8}%` }} />
          ))}
        </div>

        {/* Blinking cursor effect */}
        <div className="inline-block">
          <span className="text-foreground font-light animate-blink-cursor text-lg">|</span>
        </div>
      </div>
    </div>
  )
}
