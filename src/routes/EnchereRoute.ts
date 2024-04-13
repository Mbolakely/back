import express from 'express';
import EnchereController from '../controllers/EnchereController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.get('/enchere/:id', jwtMiddleware, EnchereController.getUserSessions);

router.get('/enchere/:userId/:sessionId', jwtMiddleware, EnchereController.createUserSession);

router.post('/enchere/:userId/:sessionId', jwtMiddleware, EnchereController.deleteEnchere);


export default router;
