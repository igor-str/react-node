import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    creator: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
});

export const Post = mongoose.model('users', UserSchema);