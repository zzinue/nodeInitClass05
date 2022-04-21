require("dotenv").config()

const config = {
    app: {
        port: process.env.APP_PORT || 80,
        name: process.env.APP_NAME,
        debug: process.env.debug || false,
        jwtSecret: process.env.JWT_SECRET,
    },
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        baseCollection: process.env.DB_BASE_COLLECTION,
    }
}
module.exports = config