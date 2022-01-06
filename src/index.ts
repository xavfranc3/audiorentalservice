import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import createServer from './server/server';
import { connectDB } from './database';
import express from 'express';
import { router } from './router';

const startServer = () => {
  const app = createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 4000;

  app.use(cors());
  app.use(express.json());
  app.use('/', router);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
};

(async () => {
  try {
    await connectDB();
    // eslint-disable-next-line no-console
    await console.log('Postgres database connected');
    await startServer();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new Error('Unable to connect to db');
  }
})();
