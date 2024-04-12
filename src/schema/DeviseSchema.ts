import { object, string, number } from 'zod';

export const DeviseSchema = object({
  nom: string(),
  code: string(),
  taux: number(),
});
