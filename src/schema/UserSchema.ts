import { boolean, object, string } from 'zod';

export const UserSchema = object({
  nom: string().max(150),
  prenom: string().max(100),
  adress: string(),
  contact: string().max(12),
  email: string().email(),
  password: string().min(6),
  isAdmin: boolean().default(false)
});
