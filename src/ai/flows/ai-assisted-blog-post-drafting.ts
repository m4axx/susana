
'use server';
/**
 * @fileOverview A Genkit flow for generating draft content for blog posts.
 *
 * - aiAssistedBlogPostDrafting - A function that generates a blog post draft based on a given topic.
 * - BlogPostDraftInput - The input type for the aiAssistedBlogPostDrafting function.
 * - BlogPostDraftOutput - The return type for the aiAssistedBlogPostDrafting function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BlogPostDraftInputSchema = z.object({
  topic: z
    .string()
    .describe('The main topic or keywords for the blog post.'),
});
export type BlogPostDraftInput = z.infer<typeof BlogPostDraftInputSchema>;

const BlogPostDraftOutputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z
    .string()
    .describe('The full content of the blog post, formatted as markdown.'),
});
export type BlogPostDraftOutput = z.infer<typeof BlogPostDraftOutputSchema>;

export async function aiAssistedBlogPostDrafting(
  input: BlogPostDraftInput
): Promise<BlogPostDraftOutput> {
  return aiAssistedBlogPostDraftingFlow(input);
}

const blogPostDraftPrompt = ai.definePrompt({
  name: 'blogPostDraftPrompt',
  input: { schema: BlogPostDraftInputSchema },
  output: { schema: BlogPostDraftOutputSchema },
  prompt: `You are a professional blog post writer for "Palmira Garde", a brand focused on natural beauty, wellness, health, and personal care. Your writing style is elegant, minimal, modern, and conveys a sense of calm, confidence, closeness, and professionalism.

Your task is to generate a blog post draft based on the following topic or keywords. The output should include a catchy title and the full content of the blog post, formatted in markdown.

Topic: {{{topic}}}`,
});

const aiAssistedBlogPostDraftingFlow = ai.defineFlow(
  {
    name: 'aiAssistedBlogPostDraftingFlow',
    inputSchema: BlogPostDraftInputSchema,
    outputSchema: BlogPostDraftOutputSchema,
  },
  async (input) => {
    const { output } = await blogPostDraftPrompt(input);
    if (!output) {
      throw new Error('Failed to generate blog post draft.');
    }
    return output;
  }
);
