import express from 'express';
import GameController from '../controllers/game';
import auth from '../middleware/authentication';
const router = express.Router();

router.post('/games', auth, GameController.create);

export default router;
