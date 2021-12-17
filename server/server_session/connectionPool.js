require("dotenv").config();

module.exports = {
    client: "mysql",
    connection: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    pool: { min: 1, max: 100 }
}