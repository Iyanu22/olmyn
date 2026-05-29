import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { projects } from "../../data/projects";

export default function SelectedWork() {
  return (
    <Section id="work">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="group cursor-pointer">
              <div
                className={`relative ${project.cardColor} aspect-4/3 rounded-lg mb-4 overflow-hidden transition-transform group-hover:scale-[1.01]`}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.name} — project preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-muted">{project.category}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}