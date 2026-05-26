import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";


export default function Home() {
  return (
        <Section>
        <Container>
          <h1 className="text-4xl font-medium tracking-tight text-primary mb-4">
            olmyn
          </h1>
          <p className="text-muted mb-8">Testing the primitives.</p>
          <div className="flex gap-3">
            <Button href="/work">See the work</Button>
            <Button href="/contact" variant="outline">
              Start a project
            </Button>
          </div>
        </Container>
      </Section>
    
  );
}
