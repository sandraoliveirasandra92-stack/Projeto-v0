import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 md:p-12 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            60-Day Money-Back Guarantee
          </p>
          <p className="text-base leading-relaxed text-muted-foreground max-w-md">
            Try Het 920 Suiker Detox Kookboek risk-free for 60 days. If it
            {"doesn\u2019t"} support your routine, request a refund through your
            Digistore24 receipt.
          </p>
        </div>
      </div>
    </section>
  )
}
