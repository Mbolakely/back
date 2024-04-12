import { Request, Response } from 'express';
import CoursDeChange from '../models/CoursDeChange';
import { any } from 'zod';
import Devise from '../models/Devise';

class CoursDeChangeController {

  static async getAllCoursDeChange(req: Request, res: Response) {
    try {
      const coursDeChange = await CoursDeChange.findAll();
      res.json(coursDeChange);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getCoursDeChangeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const coursDeChange = await CoursDeChange.findByPk(id);
      if (coursDeChange) {
        res.json(coursDeChange);
      } else {
        res.status(404).json({ message: 'Cours de change non trouvé' });
      }
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createCoursDeChange(req: Request, res: Response) {
    const { deviseId, tauxChange } = req.body;
    try {
      const nouveauCoursDeChange = await CoursDeChange.create({ deviseId, tauxChange });
      res.status(201).json(nouveauCoursDeChange);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateCoursDeChange(req: Request, res: Response) {
    const { id } = req.params;
    const { deviseId, tauxChange } = req.body;
    try {
      const coursDeChange = await CoursDeChange.findByPk(id);
      if (coursDeChange) {
        coursDeChange.deviseId = deviseId;
        coursDeChange.tauxChange = tauxChange;
        await coursDeChange.save();
        res.json(coursDeChange);
      } else {
        res.status(404).json({ message: 'Cours de change non trouvé' });
      }
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getDeviseByCoursDeChangeId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const coursDeChange = await CoursDeChange.findByPk(id);
      if (!coursDeChange) {
        return res.status(404).json({ message: 'Cours de change not found' });
      }
      const devise = await Devise.findByPk(coursDeChange.deviseId);
      if (!devise) {
        return res.status(404).json({ message: 'Devise not found' });
      }
      return res.json(devise);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async deleteCoursDeChange(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const coursDeChange = await CoursDeChange.findByPk(id);
      if (coursDeChange) {
        await coursDeChange.destroy();
        res.json({ message: 'Cours de change supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Cours de change non trouvé' });
      }
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default CoursDeChangeController;
