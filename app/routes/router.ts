import express from 'express';
import gameRoutes from './game';
import UserRoutes from './user';
const router = express.Router();

router.use(gameRoutes, UserRoutes);

export default router;
