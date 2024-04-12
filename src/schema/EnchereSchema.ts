import { object,  number,date } from 'zod';

export const EnchereSchema = object({
  userId: number(),
  sessionId: number(),
});
