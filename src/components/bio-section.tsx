import Image from "next/image";
import BioRewriter from "./bio-rewriter";
import { Card, CardContent } from "./ui/card";

export default function BioSection() {
  const defaultBio = `Alex Doe is a multidisciplinary digital artist and creative developer with a passion for the intersection of art and technology. With a background in both fine arts and computer science, Alex brings a unique perspective to every project, blending aesthetic sensibilities with technical expertise.

Over the past decade, Alex has worked with a diverse range of clients, from startups to established brands, creating engaging websites, interactive installations, and captivating visual content. The work is characterized by clean design, fluid user experiences, and a touch of the unexpected. When not coding or creating, Alex enjoys exploring nature and seeking inspiration in the world around us.`;

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Alex Doe"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint="artist portrait"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {defaultBio}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Rewrite My Bio with AI</h3>
            <Card>
              <CardContent className="p-6">
                <BioRewriter initialBio={defaultBio} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
