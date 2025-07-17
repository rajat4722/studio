"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const ProjectsContent = () => (
  <>
    <DialogHeader>
      <DialogTitle>My Projects</DialogTitle>
      <DialogDescription>
        Here are some of the projects I've worked on.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div>
        <h3 className="font-bold">E-Commerce Platform</h3>
        <p className="text-sm text-muted-foreground">A full-stack web application for online shopping, featuring product catalogs, user authentication, and a payment gateway integration.</p>
      </div>
      <div>
        <h3 className="font-bold">Task Management App</h3>
        <p className="text-sm text-muted-foreground">A cross-platform mobile app built with React Native to help users organize their daily tasks and improve productivity.</p>
      </div>
      <div>
        <h3 className="font-bold">Portfolio Website</h3>
        <p className="text-sm text-muted-foreground">This very website, built with Next.js and Tailwind CSS to showcase my work and skills.</p>
      </div>
    </div>
  </>
);

const AboutContent = () => (
  <>
    <DialogHeader>
      <DialogTitle>About Me</DialogTitle>
      <DialogDescription>
        A little bit about my background and skills.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <p className="text-sm">
        I am a passionate and driven developer with experience in building modern, responsive, and user-friendly web and mobile applications. My expertise lies in the JavaScript ecosystem, particularly with React, Next.js, and Node.js.
      </p>
      <p className="text-sm">
        For mobile development, I am proficient in using React Native to create performant cross-platform applications. I am always eager to learn new technologies and take on challenging projects.
      </p>
    </div>
  </>
);

const ContactContent = () => (
  <>
    <DialogHeader>
      <DialogTitle>Contact Me</DialogTitle>
      <DialogDescription>
        Feel free to reach out for collaborations or just to say hi!
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <p className="text-sm">
        You can reach me via email at <a href="mailto:rajatshukla3338@gmail.com" className="text-primary hover:underline">rajatshukla3338@gmail.com</a>.
      </p>
      <p className="text-sm">
        You can also find me on <a href="https://www.linkedin.com/in/rajat-shukla586942/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> and <a href="https://github.com/rajat4722" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>.
      </p>
    </div>
  </>
);

const navLinks = [
  { label: "Projects", content: <ProjectsContent /> },
  { label: "About", content: <AboutContent /> },
  { label: "Contact", content: <ContactContent /> },
];


export function Header() {
  return (
    <header className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
      <Link href="/" className="font-headline text-lg font-bold uppercase tracking-widest">
        John Doe
      </Link>
      <nav className="flex items-center gap-2 md:gap-4">
        {navLinks.map((link) => (
           <Dialog key={link.label}>
             <DialogTrigger asChild>
               <Button
                 variant="ghost"
                 className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary hidden md:block"
               >
                 {link.label}
               </Button>
             </DialogTrigger>
             <DialogContent>
               {link.content}
             </DialogContent>
           </Dialog>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}

export const ProjectsTrigger = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent><ProjectsContent /></DialogContent>
  </Dialog>
);

export const ContactTrigger = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent><ContactContent /></DialogContent>
  </Dialog>
);

export default Header;
