'use server';
/**
 * @fileOverview This file implements a Genkit flow where JELA, the technology bird-of-paradise mascot,
 * acts as an intelligent tutor to provide clear and easy-to-understand explanations for students
 * regarding Media and Jaringan Telekomunikasi concepts.
 *
 * - jelaAITutorExplainer - The main function to request an explanation from JELA.
 * - JelaAITutorExplainerInput - The input type for the jelaAITutorExplainer function.
 * - JelaAITutorExplainerOutput - The return type for the jelaAITutorExplainer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JelaAITutorExplainerInputSchema = z
  .object({
    question: z
      .string()
      .describe(
        'The student\'s question about Media and Jaringan Telekomunikasi terms or concepts.'
      ),
  })
  .describe('Input schema for JELA AI Tutor Explainer.');
export type JelaAITutorExplainerInput = z.infer<
  typeof JelaAITutorExplainerInputSchema
>;

const JelaAITutorExplainerOutputSchema = z
  .object({
    explanation: z
      .string()
      .describe('JELA\'s clear and easy-to-understand explanation.'),
  })
  .describe('Output schema for JELA AI Tutor Explainer.');
export type JelaAITutorExplainerOutput = z.infer<
  typeof JelaAITutorExplainerOutputSchema
>;

export async function jelaAITutorExplainer(
  input: JelaAITutorExplainerInput
): Promise<JelaAITutorExplainerOutput> {
  return jelaAITutorExplainerFlow(input);
}

const jelaAITutorExplainerPrompt = ai.definePrompt({
  name: 'jelaAITutorExplainerPrompt',
  input: {schema: JelaAITutorExplainerInputSchema},
  output: {schema: JelaAITutorExplainerOutputSchema},
  prompt: `Anda adalah JELA, seekor Burung Cendrawasih Teknologi, dan maskot utama aplikasi JELANTARA.
Anda adalah pakar dalam Media dan Jaringan Telekomunikasi, serta seorang pemandu belajar yang ramah dan memotivasi untuk siswa SMK kelas X TJKT.

Tugas Anda adalah memberikan penjelasan yang jelas, mudah dipahami, singkat, dan relevan untuk siswa SMK mengenai istilah atau konsep yang mereka tanyakan. Gunakan bahasa yang sederhana dan hindari jargon yang terlalu teknis jika tidak dijelaskan.

Pertanyaan siswa: {{{question}}}

Berikan penjelasan Anda:
`,
});

const jelaAITutorExplainerFlow = ai.defineFlow(
  {
    name: 'jelaAITutorExplainerFlow',
    inputSchema: JelaAITutorExplainerInputSchema,
    outputSchema: JelaAITutorExplainerOutputSchema,
  },
  async (input) => {
    const {output} = await jelaAITutorExplainerPrompt(input);
    if (!output) {
      throw new Error('Failed to get explanation from JELA.');
    }
    return output;
  }
);
