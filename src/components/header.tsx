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
import { Badge } from "./ui/badge";

const ProjectsContent = () => (
  <>
    <DialogHeader>
      <DialogTitle>My Projects</DialogTitle>
      <DialogDescription>
        Here are some of the projects I've worked on.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-6">
      <div>
        <h3 className="font-bold">Sales CRM (Web & Android App)</h3>
        <p className="text-sm text-muted-foreground mt-2">
          A comprehensive Sales CRM platform, available on both web and Android, designed to streamline sales workflows and enhance customer relationship management. This system provides a centralized hub for managing customer data, tracking agent productivity, and automating key sales tasks, leading to a more efficient sales process and measurable business growth.
        </p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Flutter</Badge>
            <Badge variant="secondary">Firestore</Badge>
            <Badge variant="secondary">FCM</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">GCP</Badge>
            <Badge variant="secondary">REST APIs</Badge>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Fintech Mobile App</h3>
        <p className="text-sm text-muted-foreground mt-2">A secure and intuitive fintech mobile app for managing personal finances, built with modern security practices.</p>
      </div>
      <div>
        <h3 className="font-bold">Portfolio Website</h3>
        <p className="text-sm text-muted-foreground mt-2">This very website, built with Next.js and Tailwind CSS to showcase my work and skills.</p>
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
        Let's chat! I'm ready to work on exciting projects.
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
        RAJAT SHUKLA
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
