import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

const NavLinks = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  return (
    <header className="border-b border-primary/15 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-primary"
          >
            olmyn
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/#contact" className="hidden md:inline-flex">
            Start a project
          </Button>
        </div>
      </Container>
    </header>
  );
}
