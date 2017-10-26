import express from 'express';
import {login, auth} from '../controllers/auth.controller';

const router = express.Router();

router.get('/auth', auth);
router.post('/login', login);


export default router;
