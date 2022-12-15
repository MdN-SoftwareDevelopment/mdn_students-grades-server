import { Router } from 'express';
import { getUpdateGrades } from '../controllers/updateGrades.controllers.js';

const router = Router();

router.get('/update', getUpdateGrades);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
