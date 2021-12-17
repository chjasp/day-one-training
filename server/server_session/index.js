// express
express = require("express")
reportStorage = require("./reportStorage")
cors = require("cors")

server = express()
server.use(cors());

server.get("/greet", (req, res) => {
    // If Musumbu: Hello Musumbu
    console.log(req.query)
    let message = "Hello " + req.query.name
    console.log("Hello")
    res.send(message)
})

server.get("/reports", async (req, res) => {
    let id = req.query.id
    let result = await reportStorage.getReports()
    res.send(result)
})

server.get("/specifiedreport", async (req, res) => {
    let result = await reportStorage.getSpecificReport(req)
    console.log(result)
    res.send(result)
})

server.listen(3000)