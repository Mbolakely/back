import { Request, Response } from 'express';
import Vente from '../models/Vente';
import { VenteSchema } from '../schema/VenteSchema';

class VenteController {

  public async addVente(req: Request, res: Response): Promise<void> {
    try {
      const { numProduit, design, prix, quantite } = VenteSchema.parse(req.body);
      const vente = await Vente.create({ numProduit, design, prix, quantite });
      res.status(201).json(vente);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  }

  public async getAllVentes(req: Request, res: Response): Promise<void> {
    try {
      const ventes = await Vente.findAll();
      res.status(200).json(ventes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async getVente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const vente = await Vente.findByPk(id);
      if (!vente) {
        res.status(404).json({ error: 'Vente not found' });
        return;
      }
      res.status(200).json(vente);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async updateVente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { numProduit, design, prix, quantite } = VenteSchema.parse(req.body);
      const vente = await Vente.findByPk(id);
      if (!vente) {
        res.status(404).json({ error: 'Vente not found' });
        return;
      }
      await vente.update({ numProduit, design, prix, quantite });
      res.status(200).json(vente);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  }

  public async deleteVente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const vente = await Vente.findByPk(id);
      if (!vente) {
        res.status(404).json({ error: 'Vente not found' });
        return;
      }
      await vente.destroy();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new VenteController();
