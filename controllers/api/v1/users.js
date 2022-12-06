const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const getAll = (req, res) => {
    res.send('GET all users');
}

const signup = async (req, res) => {
    let user = new User();

    user.username = req.body.username;
    user.password = req.body.password;

    user.save().then(result => {
        let token = jwt.sign({
            uid: user._id, 
            username: user.username,
        }, "SecretWord");

            res.json({
                status: "success",
                data:{
                    "token": token,
                }
            });
    }).catch(error => {    
            res.json({
                status: "error",
                message: "Could not signup, check if all input fields are filled in"
            });

    })

}

// export the functions
module.exports = {
    getAll,
    signup
}