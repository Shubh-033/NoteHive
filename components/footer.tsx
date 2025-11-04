export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
        <p>© {currentYear} NoteHive. All rights reserved.</p>
      </div>
    </footer>
  )
}
