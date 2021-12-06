const Joi = require('joi');

const errorHandle = (err, req, res, next) => {
    console.log('err', err)
    res.status(500);
    res.json({status: false, error: err.message});
}

const printError = (response, errors) => {
    response.status(500);
    response.json({
        status: false,
        message: errors[0].message,
        errors,
    });
}

const joiValidation = (request, response, schema) => {
    const {body} = request
    const validationSchema = Joi.object().keys(schema)
    const result = validationSchema.validate(body, {abortEarly: false})
    if (result.error) {
        printError(response, result.error.details)
    }
}

module.exports = {errorHandle, printError, joiValidation}
