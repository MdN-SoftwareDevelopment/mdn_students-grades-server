import { Router } from 'express';
import { getAverageOfAllActivities } from '../controllers/activities.controller.js';

const router = Router();

router.get('/average/:email/:subject', getAverageOfAllActivities);

export default router;
