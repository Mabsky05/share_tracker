//MongoDB connection
const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
    dbname: 'appUsers',
    useNewURLParser: true,
    useUnifiedTopology: true, 

}, err => err ? console.log(err) : 
console.log('Connected to your appUsers database'))

//User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);
User.createIndexes();



app.post ("/register", async (req, res)=> {
    try {
        const user = new UserSchema(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already registered!")
        }
    } catch (e) {
        res.send("Error");

    }

    });
