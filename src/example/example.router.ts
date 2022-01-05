import express, { Request, Response } from 'express';

export const exampleRouter = express.Router();

exampleRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello user');
});
