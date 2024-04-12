const express = require('express');
import CoursDeChangeController from '../controllers/CoursDeChangeController';
import jwtMiddleware from '../middleware/JwtMiddleware';

const router = express.Router();
router.use(jwtMiddleware)

router.get('/cours-de-change', CoursDeChangeController.getAllCoursDeChange);

router.get('/cours-de-change/:id', CoursDeChangeController.getCoursDeChangeById);

router.post('/cours-de-change', CoursDeChangeController.createCoursDeChange);

router.put('/cours-de-change/:id', CoursDeChangeController.updateCoursDeChange);

router.delete('/cours-de-change/:id', CoursDeChangeController.deleteCoursDeChange);

router.get('/cours-de-change/devise/:id', CoursDeChangeController.getDeviseByCoursDeChangeId);


export default router;
