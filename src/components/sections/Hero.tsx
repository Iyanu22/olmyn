import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <Section className="pt-24 md:pt-32 pb-20 md:pb-28">
      <Container>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-6 max-w-3xl">
          Mine to build,
          <br />
          yours to own.
        </h1>

        <p className="text-xl text-muted max-w-xl mb-10 leading-relaxed">
          I build websites and web apps for businesses that care about how
          things are made.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button href="#contact">Start a project</Button>
          <Button href="#work" variant="outline">
            See the work
          </Button>
        </div>
      </Container>
    </Section>
  );
}