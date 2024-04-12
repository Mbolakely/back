
import express from 'express';
import RegistrationController from '../controllers/RegistrationController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.post('/register', RegistrationController.register);

router.post('/login', RegistrationController.login);

router.get('/user/get/:id', jwtMiddleware, RegistrationController.getUser);


export default router;
