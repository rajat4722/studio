import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FlowerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 0C50 0 50 50 25 50C0 50 0 100 0 100C0 100 50 100 50 75C50 50 50 50 50 50Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M100 50C100 50 50 50 50 25C50 0 0 0 0 0C0 0 0 50 25 50C50 50 50 50 50 50Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 100C50 100 50 50 75 50C100 50 100 0 100 0C100 0 50 0 50 25C50 50 50 50 50 50Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M0 50C0 50 50 50 50 75C50 100 100 100 100 100C100 100 100 50 75 50C50 50 50 50 50 50Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M35.5 35.5C35.5 35.5 50 25 64.5 35.5C79 46 79 64.5 64.5 64.5C50 64.5 35.5 79 35.5 64.5C35.5 50 21 50 35.5 35.5Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const projects = [
  { name: 'Musea', image: 'https://placehold.co/600x400.png', hint: 'pink chair' },
  { name: 'Elara' },
  { name: 'Verve' },
  { name: 'Zephyr' },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: null },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <FlowerIcon className="w-10 h-10 text-primary self-start opacity-50" />
              <p className="text-sm/relaxed">
                Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card p-8 rounded-3xl relative">
              <FlowerIcon className="w-16 h-16 text-primary absolute top-8 right-8 opacity-30" />
              <h1 className="font-headline text-5xl md:text-6xl font-bold max-w-md">
                Artist Redefining Architecture with AI-Driven Design
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://placehold.co/600x800.png"
                    alt="Julia Huang"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint="pink hair"
                  />
                </div>
                <Link href="#contact" className="bg-primary hover:bg-accent transition-colors text-primary-foreground p-8 rounded-3xl flex flex-col justify-between group">
                  <div>
                    <p className="text-sm">Have some questions?</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <h2 className="font-headline text-4xl font-bold">Contact me</h2>
                    <ArrowUpRight className="w-8 h-8 transform group-hover:rotate-45 transition-transform" />
                  </div>
                </Link>
            </div>
          </div>

          <div className="md:col-span-3">
             <div className="bg-card p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <ul className="space-y-4">
                    {projects.map((project, index) => (
                      <li key={project.name} className="border-b border-border last:border-none">
                        <Link href="#" className="flex justify-between items-center py-4 group">
                          <span className="font-headline text-2xl">{project.name}</span>
                          <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </Link>
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
                        <Link href={link.href}>{link.name}</Link>
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
