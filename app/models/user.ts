import mongoose from 'mongoose';

import validator from 'validator';

interface UserI extends mongoose.Document {
    email: string;
    name: string;
    password: string;
}

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid email address'],
        required: 'Please supply an email address',
    },
    password: {
        type: String,
        required: 'You must provide a password.',
        trim: true,
        minlength: 8,
    },
    name: { type: String, required: 'Please supply a name', trim: true },
    activated: { type: Boolean, default: false },
});

const UserModel = mongoose.model<UserI>('User', schema);

export default UserModel;
