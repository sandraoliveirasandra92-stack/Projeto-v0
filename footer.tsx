import Link from "next/link"

const links = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="mx-auto max-w-2xl flex flex-col items-center gap-4">
        <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          {'\u00A9 2026 Het 920 Suiker Detox Kookboek. All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
