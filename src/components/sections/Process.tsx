import Container from "../ui/Container";
import Section from "../ui/Section";

const steps = [
  {
    number: "01",
    title: "We talk",
    description:
      "A 30-minute call to understand what you're building and whether I'm the right fit. No sales pressure.",
  },
  {
    number: "02",
    title: "I build",
    description:
      "Progress updates, working previews, and real conversations — not silence and surprises.",
  },
  {
    number: "03",
    title: "You own it",
    description:
      "Full handoff. Code, hosting access, training. The site is yours. Forever.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-surface">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-sm font-medium text-accent mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}