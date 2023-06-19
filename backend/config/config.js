const mssql = require('mssql')
const dotenv = require('dotenv')
dotenv.config()

let config = {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    port: 1433,
    pool: {
        max: 50,
        min: 0,
        idleTimeoutMillis: 3600
    },
    options: {
        encrypt: false
    }
}

module.exports = config;