const bcrypt = require("bcrypt")

const {registerValidation, loginValidation} = require("../validations")

const User = require("../models/user")

exports.login = async (req, res) => {
    res.send("hello login")
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