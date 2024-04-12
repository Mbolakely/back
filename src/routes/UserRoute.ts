
import express from 'express';
import UserController from '../controllers/UserController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.get('/user/get/:id', jwtMiddleware, UserController.getUser);


export default router;
