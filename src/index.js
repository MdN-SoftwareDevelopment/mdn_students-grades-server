import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/server.js';
import studentsRoutes from './routes/students.routes.js';
import semesterRoutes from './routes/semester.routes.js';
import subjectsTrainerRoutes from './routes/trainer.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', studentsRoutes);
app.use('/api/v1', semesterRoutes);
app.use('/api/v1', subjectsTrainerRoutes);

app.listen(PORT);
