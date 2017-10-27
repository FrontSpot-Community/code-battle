import express from 'express';
import {userController} from '../controllers/user.controller';

const router = express.Router();
router.get('/user', userController);


export default router;
