import { object,  number,date } from 'zod';

export const CoursDeChangeSchema = object({
  deviseId: number(),
  tauxChange: number(),
  date: date()
});
