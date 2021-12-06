require('rootpath')();
const express = require("express");
const router = express.Router();
const Joi = require('joi');
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler')
const authentication = require('middleware/auth')
const {joiValidation} = require("helpers/errorHandle")
const {printData} = require("helpers/dataHandle")

const User = require("models").User

router.post('/auth/register', asyncHandler(async (request, response) => {
    joiValidation(request, response, {
        phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
        password: Joi.string().min(6).required(),
    })
    const {body} = request
    body.password = await bcrypt.hash(body.password, 8)
    const user = await User.create(body)
    await user.generateAuthToken()
    printData(response, {user})
}))

router.post('/auth/login', asyncHandler(async (request, response) => {
    const {phone, password} = request.body
    const user = await User.findByCredentials(phone, password)
    if (user == null) {
        throw new Error('User not found')
    }
    await user.generateAuthToken()
    printData(response, {user})
}))

// router.post("/auth", authentication, (req, res) => {
//     console.log('req.token', req.token)
//     console.log('req.user', req.user)
//     console.log('1')
//     // req.logout();
//     // req.session.destroy();
//     // res.send("ok");
// });

module.exports = router;
