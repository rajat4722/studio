'use server';

/**
 * @fileOverview AI-powered tool to rewrite artist bios in different tones.
 *
 * - rewriteArtistBio - A function that handles the bio rewriting process.
 * - RewriteArtistBioInput - The input type for the rewriteArtistBio function.
 * - RewriteArtistBioOutput - The return type for the rewriteArtistBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteArtistBioInputSchema = z.object({
  bio: z.string().describe('The original artist bio.'),
  tone: z
    .string()
    .describe(
      'The desired tone for the rewritten bio (e.g., professional, casual, humorous).'
    ),
});
export type RewriteArtistBioInput = z.infer<typeof RewriteArtistBioInputSchema>;

const RewriteArtistBioOutputSchema = z.object({
  rewrittenBio: z.string().describe('The rewritten artist bio in the specified tone.'),
});
export type RewriteArtistBioOutput = z.infer<typeof RewriteArtistBioOutputSchema>;

export async function rewriteArtistBio(input: RewriteArtistBioInput): Promise<RewriteArtistBioOutput> {
  return rewriteArtistBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteArtistBioPrompt',
  input: {schema: RewriteArtistBioInputSchema},
  output: {schema: RewriteArtistBioOutputSchema},
  prompt: `You are an AI assistant specializing in rewriting artist bios to suit different contexts.

  Given the original artist bio and the desired tone, rewrite the bio accordingly.

  Original Bio: {{{bio}}}
  Desired Tone: {{{tone}}}
  
  Rewritten Bio:`, // The model should generate the rewritten bio here
});

const rewriteArtistBioFlow = ai.defineFlow(
  {
    name: 'rewriteArtistBioFlow',
    inputSchema: RewriteArtistBioInputSchema,
    outputSchema: RewriteArtistBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
