const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require("models").User
const env = require("config/env")

const authentication = asyncHandler(async (request, response, next) => {
    const token = request.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, env.JWT_SECRET)
    const user = await User.findOne({where: {id: decoded.user.id, token: token}})
    if (!user) {
        throw new Error()
    }
    request.token = token
    request.user = user
    next()
})

module.exports = authentication
