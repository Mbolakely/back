import { Request, Response } from 'express';
import Enchere from '../models/Enchere';
import User from '../models/User';

class EnchereController {

  // Information de l'utilisateur en cours
  static async getUserSessions(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await User.findOne({
        where: { id: id }
      })
      
      if (user){
        const sessions = await User.getSession();
        res.json(sessions)
      } else {
        res.status(404).json({message: "Aucun utilisateur non trouvé."})
      }
      
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    } 
  }

  static async createUserSession(req: Request, res: Response) {
    const {userId, sessionId} = req.params

    try {
      const enchere = await Enchere.create({
        userId: userId,
        sessionId: sessionId
      })
      
      res.status(201).json(enchere)

    } catch (error) {
      console.error('Error associating User and Session:', error);
    }
  }
 
  static async deleteEnchere(req: Request, res: Response) {
    const { userId, sessionId } = req.params;
    try {
      const enchere = await Enchere.findOne({
        where: {
          userdId: userId,
          sessionId: sessionId
        }
      });

      if (enchere) {
        await enchere.destroy();
        res.json({ message: 'Session d\'enchere supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Session d\' non trouvé' });
      }
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default EnchereController;
