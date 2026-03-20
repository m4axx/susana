'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating a concise summary of a blog post.
 *
 * - summarizeBlogPost - A function that handles the blog post summarization process.
 * - AiGeneratedBlogPostSummaryInput - The input type for the summarizeBlogPost function.
 * - AiGeneratedBlogPostSummaryOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiGeneratedBlogPostSummaryInputSchema = z.object({
  blogPostContent: z.string().describe('The full content of the blog post to be summarized.'),
});
export type AiGeneratedBlogPostSummaryInput = z.infer<typeof AiGeneratedBlogPostSummaryInputSchema>;

const AiGeneratedBlogPostSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog post.'),
});
export type AiGeneratedBlogPostSummaryOutput = z.infer<typeof AiGeneratedBlogPostSummaryOutputSchema>;

export async function summarizeBlogPost(
  input: AiGeneratedBlogPostSummaryInput
): Promise<AiGeneratedBlogPostSummaryOutput> {
  return aiGeneratedBlogPostSummaryFlow(input);
}

const summarizeBlogPostPrompt = ai.definePrompt({
  name: 'summarizeBlogPostPrompt',
  input: {schema: AiGeneratedBlogPostSummaryInputSchema},
  output: {schema: AiGeneratedBlogPostSummaryOutputSchema},
  prompt: `Please provide a concise, one-paragraph summary of the following blog post content.
Focus on the main topic and key takeaways, aiming for about 3-5 sentences.

Blog Post Content:
---
{{{blogPostContent}}}
---

Summary:`,
});

const aiGeneratedBlogPostSummaryFlow = ai.defineFlow(
  {
    name: 'aiGeneratedBlogPostSummaryFlow',
    inputSchema: AiGeneratedBlogPostSummaryInputSchema,
    outputSchema: AiGeneratedBlogPostSummaryOutputSchema,
  },
  async input => {
    const {output} = await summarizeBlogPostPrompt(input);
    if (!output) {
      throw new Error('Failed to generate blog post summary.');
    }
    return output;
  }
);
