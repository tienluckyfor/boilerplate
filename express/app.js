require('rootpath')();
const express = require('express')
const authRouter = require("routes/auth")
const postsRouter = require("routes/posts")
const {errorHandle} = require("helpers/errorHandle")

const app = express()
app.use(express.json())
app.use(authRouter)
app.use(postsRouter)
app.use(errorHandle)

module.exports = app