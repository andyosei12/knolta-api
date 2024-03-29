import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connect from './db/index.js';
import userRoutes from './routes/user.js';
import appointmentRoutes from './routes/appointment.js';
import executiveRoutes from './routes/executive.js';
import programRoutes from './routes/program.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// using express.json middleware
app.use(express.json());

// using morgan middleware
app.use(morgan('dev'));

// connect to the database
connect();

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/appointments', appointmentRoutes);
app.use('/api/v1/executives', executiveRoutes);
app.use('/api/v1/programs', programRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
