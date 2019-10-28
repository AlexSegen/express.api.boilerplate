require("dotenv").config()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {registerValidation, loginValidation} = require("../validations")

const User = require("../models/user")

exports.login = async (req, res) => {

    const { password, email } = req.body
    
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).json({ message: error.details[0].message })

    const user = await User.findOne({email})
    if(!user) return res.status(400).json({message: "Email does not exist or password is wrong"});

    const validPass = await bcrypt.compare(password, user.password);

    if(!validPass) return res.status(401).json({message: "Email or password wrong."})

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    

    res.status(200).json({
        token,
        user:{
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
        isActive: user.isActive,
        dob: user.dob,
        gender: user.gender,
        location: user.location,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }})
    
}

exports.register = async (req, res) => {
    
    const { first_name, last_name, password, email } = req.body
    
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).json({ message: error.details[0].message })

    const emailExists = await User.findOne({email})
    if(emailExists) return res.status(400).json({message: "Email already exists"});

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const user = new User( {
        first_name,
        last_name,
        email,
        password:hashPassword
    })

    try {
        const newUser = await user.save()
        res.status(201).json({message: "user has been created"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}