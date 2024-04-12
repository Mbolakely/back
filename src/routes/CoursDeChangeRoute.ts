const express = require('express');
import CoursDeChangeController from '../controllers/CoursDeChangeController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();

router.get('/cours-de-change', jwtMiddleware, CoursDeChangeController.getAllCoursDeChange);

router.get('/cours-de-change/:id', jwtMiddleware, CoursDeChangeController.getCoursDeChangeById);

router.post('/cours-de-change', jwtMiddleware, CoursDeChangeController.createCoursDeChange);

router.put('/cours-de-change/:id', jwtMiddleware, CoursDeChangeController.updateCoursDeChange);

router.delete('/cours-de-change/:id', jwtMiddleware, CoursDeChangeController.deleteCoursDeChange);

router.get('/cours-de-change/devise/:id', jwtMiddleware, CoursDeChangeController.getDeviseByCoursDeChangeId);


export default router;
