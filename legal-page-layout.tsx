import Link from "next/link"

export function LegalPageLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to main page
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-balance">
          {title}
        </h1>
        <div className="prose-custom flex flex-col gap-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Refund Policy
          </Link>
          <Link href="/terms-of-use" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Use
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  )
}
