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

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  hint: string;
}

const ProjectContent = ({ project }: { project: Project }) => (
  <>
    <DialogHeader>
      <DialogTitle>{project.name}</DialogTitle>
      <DialogDescription>
        Here are the details for this project.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mt-2">
          {project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        )}
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

export const ProjectsTrigger = ({ children, project }: { children: React.ReactNode, project: Project }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent><ProjectContent project={project} /></DialogContent>
  </Dialog>
);

export const ContactTrigger = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent><ContactContent /></DialogContent>
  </Dialog>
);
