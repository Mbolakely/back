// DeviseController.ts
import { Request, Response } from 'express';
import Devise from '../models/Devise';
import CoursDeChange from '../models/CoursDeChange';

class DeviseController {
  
  static async getAllDevises(req: Request, res: Response) {
    try {
      const devises = await Devise.findAll();
      res.json(devises);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAllWithCoursDeChange(req: Request, res: Response) {
    try {
      const devises = await Devise.findAll({
        include: {
          model: CoursDeChange
        }, 
      });
      return res.json(devises);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getDeviseById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const devise = await Devise.findByPk(id);
      if (devise) {
        res.json(devise);
      } else {
        res.status(404).json({ message: 'Devise non trouvée' });
      }
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createDevise(req: Request, res: Response) {
    const { nom, code, taux } = req.body;
    try {
      const nouvelleDevise = await Devise.create({ nom, code, taux });
      res.status(201).json(nouvelleDevise);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateDevise(req: Request, res: Response) {
    const { id } = req.params;
    const { nom, code, taux } = req.body;
    try {
      const devise = await Devise.findByPk(id);
      if (devise) {
        devise.nom = nom;
        devise.code = code;
        devise.taux = taux;
        await devise.save();
        res.json(devise);
      } else {
        res.status(404).json({ message: 'Devise non trouvée' });
      }
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteDevise(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Vérifiez d'abord si la devise existe
      const devise = await Devise.findByPk(id);
      if (!devise) {
        return res.status(404).json({ message: 'La devise avec l\'ID spécifié n\'a pas été trouvée.' });
      }

      // Supprimez la devise
      await devise.destroy();

      // Réponse réussie
      res.status(204).send(); // Réponse 204 No Content si réussie
    } catch (error:any) {
      console.error('Erreur lors de la suppression de la devise:', error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la devise' });
    }
  }
}

export default DeviseController;
