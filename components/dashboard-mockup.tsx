export function DashboardMockup() {
  return (
    <div className="w-full bg-card rounded-xl overflow-hidden border border-border shadow-lg">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="h-3 bg-muted rounded w-1/3"></div>
            <div className="h-2 bg-muted/50 rounded w-1/4"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <div className="w-8 h-8 bg-accent rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Search bar */}
        <div className="mb-6 flex gap-2">
          <div className="flex-1 h-10 bg-muted rounded-lg border border-border/50"></div>
          <div className="w-10 h-10 bg-primary/10 rounded-lg border border-primary/20"></div>
        </div>

        {/* Note cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200"
              style={{
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${i * 0.08}s`,
                opacity: 0,
              }}
            >
              <div className="h-3 bg-muted rounded mb-3 w-2/3"></div>
              <div className="space-y-2">
                <div className="h-2 bg-muted/50 rounded"></div>
                <div className="h-2 bg-muted/50 rounded w-4/5"></div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-border/30">
                <div className="h-6 bg-primary/10 rounded px-2 text-xs text-muted-foreground flex items-center">
                  Tag
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
