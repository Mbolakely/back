// SessionController.ts
import { Request, Response } from 'express';
import {Session} from '../models/models';

class SessionController {
  
  static async getAllSessions(req: Request, res: Response) {
    try {
      const Sessions = await Session.findAll();
      res.json(Sessions);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }


  static async getSessionById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const session = await Session.findByPk(id);
      if (session) {
        res.json(session);
      } else {
        res.status(404).json({ message: 'Session non trouvée' });
      }
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createSession(req: Request, res: Response) {
    const { date, duree, productId } = req.body;
    try {
      const session = await Session.create({date, duree, productId });
      res.status(201).json(session);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateSession(req: Request, res: Response) {
    const { id } = req.params;
    const { date, duree, productId } = req.body;
    try {
      const session = await Session.findByPk(id);
      if (session) {
        session.date = date;
        session.duree = duree;
        session.productId = productId;
        await session.save();
        res.json(session);
      } else {
        res.status(404).json({ message: 'Session non trouvée' });
      }
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteSession(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Vérifiez d'abord si la Session existe
      const session = await Session.findByPk(id);
      if (!session) {
        return res.status(404).json({ message: 'La session avec l\'ID spécifié n\'a pas été trouvée.' });
      }

      // Supprimez la session
      await session.destroy();

      // Réponse réussie
      res.status(204).send(); // Réponse 204 No Content si réussie
    } catch (error:any) {
      console.error('Erreur lors de la suppression de la session:', error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la session' });
    }
  }
}

export default SessionController;
