import { Router } from 'express';
import { getUpdateGrades } from '../controllers/updateGrades.controllers.js';

const router = Router();

router.get('/activity/:idActivity/activitystudents', getUpdateGrades);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
