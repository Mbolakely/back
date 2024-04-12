// deviseRoutes.ts
import express from 'express';
import DeviseController from '../controllers/DeviseController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();
router.use(jwtMiddleware)

router.get('/devises', DeviseController.getAllDevises);

router.get('/devises/:id', DeviseController.getDeviseById);

router.post('/devises', DeviseController.createDevise);

router.put('/devises/:id', DeviseController.updateDevise);

router.delete('/devises/:id', DeviseController.deleteDevise);

router.get('/devises/with-cours-de-change', DeviseController.getAllWithCoursDeChange)
export default router;
