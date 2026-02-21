import { BookOpen, CreditCard, Utensils, CalendarCheck } from "lucide-react"

const items = [
  {
    icon: CreditCard,
    text: "One-time price: \u20AC12,90 (instant digital access)",
  },
  {
    icon: BookOpen,
    text: "Organized digital cookbook",
  },
  {
    icon: Utensils,
    text: "Practical guidance for reducing sugar intake responsibly",
  },
  {
    icon: CalendarCheck,
    text: "Easy-to-follow structure for daily use",
  },
]

export function AtAGlanceSection() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl text-secondary-foreground text-center mb-10">
          At a glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-card-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
