const printData = (response, data) => {
    response.status(200);
    response.json({
        status: true,
        data
    });
}
module.exports = {printData}
