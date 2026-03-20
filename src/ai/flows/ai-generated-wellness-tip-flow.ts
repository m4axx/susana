'use server';
/**
 * @fileOverview A Genkit flow for generating short, inspiring beauty or wellness tips.
 *
 * - generateWellnessTip - A function that generates a beauty or wellness tip.
 * - AiGeneratedWellnessTipInput - The input type for the generateWellnessTip function.
 * - AiGeneratedWellnessTipOutput - The return type for the generateWellnessTip function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiGeneratedWellnessTipInputSchema = z
  .object({})
  .describe('Input schema for generating a wellness tip.');
export type AiGeneratedWellnessTipInput = z.infer<
  typeof AiGeneratedWellnessTipInputSchema
>;

const AiGeneratedWellnessTipOutputSchema = z.object({
  tip: z
    .string()
    .describe('A short, inspiring beauty or wellness tip related to conscious beauty and personal care.'),
});
export type AiGeneratedWellnessTipOutput = z.infer<
  typeof AiGeneratedWellnessTipOutputSchema
>;

export async function generateWellnessTip(
  input: AiGeneratedWellnessTipInput
): Promise<AiGeneratedWellnessTipOutput> {
  return aiGeneratedWellnessTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGeneratedWellnessTipPrompt',
  input: { schema: AiGeneratedWellnessTipInputSchema },
  output: { schema: AiGeneratedWellnessTipOutputSchema },
  prompt: `Generate a short, inspiring beauty or wellness tip (under 20 words) focused on conscious beauty, natural care, health, or personal well-being. The tone should be calm, confident, and professional.

Example: "Nourish your skin from within by staying hydrated and embracing natural, gentle care for a radiant glow."

Now generate a new tip.`,
});

const aiGeneratedWellnessTipFlow = ai.defineFlow(
  {
    name: 'aiGeneratedWellnessTipFlow',
    inputSchema: AiGeneratedWellnessTipInputSchema,
    outputSchema: AiGeneratedWellnessTipOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
