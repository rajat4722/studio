import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full h-[calc(100vh-4rem)] flex items-center justify-center text-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Alex Doe
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-headline">
            Digital Artist & Creative Developer
          </p>
          <p className="max-w-[600px] text-muted-foreground text-base mx-auto">
            Crafting immersive digital experiences where art meets technology. I specialize in turning ideas into vibrant, interactive realities.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="font-bold">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
