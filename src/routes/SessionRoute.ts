// SessionRoutes.ts
import express from 'express';
import SessionController from '../controllers/SessionController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.get('/sessions', jwtMiddleware, SessionController.getAllSessions);

router.get('/sessions/:id', jwtMiddleware, SessionController.getSessionById);

router.post('/sessions', jwtMiddleware, SessionController.createSession);

router.put('/sessions/:id', jwtMiddleware, SessionController.updateSession);

router.delete('/sessions/:id', jwtMiddleware, SessionController.deleteSession);

export default router;
