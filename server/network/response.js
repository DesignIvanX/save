const statusCodeErrors = {
    200: "Done",
    201: "Created",
    400: "Invalid format",
    500: "Internal error"
}
exports.success = (req, res, message, status) => {
    let statusCode = status
    let statusMessage = message
    if (!status) {
        statusCode = 200
    }
    if (!message) {
        statusMessage = statusCodeErrors[status]
    }
    res.status(statusCode).send({
        body: statusMessage
    })
}
exports.error = (req, res, error, message, status) => { 
    let statusCode = status
    let statusMessage = message
    let messageError = error 
    if (!status) {
        statusCode = 500
    }
    if (!message) {
        statusMessage = statusCodeErrors[status]
    }
    if (error) {
        messageError = statusCodeErrors[500]
    }
    res.status(statusCode).send({
        error: messageError,
        message: statusMessage
    })
}