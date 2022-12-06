import { Router } from 'express';
import { getStudents } from '../controllers/students.controller.js';

const router = Router();

router.get('/estudents', getStudents);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
