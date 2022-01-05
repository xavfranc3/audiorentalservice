import express from 'express';
// import { exampleRouter } from './example/example.router';
import { usersRouter } from './services/users/users.router';

const router = express.Router();

// router.use('/example', exampleRouter);
router.use('/users', usersRouter);

export { router };
