mysql = require("promise-mysql");
require("dotenv").config();

// Business as usual (roughly) - WE DON'T WANT THAT!
// conn = mysql.connect();
// conn.execute("select * from table x");
// conn.commit();
// conn.close();

// Smarter: Make it a pool / Connections on Stand-by
// const getData = async () => {
//   let pool = await mysql.createPool({
//     connectionLimit: 100,
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//   });

//   pool.query("SELECT * FROM reports", function (err, rows, fields) {
//     console.log(rows);
//   });
// }

// getData()

module.exports = {
    client: "mysql",
    connection: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    pool: { min: 1, max: 100 }
}