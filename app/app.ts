import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { load } from 'dotenv';
import expressValidator from 'express-validator';

import router from './routes/router';

require('./middleware/authentication');
load();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

export default app;
