import { Check } from "lucide-react"

const benefits = [
  "Support more balanced food choices",
  "Reduce excessive sugar intake in a practical way",
  "Build a more mindful and sustainable eating rhythm",
]

export function BenefitsSection() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">
          Potential benefits
        </h2>
        <ul className="flex flex-col gap-4 items-start text-left mx-auto max-w-md">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </span>
              <span className="text-base leading-relaxed text-foreground">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground italic">
          Results vary by individual. No specific outcomes or timeframes are
          guaranteed.
        </p>
      </div>
    </section>
  )
}
