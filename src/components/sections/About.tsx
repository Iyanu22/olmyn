import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-cream-soft max-w-sm">
            <Image
              src="/olmyn-profile.jpg"
              alt="Portrait of the founder of Olmyn"
              fill
              className="object-cover object-[center_90%] [filter:sepia(0.15)_saturate(0.9)_brightness(1.02)]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>

          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8">
              About Olmyn
            </h2>

            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                Olmyn is a one-person web studio based in Lagos, building for
                clients worldwide. The name comes from Olamide — my Yoruba name
                meaning &ldquo;my glory has come&rdquo; — shortened to a single
                word: mine.
              </p>

              <p>
                That&rsquo;s the promise. Every site is mine to build with the
                care I&rsquo;d give my own work, then yours to own without
                strings, surprises, or lock-in.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}