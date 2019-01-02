import { Request, Response } from 'express';
import User from '../../models/user';

import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

const saltRounds = 10;

const register = async (req: Request, res: Response): Promise<void> => {
    const { email, name, password } = req.body;

    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPass = await bcrypt.hash(password, salt);

    const user = await new User({ email, name, password: hashedPass }).save();

    jwt.sign({}, process.env.SECRET, { expiresIn: '1hr' }, (err, token) => {
        if (!err) {
            //SEND EMAIL
            res.status(200).json({
                token,
            });
        }
    });
};

export default register;
