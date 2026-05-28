import Container from "../ui/Container";
import Section from "../ui/Section";
import Avatar from "../ui/Avatar";

const testimonials = [
  {
    quote:
      "Rebuilt our site in two weeks and trained our team on the admin. We've already published 3 posts on our own. Felt like working with a partner, not a vendor.",
    name: "Sarah Okonkwo",
    role: "Founder, Lagos Bloom",
    initials: "SO",
    avatarVariant: "olive" as const,
  },
  {
    quote:
      "Clear communication, no surprises, and the site looks better than what we got from agencies three times the price.",
    name: "Daniel Adeyemi",
    role: "CEO, Adeyemi Legal",
    initials: "DA",
    avatarVariant: "gold" as const,
  },
  {
    quote:
      "Took the time to understand our business first. The handoff was so clean we never needed to call back.",
    name: "Chioma Eze",
    role: "Owner, Eze Catering",
    initials: "CE",
    avatarVariant: "ink" as const,
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-surface">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
          What clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-lg p-6 flex flex-col"
            >
              <p className="font-serif italic text-lg text-foreground leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <Avatar
                  initials={testimonial.initials}
                  variant={testimonial.avatarVariant}
                />
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}