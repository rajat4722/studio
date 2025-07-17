"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
      <Link href="/" className="font-headline text-lg font-bold uppercase tracking-widest">
        Julia Huang
      </Link>
      <nav className="flex items-center gap-6 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary hidden md:block"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
