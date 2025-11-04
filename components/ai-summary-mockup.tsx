export function AISummaryMockup() {
  return (
    <div className="w-full bg-card rounded-xl overflow-hidden border border-border shadow-lg">
      {/* Header */}
      <div className="bg-accent/5 border-b border-border p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-accent/30 rounded"></div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-muted rounded w-24"></div>
            <div className="h-2 bg-muted/50 rounded w-16"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-3 bg-muted/50 rounded w-full"></div>
          <div className="h-3 bg-muted/50 rounded w-5/6"></div>
          <div className="h-3 bg-muted/50 rounded w-4/5"></div>
        </div>

        {/* Key points */}
        <div className="pt-4 border-t border-border/50">
          <div className="h-2 bg-accent/30 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-1"></div>
              <div className="h-2 bg-muted/40 rounded flex-1"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-1"></div>
              <div className="h-2 bg-muted/40 rounded flex-1 w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
