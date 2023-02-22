/* eslint-disable no-console */
import { config } from 'dotenv';
import crypto from 'crypto';
import app from './app';
import { Request, Response } from 'express';

config();

const PORT = process.env.PORT || 3001;

const db: Array<{ login: string; password: string }> = [
  {
    login: 'qwerty',
    password: '123456',
  },
  {
    login: 'kolya',
    password: 'qwerty',
  },
];

app.post('/', (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    const index = db.findIndex(
      (item) => item.login === login && item.password === password
    );

    if (index !== -1) {
      res.send({ success: true, user_id: crypto?.randomUUID() });
      return;
    }

    res.send({ success: false });
  } catch (e) {
    console.log(e);
    res.send({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
