const Joi = require("@hapi/joi")

const registerValidation = data => {

    const schema = Joi.object({
        first_name: Joi.string().min(1).max(128).required(),
        last_name: Joi.string().min(1).max(128).required(),
        email: Joi.string().min(5).email().required(),
        password: Joi.string().min(8).max(128).required()
    })

    return schema.validate(data)
}

const loginValidation = data => {

    const schema = Joi.object({
        email: Joi.string().min(5).email().required(),
        password: Joi.string().min(8).max(128).required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation