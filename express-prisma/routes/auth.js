require('rootpath')();
const express = require("express");
const router = express.Router();
const Joi = require('joi');
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler')
const {joiValidation} = require("helpers/errorHandle")
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post('/auth/register', asyncHandler(async (request, response) => {
    const user = await prisma.user.create({
        data: {
            "email": 'Alice',
            "name": 'Smith',
        },
    })
    console.log('user', user)
    // joiValidation(request, response, {
    //     phone: Joi.string().regex(/^[0-9]{10}$/).messages({'phone': `Phone number must have 10 digits.`}).required(),
    //     password: Joi.string().min(6).required(),
    // })
    // const {body} = request
    // body.password = await bcrypt.hash(body.password, 8)
    // const user = await User.create(body)
    // await user.generateAuthToken()
    // response.send({user})
}))

router.post('/auth/login', asyncHandler(async (request, response) => {
    // const {phone, password} = request.body
    // const user = await User.findByCredentials(phone, password)
    // if (user == null) {
    //     throw new Error('User not found')
    // }
    // await user.generateAuthToken()
    // response.send({user})
}))

module.exports = router;
