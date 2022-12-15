import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/server.js';
import studentsRoutes from './routes/students.routes.js';
import semesterRoutes from './routes/semester.routes.js';
<<<<<<< HEAD
import subjectsTrainerRoutes from './routes/trainer.routes.js';
=======
import updateGradesRoutes from './routes/updateGrades.routes.js';
>>>>>>> 5205b58 (implemente-component-uploadGrades)

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', studentsRoutes);
app.use('/api/v1', semesterRoutes);
<<<<<<< HEAD
app.use('/api/v1', subjectsTrainerRoutes);
=======
app.use('/api/v1', updateGradesRoutes);
>>>>>>> 5205b58 (implemente-component-uploadGrades)

app.listen(PORT);
