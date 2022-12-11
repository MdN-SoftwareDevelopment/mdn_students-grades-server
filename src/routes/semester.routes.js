import { Router } from 'express';
import { getSemester } from '../controllers/semester.controller.js';

const router = Router();

router.get('/semester', getSemester);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
