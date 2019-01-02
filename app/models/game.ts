import mongoose, { Schema } from 'mongoose';

interface GameI extends mongoose.Document {
    difficulty: string;
    time: Date;
    user: mongoose.Schema.Types.ObjectId;
}

const schema: Schema = new mongoose.Schema({
    difficulty: {
        type: String,
        required: 'Cannot save a game record without a difficulty',
        enum: ['easy', 'medium', 'hard'],
    },
    time: {
        type: Date,
        required: 'Must supply a time',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'You must supply a user',
    },
});

const GameModel = mongoose.model<GameI>('Game', schema);

export default GameModel;
