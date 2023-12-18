import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connect from './db/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// using morgan middleware
app.use(morgan('dev'));

// connect to the database
connect();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
