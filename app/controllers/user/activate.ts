import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import User from '../../models/user';

export const activateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req.params;

    const user = await User.findById(userId);

    user.set('activated', true);

    await user.save();

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
};

export default activateUser;
