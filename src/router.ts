import express from 'express';
import { exampleRouter } from './example/example.router';

const router = express.Router();

router.use('/example', exampleRouter);

export { router };
