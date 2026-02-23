import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Terms of Use - Het 920 Suiker Detox Kookboek",
  description: "Terms of Use for Het 920 Suiker Detox Kookboek.",
}

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <p className="text-sm text-muted-foreground">Effective date: 20/02/2026</p>

      <p>
        Welcome to Het 920 Suiker Detox Kookboek. By purchasing, accessing, or
        using this digital product (the &quot;Service&quot;), you agree to be bound by
        the following Terms of Use. Please read them carefully before using the
        Service.
      </p>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 1 &ndash; Parties</h2>
        <p>
          These Terms are a legal agreement between you (&quot;User&quot;, &quot;you&quot;) and
          Het 920 Suiker Detox Kookboek (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
          Payments are processed by our authorized reseller and payment
          processor, Digistore24 GmbH.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 2 &ndash; Nature of Service</h2>
        <p>
          Het 920 Suiker Detox Kookboek is an educational digital guide focused
          on general wellness habits. It does not provide medical advice,
          diagnosis, or treatment. Any health-related decisions should be made
          with a qualified healthcare professional.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 3 &ndash; License of Use</h2>
        <p>
          Upon purchase, you are granted a non-exclusive, non-transferable,
          revocable license to access and use the materials for personal,
          non-commercial purposes only.
        </p>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>You may download and store the materials for personal use.</li>
          <li>
            You may not resell, distribute, share publicly, or make the
            materials available to third parties.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 4 &ndash; User Obligations</h2>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>You agree to use the Service only for lawful purposes.</li>
          <li>
            You agree not to misuse, copy, or redistribute the content without
            permission.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            purchase and access credentials.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 5 &ndash; Prohibited Conduct</h2>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Reverse-engineering, copying, or creating derivative works of the
            content.
          </li>
          <li>
            Sharing access, login links, or download files with others.
          </li>
          <li>
            Using the Service in a way that violates laws or infringes rights of
            others.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 6 &ndash; Refunds</h2>
        <p>
          Refunds are governed by our Refund Policy. We offer a 60-day
          money-back guarantee for purchases made through Digistore24. Please
          see the Refund Policy for details.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 7 &ndash; Intellectual Property</h2>
        <p>
          All materials, text, graphics, files, and digital content provided
          within the Service are protected by copyright and remain the
          intellectual property of Het 920 Suiker Detox Kookboek. Unauthorized
          use may result in legal action.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 8 &ndash; Disclaimer of Warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available.&quot; We make no
          guarantees of results or outcomes.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 9 &ndash; Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Het 920 Suiker Detox Kookboek
          shall not be liable for any damages arising from the use of, or
          inability to use, the Service. Individual results vary. No specific
          outcomes are promised.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 10 &ndash; Digistore24 as Reseller</h2>
        <p>
          All payments are processed by Digistore24 GmbH, which acts as the
          reseller of the product. Digistore24 is responsible for handling
          transactions, invoicing, and refunds according to their own terms and
          policies.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 11 &ndash; Termination</h2>
        <p>
          We may revoke access to the Service if these Terms are violated.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 12 &ndash; Governing Law</h2>
        <p>
          These Terms shall be governed by the applicable laws of your country
          of residence.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 13 &ndash; Updates to Terms</h2>
        <p>
          We may update these Terms from time to time. Updated versions will be
          posted with a new effective date.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-xl text-foreground">Section 14 &ndash; Contact</h2>
        <p>Het 920 Suiker Detox Kookboek</p>
        <p>
          Email:{" "}
          <a
            href="mailto:contatolaurentsophie@gmail.com"
            className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
          >
            contatolaurentsophie@gmail.com
          </a>
        </p>
      </section>

      <p className="text-sm text-muted-foreground pt-4 border-t border-border">
        &copy; 2026 Het 920 Suiker Detox Kookboek. All rights reserved.
      </p>
    </LegalPageLayout>
  )
}
