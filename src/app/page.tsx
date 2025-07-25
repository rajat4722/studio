"use client";

import { useState } from 'react';
import { Header, ProjectsTrigger, ContactTrigger } from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectCarousel } from '@/components/project-carousel';
import type { Project } from '@/components/header';
import { cn } from '@/lib/utils';
import WorldMap from '@/components/world-map';

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const techIcons = [
  {
    name: 'Java',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Java</title>
        <path d="M12.44 6.33a.47.47 0 00-.43.24L9.2 12.3v.05l-1.3 5.4a.1.1 0 00.1.1h1.33a.47.47 0 00.44-.28l2.2-4.57v.01l1.45-3a.47.47 0 00-.43-.68zm4.18-1.04a.47.47 0 00-.43.27l-2.9 6.02-.37.74.83 3.65a.48.48 0 00.47.39H16a.48.48 0 00.47-.39L18.43 9a.48.48 0 00-.47-.56h-1.3zm-8.86 0a.48.48 0 00-.47.56L9.2 9.2a.48.48 0 00.47.56h1.3a.48.48 0 00.44-.3l-1.12-2.3a.48.48 0 00-.4-.26zm5.83 9.42a.48.48 0 00-.44.27l-1.12 2.3a.48.48 0 00.4.73h1.3a.48.48 0 00.48-.55l-.1-3.23a.48.48 0 00-.52-.52z" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Flutter</title>
        <path d="M13.5 7.5l-4 4 4 4 8-8-8-8zm-4 4l-4 4h8l-4-4z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
       <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Node.js</title>
        <path d="M11.72 17.75c-.23.4-.64.65-1.1.65H8.28c-.69 0-1.25-.56-1.25-1.25V7.75c0-.69.56-1.25 1.25-1.25h2.2c.54 0 1.01.32 1.2.78l3.12 7.51c.21.5.03 1.08-.43 1.34l-1.07.59c-.46.26-1.04.14-1.35-.27L11.72 17.75zM19.11 6.5h-2.2c-.69 0-1.25.56-1.25 1.25v8.41c0 .69.56 1.25 1.25 1.25h2.2c.69 0 1.25-.56 1.25-1.25V7.75c0-.69-.56-1.25-1.25-1.25z"></path>
      </svg>
    ),
  },
   {
    name: 'React',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>React</title>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2.06-8.91c.21-.49.59-.88 1.06-1.06l3.3-1.1c.69-.23 1.4.28 1.4.99v.18c0 .41-.25.79-.64.95l-3.3 1.1c-.21.07-.43.07-.64 0l-3.3-1.1c-.69-.23-1.09-.96-.85-1.65s.96-1.09 1.65-.85l.02.01zm4.12 2.12c.21.49.12 1.08-.22 1.48l-1.65 1.95c-.38.45-1.03.56-1.54.25l-1.65-.98c-.51-.3-.79-.88-.64-1.45l.49-1.95c.15-.57.71-1.01 1.32-.95l.03.01c.6.06 1.08.51 1.18 1.1l.04.16zm-4.12 2.12c-.21-.49-.59-.88-1.06-1.06l-3.3-1.1c-.69-.23-1.4.28-1.4.99v.18c0 .41-.25.79.64.95l3.3 1.1c.21.07.43.07.64 0l3.3-1.1c.69-.23 1.09-.96.85-1.65s-.96-1.09-1.65-.85l-.02.01z" />
      </svg>
    )
  },
  {
    name: 'GCP',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Google Cloud</title>
        <path d="M12.12 11.232a3.812 3.812 0 110-7.624 3.812 3.812 0 010 7.624zm-1.89-1.92h1.89c.96 0 1.92.36 1.92 1.512a1.8 1.8 0 01-1.8 1.8h-.06c-.99.072-1.95-.36-1.95-1.512zM21.6 13.68a.9.9 0 00-.9.9v1.236a.9.9 0 101.8 0V14.58a.9.9 0 00-.9-.9zm-1.92-3.156c-1.368-1.584-3.132-2.016-4.932-2.016h-.06a6.34 6.34 0 00-6.048 4.212 6.34 6.34 0 00-2.88 5.148 6.336 6.336 0 006.336 6.336h7.668a5.202 5.202 0 005.184-5.22c0-2.808-2.304-5.04-5.268-5.064z"/>
      </svg>
    ),
  },
   {
    name: 'Firebase',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Firebase</title>
        <path d="M4.58 16.52l6.19-11.23a.47.47 0 01.81 0l6.19 11.23a.47.47 0 01-.4.7H4.98a.47.47 0 01-.4-.7zM6.54 4.3l-2.1 11.75a.47.47 0 00.44.55h.3a.47.47 0 00.46-.38L8.1 4.25a.47.47 0 00-.4-.53h-.7a.47.47 0 00-.46.58z" />
      </svg>
    )
  },
];

