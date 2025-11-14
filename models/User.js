
const mongoose =requre('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',],
    },
    password: {
        type: String,
        required: [true, 'Please provide passwrd'],
        minlength: 6,
        select: false,



    },

    createdAt: {
        type: Date,
        default: Date.now,
    },


    
});