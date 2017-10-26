/**
 * Created by vlad on 9/25/2016.
 */
import express from 'express';
import auth from './auth.router';

const router = express.Router();
router.use(auth);
export default router;
