import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { UserSchema } from '../schema/UserSchema';
import zod from 'zod'

class UserController {
  // S'inscrire
  static async register(req: Request, res: Response) {
    try {
      const { nom, prenom, adress, contact, email, password } = UserSchema.parse(req.body);

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà' });
      }

     
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ nom, prenom, adress, contact, email, password: hashedPassword });

      const token = jwt.sign({ userId: newUser.id }, 'votre_clé_secrète', { expiresIn: '1h' });

      res.status(201).json({ user: newUser, token });
    } catch (error:any) {
      if (error instanceof zod.ZodError) {
        return res.status(400).json({ message: 'Données d\'entrée non valides', errors: error.errors });
      }
      res.status(400).json({ message: error.message });
    }
  }

  // Se connecter
  static async login(req: Request, res: Response) {
    try {
    
      const { email, password } = UserSchema.parse(req.body);
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
      }

      const token = jwt.sign({ userId: user.id }, '1234', { expiresIn: '1h' });

      res.json({ user, token });
    } catch (error:any) {
      if (error instanceof zod.ZodError) {
        return res.status(400).json({ message: 'Données d\'entrée non valides', errors: error.errors });
      }
      res.status(400).json({ message: error.message });
    }
  }

  // Information de l'utilisateur en cours
  static async getUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = User.findByPk(id)
  
      if (user){
        res.json(user)
      } else {
        res.status(404).json({message: "Aucun utilisateur non trouvé."})
      }
      
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    } 
  }

}

export default UserController;
