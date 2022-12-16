import { Router } from 'express';
import { putUpdateActivityStudent } from '../controllers/updateActivityStudent.controller.js';

const router = Router();

router.put('/activitystudents/:idActivityStudent', putUpdateActivityStudent);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
