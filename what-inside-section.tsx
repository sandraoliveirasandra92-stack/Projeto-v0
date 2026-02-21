import { ChevronRight } from "lucide-react"

const items = [
  "A structured collection of lower-sugar recipes",
  "Practical tips to integrate recipes into your routine",
  "Simple strategies for consistency",
  "Guidance for maintaining balance long term",
]

export function WhatInsideSection() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl md:text-3xl text-secondary-foreground text-center mb-10">
          {"What you\u2019ll find inside"}
        </h2>
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
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
      </div>
    </section>
  )
}
