export function DeviceShowcase() {
  return (
    <div className="relative w-full h-full min-h-96">
      {/* Laptop - Center */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 w-full max-w-sm">
        <div className="bg-card rounded-t-3xl border-8 border-foreground/10 shadow-2xl overflow-hidden">
          <div className="bg-primary/5 p-4 space-y-2">
            <div className="h-2 bg-muted rounded w-1/3"></div>
            <div className="h-2 bg-muted/50 rounded w-1/2"></div>
          </div>
        </div>
        <div className="h-2 bg-foreground/10 mx-12 rounded-b-lg"></div>
        <div className="h-1 bg-foreground/5 mx-8"></div>
      </div>

      {/* Phone - Left */}
      <div className="absolute left-0 sm:left-4 top-1/3 transform -rotate-12 sm:rotate-0 w-32 sm:w-40 z-10">
        <div className="bg-card rounded-3xl border-4 border-foreground/10 shadow-xl overflow-hidden">
          <div className="aspect-video bg-primary/5 p-2 space-y-1">
            <div className="h-1 bg-muted rounded w-2/3"></div>
            <div className="h-1 bg-muted/50 rounded w-1/2"></div>
            <div className="h-1 bg-muted/50 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Tablet - Right */}
      <div className="absolute right-0 sm:right-4 top-1/2 transform rotate-12 sm:rotate-0 w-40 sm:w-48 z-10">
        <div className="bg-card rounded-2xl border-6 border-foreground/10 shadow-xl overflow-hidden">
          <div className="aspect-video bg-primary/5 p-3 space-y-2">
            <div className="h-2 bg-muted rounded w-1/2"></div>
            <div className="h-2 bg-muted/50 rounded w-2/3"></div>
            <div className="h-1 bg-muted/50 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
