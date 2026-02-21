import { ChevronRight, AlertTriangle } from "lucide-react"

const audiences = [
  "People who want a flexible, non-restrictive approach",
  "Those who prefer practical steps instead of strict rules",
  "Anyone looking to complement healthy habits",
]

export function WhoForSection() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl md:text-3xl text-secondary-foreground text-center mb-10">
          {"Who it\u2019s for"}
        </h2>
        <ul className="flex flex-col gap-4">
          {audiences.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm"
            >
              <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base leading-relaxed text-card-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-card p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Not for:</strong>{" "}
            those seeking medical treatment, guaranteed results, or quick fixes.
            Always consult a professional before making significant dietary
            changes.
          </p>
        </div>
      </div>
    </section>
  )
}
