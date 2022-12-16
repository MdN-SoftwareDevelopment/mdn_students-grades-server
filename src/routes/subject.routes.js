import { Router } from 'express';
import { getSubjects } from '../controllers/subject.controller.js';

const router = Router();

// TODO: CREATE ROUTES FOR PROJECTS
router.get('/subjects/:subject', getSubjects);

export default router;
