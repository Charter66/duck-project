class ErrorStatus extends Error {
    constructor(message, statusCode) {
        super()
        this.statusCode = statusCode
    }
}

module.exports = ErrorStatus