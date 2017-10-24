import mongoose from 'mongoose';
import {findAndCount} from '../libs/helper';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: 'This email already exists',
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.findAndCount = findAndCount;

const userModel = mongoose.model('User', userSchema);
export default userModel;
