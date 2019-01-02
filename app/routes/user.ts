import express from 'express';
import UserController from '../controllers/user';
import validateRegister from '../middleware/user/validate-register';
import validateLogin from '../middleware/user/validate-login';
import checkActivationToken from '../middleware/user/check-activation-token';
const router = express.Router();

router.post('/register', validateRegister, UserController.register);
router.post('/login', validateLogin, UserController.login);
router.post(
    '/activate/:token/:userId',
    checkActivationToken,
    UserController.activate
);

export default router;
