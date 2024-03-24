const express = require('express');
import VenteController from '../controllers/VenteController';

const router = express.Router();

router.post('/ventes', VenteController.addVente);

router.get('/ventes', VenteController.getAllVentes);

router.get('/ventes/:id', VenteController.getVente);

router.put('/ventes/:id', VenteController.updateVente);

router.delete('/ventes/:id', VenteController.deleteVente);

export default router;
