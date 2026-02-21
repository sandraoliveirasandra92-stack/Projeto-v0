export function FinalCtaSection() {
  return (
    <section id="checkout" className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-lg md:text-xl font-medium text-secondary-foreground mb-8">
          {'\u20AC12,90 \u00B7 one-time payment \u00B7 instant digital access'}
        </p>
        <a
          href="#checkout"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Proceed to Secure Checkout
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          Payments processed securely by Digistore24.
        </p>
      </div>
    </section>
  )
}
