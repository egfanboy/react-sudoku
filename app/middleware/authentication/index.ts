import passport from 'passport';
import { load } from 'dotenv';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

load();

const options: StrategyOptions = {
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
    new Strategy(options, (payload: any, done: Function) => {
        done(null, payload);
    })
);

export default passport.authenticate('jwt', { session: false });
