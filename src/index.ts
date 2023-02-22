/* eslint-disable no-console */
import { config } from 'dotenv';
import app from './app';
import { Request, Response } from 'express';

config();

const PORT = process.env.PORT || 3001;

app.post('/', (req: Request, res: Response) => {
  console.log('req', req.body);
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
