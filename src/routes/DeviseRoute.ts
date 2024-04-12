// deviseRoutes.ts
import express from 'express';
import DeviseController from '../controllers/DeviseController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.get('/devises', jwtMiddleware, DeviseController.getAllDevises);

router.get('/devises/:id', jwtMiddleware, DeviseController.getDeviseById);

router.post('/devises', jwtMiddleware, DeviseController.createDevise);

router.put('/devises/:id', jwtMiddleware, DeviseController.updateDevise);

router.delete('/devises/:id', jwtMiddleware, DeviseController.deleteDevise);

router.get('/devises/with-cours-de-change', jwtMiddleware, DeviseController.getAllWithCoursDeChange)
export default router;
