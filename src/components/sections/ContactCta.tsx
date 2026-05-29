import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function ContactCta() {
  return (
    <Section id="contact" className="bg-primary">
      <Container>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-background mb-4 max-w-xl">
          Got something to build?
        </h2>

        <p className="text-xl text-background/80 mb-10">
          Let&rsquo;s talk about your project.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button href="mailto:hello@olmyn.com" variant="inverse">
            hello@olmyn.com
          </Button>
          <Button href="mailto:hello@olmyn.com" variant="inverse-outline">
            Book a call
          </Button>
        </div>

        <p className="text-base text-background/60 mb-12">
          Reply within 24 hours, Monday–Friday.
        </p>

        <p className="text-base text-accent tracking-wide">
          Mine to build, yours to own.
        </p>
      </Container>
    </Section>
  );
}