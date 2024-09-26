//Express setup
const express = require('express')
const app = express();
//const port = 5000
const PORT = process.env.PORT || 3001;
//const cors = require("cors");
//app.use(express.json());
//app.use(cors());

//Localhost Test
app.get("/", (req, res) => {
    res.send("App is working");
})

app.listen(PORT, ()=> {
    console.log(`App listening at port ${PORT}`)
});



//MongoDB connection setup
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
