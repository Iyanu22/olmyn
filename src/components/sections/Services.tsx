import Container from "../ui/Container";
import Section from "../ui/Section";

const services = [
  {
    name: "Websites",
    description:
      "Brand sites, portfolios, marketing pages, blogs. WordPress or modern stack.",
    priceFrom: "$400",
  },
  {
    name: "E-commerce",
    description:
      "WooCommerce stores with local payment integrations, inventory, and variations.",
    priceFrom: "$500",
  },
  {
    name: "Web apps",
    description:
      "Custom dashboards, internal tools, client portals. React + Next.js.",
    priceFrom: "$1,000",
  },
];

export default function Services() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
          What I build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-card border border-primary/20 rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-lg font-medium text-foreground mb-3">
                {service.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="text-sm font-medium text-primary">
                <span className="text-muted font-normal">From </span>
                {service.priceFrom}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
