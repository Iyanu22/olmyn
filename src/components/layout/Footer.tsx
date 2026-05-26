import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink text-background py-12 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="text-xl font-medium tracking-tight mb-2">
              olmyn
            </div>
            <p className="text-sm text-background/70">
              mine to build, yours to own
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-background/70">
            <Link href="mailto:hello@olmyn.com" className="hover:text-background transition-colors">
              hello@olmyn.com
            </Link>
            <span>Lagos, NG</span>
          </div>

          <div className="text-sm text-background/50">
            © Olmyn {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}