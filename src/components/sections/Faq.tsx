"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import FaqItem from "../sections/FaqItem";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A simple marketing site typically takes 1–2 weeks. A standard WooCommerce store is 3–4 weeks. Web apps run 6–12 weeks depending on complexity. We'll firm up a timeline during our first call.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes. I offer monthly maintenance plans starting at $50/month — covering updates, backups, security, and minor content changes.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Most of my clients are based outside Nigeria. I work in your timezone, communicate clearly, and accept international payments via Stripe, Wise, and Paystack.",
  },
  {
    question: "Do I own the code and design?",
    answer:
      "Yes — fully. Once a project is paid for, the code, design files, hosting access, and all assets are transferred to you. No lock-in, no ongoing licenses, no strings.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
          Frequently asked
        </h2>

        <div className="border-b border-primary/15">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}