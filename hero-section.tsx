import { Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance max-w-3xl">
        Het 920 Suiker Detox Kookboek
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
        A simple and practical cookbook designed to support a lower-sugar
        lifestyle — without extreme diets or complicated rules.
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
        <span>{'Compliance-friendly \u00B7 No medical claims \u00B7 Results vary'}</span>
      </p>
      <a
        href="#checkout"
        className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Proceed to Secure Checkout
      </a>
      <p className="mt-3 text-xs text-muted-foreground">
        Payments processed securely by Digistore24.
      </p>
    </section>
  )
}
