const validateLogin = (req: any, res: any, next: Function) => {
    req.checkBody('email', 'The email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false,
    });

    req.checkBody('password', 'Password cannot be blank').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        res.status(422);

        return res.json({ errors: errors.map((err: any) => err.msg) });
    }

    next();
};

export default validateLogin;
