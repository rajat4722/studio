"use client";

import { useState, useTransition } from "react";
import { rewriteArtistBio, RewriteArtistBioInput } from "@/ai/flows/rewrite-artist-bio";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

type BioRewriterProps = {
  initialBio: string;
};

export default function BioRewriter({ initialBio }: BioRewriterProps) {
  const [isPending, startTransition] = useTransition();
  const [bio, setBio] = useState(initialBio);
  const [tone, setTone] = useState("professional");
  const [rewrittenBio, setRewrittenBio] = useState("");
  const { toast } = useToast();

  const handleRewrite = async () => {
    if (!bio.trim()) {
      toast({
        title: "Error",
        description: "Bio cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        const input: RewriteArtistBioInput = { bio, tone };
        const result = await rewriteArtistBio(input);
        setRewrittenBio(result.rewrittenBio);
      } catch (error) {
        console.error("Failed to rewrite bio:", error);
        toast({
          title: "Error",
          description: "Failed to rewrite bio. Please try again.",
          variant: "destructive",
        });
        setRewrittenBio("");
      }
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(rewrittenBio);
    toast({
      title: "Copied!",
      description: "The rewritten bio has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bio-input">Original Bio</Label>
        <Textarea
          id="bio-input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={6}
          placeholder="Enter the bio you want to rewrite..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tone-select">Choose a Tone</Label>
        <Select value={tone} onValueChange={setTone}>
          <SelectTrigger id="tone-select">
            <SelectValue placeholder="Select a tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="casual">Casual</SelectItem>
            <SelectItem value="humorous">Humorous</SelectItem>
            <SelectItem value="witty">Witty</SelectItem>
            <SelectItem value="poetic">Poetic</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleRewrite} disabled={isPending} className="w-full">
        {isPending ? "Rewriting..." : "Rewrite with AI"}
        {!isPending && <Wand2 className="ml-2 h-4 w-4" />}
      </Button>

      {isPending && (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {rewrittenBio && !isPending && (
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Rewritten Bio</span>
              <Button variant="ghost" size="icon" onClick={handleCopyToClipboard}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </CardTitle>
            <CardDescription>Tone: {tone.charAt(0).toUpperCase() + tone.slice(1)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/90">{rewrittenBio}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
