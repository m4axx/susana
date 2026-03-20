'use server';
/**
 * @fileOverview A Genkit flow for generating SEO-optimized titles and meta descriptions for blog posts.
 *
 * - generateSeoMetadata - A function that handles the SEO metadata generation process.
 * - GenerateSeoMetadataInput - The input type for the generateSeoMetadata function.
 * - GenerateSeoMetadataOutput - The return type for the generateSeoMetadata function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoMetadataInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The full content of the blog post for which to generate SEO metadata.'),
});
export type GenerateSeoMetadataInput = z.infer<typeof GenerateSeoMetadataInputSchema>;

const GenerateSeoMetadataOutputSchema = z.object({
  seoTitle: z
    .string()
    .max(60)
    .describe('An SEO-optimized title for the blog post (max 60 characters).'),
  metaDescription: z
    .string()
    .max(160)
    .describe(
      'An SEO-optimized meta description for the blog post (max 160 characters).' 
    ),
});
export type GenerateSeoMetadataOutput = z.infer<typeof GenerateSeoMetadataOutputSchema>;

export async function generateSeoMetadata(
  input: GenerateSeoMetadataInput
): Promise<GenerateSeoMetadataOutput> {
  return generateSeoMetadataFlow(input);
}

const generateSeoMetadataPrompt = ai.definePrompt({
  name: 'generateSeoMetadataPrompt',
  input: {schema: GenerateSeoMetadataInputSchema},
  output: {schema: GenerateSeoMetadataOutputSchema},
  prompt: `You are an expert SEO specialist. Your task is to generate an SEO-optimized title and a meta description for a given blog post.

The title should be concise, compelling, and no more than 60 characters long.
The meta description should be informative, engaging, and no more than 160 characters long.
Both should accurately reflect the content of the blog post and include relevant keywords.

Blog Post Content: {{{blogPostContent}}}`,
});

const generateSeoMetadataFlow = ai.defineFlow(
  {
    name: 'generateSeoMetadataFlow',
    inputSchema: GenerateSeoMetadataInputSchema,
    outputSchema: GenerateSeoMetadataOutputSchema,
  },
  async (input) => {
    const {output} = await generateSeoMetadataPrompt(input);
    return output!;
  }
);
