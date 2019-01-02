import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../../models/user';

const login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.sendStatus(401).json({
            error: 'Invalid email/password combination.',
        });
    }

    const validPassword = bcrypt.compare(password, user.password);

    if (validPassword) {
        jwt.sign(
            { user: { email: user.email, id: user._id } },
            process.env.SECRET,
            { expiresIn: '1yr' },
            (err, token) => {
                if (!err) {
                    res.status(200).json({
                        token,
                    });
                }
            }
        );
    } else {
        res.sendStatus(401).json({
            error: 'Invalid email/password combination.',
        });
    }
};

export default login;
