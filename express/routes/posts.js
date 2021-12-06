var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const authentication = require('middleware/auth')
const Joi = require('joi');
const {joiValidation} = require("helpers/errorHandle")
const {printData} = require("helpers/dataHandle")
const Post = require("models").Post

router.post('/posts', authentication, asyncHandler(async (request, response) => {
    joiValidation(request, response, {
        title: Joi.string().required(),
        description: Joi.string().required(),
    })
    const {user, body} = request
    const post = await Post.create({user_id: user.id, ...body}, {
        include: ['user'],

    })
    const pp = await Post.findOne({
        include: ['user'],
        where: {id: post.id}
    })
    // printData(response, post)
    printData(response, pp)
}))

module.exports = router;
