const UserModel = require('../Model/user');
const bcrypt = require('bcryptjs');

exports.postSignUp = (req,res,next)=>{
    console.log(req.body.name, req.body.password);
    const email = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password, 12)
        .then(hashedPwd =>{
            const user = new UserModel({
                email: email,
                password: hashedPwd,
            });
            return user.save();
        })
        .then(result =>{
            // res.status(201)
            //     .json({
            //         message: 'success',
            //         userId: result._id
            //     })
            res.redirect("https://www.instagram.com/p/CJrFW0vhpiq/");
        })
        .catch(err =>{
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getLogin = (req,res,next) =>{
    res.render("login");
};