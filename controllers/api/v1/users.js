const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');


const getAll = (req, res) => {
    res.send('GET all users');
}

const getUserByUsername = (req, res) => {
    res.send('GET user by username');   
}

const signup = async (req, res) => {
    let user = new User();

    user.username = req.body.username;
    user.password = req.body.password;

    //generate salt to hash password
    const salt = await bcrypt.genSalt(10);

    //set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);    

    user.save().then(result => {
        let token = jwt.sign({
            uid: user._id, 
            username: user.username,
        }, "SecretWord");

            res.json({
                status: "success",
                data:{
                    "token": token,
                    "username": user.username,
                    "password": user.password,
                }
            });
    }).catch(error => {    
            res.json({
                status: "error",
                message: "Could not signup, check if all input fields are filled in"
            });

    })

}

const login = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({username: body.username});
    if(user) {
        //check if user password and hashed password are the same
        const validatePassword = await bcrypt.compare(body.password, user.password);

        if(validatePassword) {
            let token = jwt.sign({
                uid: user._id, 
                username: user.username,
            }, "SecretWord");
        
        
            res.json({
                status: "success",
                token: token
            });
        } else {

            res.json({
                status: "error",
                message: "Password is incorrect"
            });
        }
    } else {

        res.json({
            status: "error",
            message: "No user found with this email"
        });
    }
}

const changePassword = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({username: body.username});
    if(user) {
        //check if user password and hashed password are the same
        const validatePassword = await bcrypt.compare(body.passwordOld, user.password);

        const new1Password = body.passwordNew1;
        //generate salt to hash password
        const salt = await bcrypt.genSalt(10);

        //set user password to hashed password
        newPassword = await bcrypt.hash(new1Password, salt);   

        console.log(body.passwordOld);
        console.log(user.password);
        console.log(validatePassword);
        if(validatePassword) {
            if(body.passwordNew1 === body.passwordNew2){
                console.log("user._id: " + user._id);
                User.findByIdAndUpdate(
                    {_id: user._id},
                    {password: newPassword},
                    {new: true},
                    (err, user) => {
                        if(err){
                            res.json("Error udating password");
                        }else{
                            res.json("User is updated");
                        }
                });
            }
            else{
                res.json({
                    status: "error",
                    message: "Passwords are not the same"
                });
            }
        } else {

            res.json({
                status: "error",
                message: "Password is incorrect"
            });
        }
    } else {

        res.json({
            status: "error",
            message: "No user found with this email"
        });
    }

}

// export the functions
module.exports = {
    getAll,
    signup,
    getUserByUsername,
    login,
    changePassword
}