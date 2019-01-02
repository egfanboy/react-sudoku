import mongoose from 'mongoose';

import app from './app';

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Currently listening on port: ${port}`);
    mongoose.connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true }
    );
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', err => {
        console.error(
            `The following error occured when connecting to the database → ${
                err.message
            }`
        );
    });
});
