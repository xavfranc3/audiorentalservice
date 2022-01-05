import express, { Request, Response } from 'express';

export const usersRouter = express.Router();

usersRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello users');
});
