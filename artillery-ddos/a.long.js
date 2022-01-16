const moment = require("moment");

function setData(requestParams, context, ee, next) {
    const unixTime = moment()
        .valueOf();

    context.vars.currentTime = unixTime
    next();
}

module.exports = {
    setData: setData,
}