import { Router } from 'express';
import { getSubjectsTrainer } from '../controllers/trainer.controller.js';

const router = Router();

router.use('/trainer/subjects/:email', getSubjectsTrainer);

// TODO: CREATE ROUTES FOR PROJECTS

export default router;
