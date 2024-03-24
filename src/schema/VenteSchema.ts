import { object, number, string } from 'zod';

export const VenteSchema = object({
  numProduit: number(),
  design: string(),
  prix: number(),
  quantite: number(),
});
