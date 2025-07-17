import { Header, ProjectsTrigger, ContactTrigger } from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
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


const projects = [
  { name: 'E-Commerce Platform', image: 'https://placehold.co/600x400.png', hint: 'online shopping' },
  { name: 'Task Management App', image: 'https://placehold.co/600x400.png', hint: 'mobile application' },
  { name: 'Portfolio Website', image: 'https://placehold.co/600x400.png', hint: 'personal portfolio' },
  { name: 'Social Media Dashboard', image: 'https://placehold.co/600x400.png', hint: 'analytics dashboard' },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rajat4722", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rajat-shukla586942/", icon: Linkedin },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <CodeIcon className="w-10 h-10 text-primary self-start opacity-50" />
              <p className="text-sm/relaxed">
                Hi, I'm John Doe. A passionate developer based in San Francisco, creating beautiful and functional web and mobile applications that solve real-world problems.
              </p>
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
                    alt="John Doe"
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
