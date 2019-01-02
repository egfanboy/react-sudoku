const validateRegister = (req: any, res: any, next: Function) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name').notEmpty();
    req.checkBody('email', 'The email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false,
    });

    req.checkBody('password', 'Password cannot be blank').notEmpty();
    req.checkBody('password-confirm', 'Password cannot be blank').notEmpty();
    req.checkBody('password-confirm', 'Passwords must match').equals(
        req.body.password
    );

    const errors = req.validationErrors();
    if (errors) {
        res.status(422);

        return res.json({ errors: errors.map((err: any) => err.msg) });
    }

    next();
};

export default validateRegister;
