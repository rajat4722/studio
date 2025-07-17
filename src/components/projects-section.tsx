import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Project Alpha",
    description: "An interactive web experience.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract digital",
    tags: ["Web", "Interactive"],
  },
  {
    title: "Project Beta",
    description: "Generative art series.",
    image: "https://placehold.co/600x400.png",
    hint: "generative art",
    tags: ["Art", "Processing"],
  },
  {
    title: "Project Gamma",
    description: "Mobile application design.",
    image: "https://placehold.co/600x400.png",
    hint: "app design",
    tags: ["UI/UX", "Mobile"],
  },
  {
    title: "Project Delta",
    description: "3D modelling and animation.",
    image: "https://placehold.co/600x400.png",
    hint: "3d model",
    tags: ["3D", "Animation"],
  },
  {
    title: "Project Epsilon",
    description: "Brand identity for a tech startup.",
    image: "https://placehold.co/600x400.png",
    hint: "brand identity",
    tags: ["Branding", "Design"],
  },
  {
    title: "Project Zeta",
    description: "Data visualization project.",
    image: "https://placehold.co/600x400.png",
    hint: "data visualization",
    tags: ["Data", "Web"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work, showcasing a blend of creativity and technical skill.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold font-headline text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
