import { Request, Response, NextFunction } from 'express';

import jwt, { JsonWebTokenError } from 'jsonwebtoken';

export const checkToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { token } = req.params;

    jwt.verify(token, process.env.SECRET, (err: JsonWebTokenError) => {
        if (!err) {
            next();
        } else {
            res.status(422).json({
                message: 'Your activation token is invalid.',
            });
        }
    });
};

export default checkToken;
