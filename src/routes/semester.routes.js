import { Router } from 'express';
import { getSemester } from '../controllers/semester.controller.js';

const router = Router();

router.get('/semester/:email', getSemester);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
