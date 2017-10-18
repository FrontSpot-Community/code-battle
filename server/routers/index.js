/**
 * Created by vlad on 9/25/2016.
 */
import express from 'express';
import authRouter from './auth.router';
import linkRouter from './link.router';

const router = express.Router();
router.use(authRouter);
router.use(linkRouter);

export default router;
