import { Header, ProjectsTrigger, ContactTrigger } from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    name: 'React',
    icon: (
      <svg role="img" viewBox="0 0 113.39 101.68" className="h-10 w-10 text-primary">
        <title>React</title>
        <g fill="currentColor">
          <ellipse stroke="currentColor" strokeWidth="4" ry="45.34" rx="10.82" cy="50.84" cx="56.69" transform="rotate(60 56.69 50.84)"></ellipse>
          <ellipse stroke="currentColor" strokeWidth="4" ry="45.34" rx="10.82" cy="50.84" cx="56.69" transform="rotate(120 56.69 50.84)"></ellipse>
          <ellipse stroke="currentColor" strokeWidth="4" ry="45.34" rx="10.82" cy="50.84" cx="56.69"></ellipse>
          <circle fill="#000" r="10.27" cy="50.84" cx="56.69"></circle>
        </g>
      </svg>
    ),
    delay: 'animation-delay-0'
  },
  {
    name: 'Next.js',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Next.js</title>
        <path d="M13.792 2.304a2.25 2.25 0 0 0-3.584 0L1.76 17.518a2.25 2.25 0 0 0 1.792 3.545h8.483c.35 0 .688-.173.896-.464l7.103-10.022a2.25 2.25 0 0 0-1.792-3.545H10.15l3.642-5.728ZM8.415 12.75h4.928l-2.464 3.75h-4.93l2.466-3.75Z"></path>
      </svg>
    ),
    delay: 'animation-delay-200'
  },
  {
    name: 'Node.js',
    icon: (
       <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Node.js</title>
        <path d="M11.72 17.75c-.23.4-.64.65-1.1.65H8.28c-.69 0-1.25-.56-1.25-1.25V7.75c0-.69.56-1.25 1.25-1.25h2.2c.54 0 1.01.32 1.2.78l3.12 7.51c.21.5.03 1.08-.43 1.34l-1.07.59c-.46.26-1.04.14-1.35-.27L11.72 17.75zM19.11 6.5h-2.2c-.69 0-1.25.56-1.25 1.25v8.41c0 .69.56 1.25 1.25 1.25h2.2c.69 0 1.25-.56 1.25-1.25V7.75c0-.69-.56-1.25-1.25-1.25z"></path>
      </svg>
    ),
    delay: 'animation-delay-400'
  },
  {
    name: 'Firebase',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <title>Firebase</title>
        <path d="M4.33 21.37l1.43-1.43L4.33 18.51l-1.43 1.43 1.43 1.43zM18.24 3.08l-9.1 5.25L12 11.25l7.1-4.1-1.12-6.52a.38.38 0 0 0-.24-.25l-2.5-.5zM3.4 17.07L12 4.69l-2.87-1.66L2.27 15.4l1.13 1.67zM18.8 19.9l-5.66-10.3-2.86-1.64-5.94 10.3 5.3 3.06 9.16-5.28.01.01 2.87 1.66-2.88 1.66z"></path>
      </svg>
    ),
    delay: 'animation-delay-600'
  },
];


const projects = [
  { name: 'E-Commerce Platform', image: 'https://placehold.co/600x400.png', hint: 'online shopping' },
  { name: 'Task Management App', image: 'https://placehold.co/600x400.png', hint: 'mobile application' },
  { name: 'Portfolio Website', image: 'https://placehold.co/600x400.png', hint: 'personal portfolio' },
  { name: 'Social Media Dashboard', image: 'https://placehold.co/600x400.png', hint: 'analytics dashboard' },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rajat4722" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rajat-shukla586942/" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-3xl font-bold">Expertise</h2>
                 <p className="text-sm/relaxed text-muted-foreground mt-2">
                  I build modern, responsive, and scalable applications for web and mobile, tailored to your needs.
                </p>
              </div>
              <div className="flex justify-around items-center pt-8">
                {techIcons.map((tech, i) => (
                  <div key={tech.name} className={`animate-float ${tech.delay}`} style={{animationDelay: `${i * 200}ms`}}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card p-8 rounded-3xl relative">
              <CodeIcon className="w-16 h-16 text-primary absolute top-8 right-8 opacity-30" />
              <h1 className="font-headline text-5xl md:text-6xl font-bold max-w-xl">
                Web & Mobile Developer Crafting Digital Experiences
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://placehold.co/600x800.png"
                    alt="RAJAT SHUKLA"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint="man developer"
                  />
                </div>
                <div className="bg-primary hover:bg-accent transition-colors text-primary-foreground p-8 rounded-3xl flex flex-col justify-between group">
                  <div>
                    <p className="text-sm">Have a project in mind?</p>
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
                    {projects.map((project, index) => (
                       <li key={project.name} className="border-b border-border last:border-none">
                        <ProjectsTrigger>
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
                    <div className="rounded-3xl overflow-hidden aspect-video relative">
                      <Image 
                        src={projects[0].image}
                        alt={projects[0].name}
                        fill
                        className="object-cover"
                        data-ai-hint={projects[0].hint}
                      />
                    </div>
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
