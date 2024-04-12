import { object, string, number, date, boolean } from 'zod';

export const SessionSchema = object({
  date: date(),
  duree: number(), // in minute
  productId: number(),
  active: boolean(),
});