const projects: Project[] = [
  { 
    name: 'Sales CRM (Web & Android App)', 
    image: 'https://storage.googleapis.com/aai-web-samples/user-provided/600x400-b1.png', 
    hint: 'crm dashboard mobile',
    description: "A comprehensive Sales CRM platform, available on both web and Android, designed to streamline sales workflows and enhance customer relationship management. This system provides a centralized hub for managing customer data, tracking agent productivity, and automating key sales tasks, leading to a more efficient sales process and measurable business growth.",
    techStack: ["Flutter", "Firestore", "FCM", "Node.js", "SQL", "GCP", "REST APIs"]
  },
  { 
    name: 'Fintech Mobile App', 
    image: 'https://storage.googleapis.com/aai-web-samples/user-provided/600x400-b2.png', 
    hint: 'finance mobile',
    description: "A secure and intuitive fintech mobile app for managing personal finances, built with modern security practices.",
    techStack: ["Flutter", "Firebase", "Node.js"]
  },
  { 
    name: 'Home Service Platforms (Mobile App)', 
    image: 'https://storage.googleapis.com/aai-web-samples/user-provided/600x400-b4.png', 
    hint: 'home service mobile',
    description: "Platform enables consumers to easily order services, including cleaning, pest control, plumbing, carpentry, appliance servicing and repair, painting, skincare, hair grooming and massage therapy. These services are delivered by trained and independent service professionals at the consumers’ convenience.",
    techStack: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "TypeScript"]
  },
  {
    name: "Project Toolkit",
    image: "https://storage.googleapis.com/aai-web-samples/user-provided/600x400-b3.png",
    hint: "developer tools",
    description: "A comprehensive toolkit designed to streamline project management and development workflows. It includes features for task tracking, code collaboration, and automated deployments, all integrated into a single, user-friendly interface.",
    techStack: ["React", "Node.js", "GraphQL", "Docker", "Kubernetes"],
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rajat4722" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rajat-shukla586942/" },
];

const interests = [
  "Mobile (Android)",
  "Web Application",
  "Logo",
  "Poster Designing",
  "Research",
  "Photography",
];

const bioText = "I build modern, responsive, and scalable applications for both web and mobile platforms. My focus is on creating seamless user experiences powered by a diverse and robust tech stack. From crafting intuitive mobile apps with Flutter to developing powerful back-ends with Node.js, I bring a well-rounded skill set to every project.";

const gradientClasses = ["animated-gradient", "animated-gradient-2", "animated-gradient-3"];

export default function Home() {
  const [gradientIndex, setGradientIndex] = useState(0);

  const cycleGradient = () => {
    setGradientIndex((prevIndex) => (prevIndex + 1) % gradientClasses.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-1 space-y-6">
            <div
              className={cn("relative bg-card p-8 rounded-3xl h-full flex flex-col justify-between text-card-foreground overflow-hidden cursor-pointer", gradientClasses[gradientIndex])}
              onClick={cycleGradient}
            >
              <CodeIcon className="w-48 h-48 text-primary absolute -right-12 -bottom-12 opacity-10 hidden md:block animate-spin-slow" />
              <div className="z-10">
                <p className="text-sm/relaxed">{bioText}</p>
              </div>
              <div className="z-10 flex flex-wrap justify-start items-center gap-6 pt-8">
                {techIcons.map((tech, i) => (
                  <div key={tech.name} className="animate-float" style={{animationDelay: `${i * 150}ms`}}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card p-8 rounded-3xl">
              <h1 className="font-headline text-4xl md:text-5xl font-bold">
                <span className="block">Web & Mobile Developer</span>
                <span className="block text-primary">Crafting Digital Experiences</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl overflow-hidden aspect-[4/3] group relative flex items-center justify-center p-4">
                  <WorldMap />
                </div>
                <div className="bg-card p-8 rounded-3xl flex flex-col justify-between group">
                  <div className="mb-8">
                    <h3 className="font-headline text-xl font-bold mb-4">Have a project in mind?</h3>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="bg-accent hover:bg-accent text-accent-foreground font-normal text-sm py-1 px-3 rounded-full">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                   <ContactTrigger>
                    <div className="flex justify-between items-end w-full cursor-pointer">
                      <h2 className="font-headline text-4xl font-bold">Contact me</h2>
                      <ArrowUpRight className="w-8 h-8 transform group-hover:rotate-45 transition-transform" />
                    </div>
                  </ContactTrigger>
                </div>
            </div>
          </div>
          
           <div className="md:col-span-3">
             <div className="bg-card p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <ul className="space-y-4">
                      {projects.map((project) => (
                         <li key={project.name} className="border-b border-border last:border-none">
                          <ProjectsTrigger project={project}>
                            <div className="flex justify-between items-center py-4 group w-full cursor-pointer">
                              <span className="font-headline text-2xl">{project.name}</span>
                              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                          </ProjectsTrigger>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                     <ProjectCarousel projects={projects} />
                    <div className="flex items-center justify-end space-x-6 mt-4">
                      {socialLinks.map(link => (
                        <Button key={link.name} variant="link" asChild className="p-0 text-muted-foreground hover:text-foreground uppercase tracking-widest text-xs">
                          <Link href={link.href} target="_blank">{link.name}</Link>

                        </Button>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

    

    

    