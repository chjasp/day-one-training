// Import the express framework
express = require("express");
reportStorage = require("./reportStorage");
cors = require("cors")


// Create a server ("A thing that can handle HTTP-requests, -responses")
server = express();
server.use(cors());
port = 3000;

// HTTP-methods: What should the server do?
// ... How we ...
// GET => ... get information
// POST => ... add information
// PUT => ... change information (don't care)
// DELETE => ... delete information (don't care)

// 2 arguments:
// 1. "Hey, server, look at this route"
// 2.1.1 "req is what comes in"
// 2.1.2 "res is what you will send back (template; not filled out yet)"
// 2.2 "in {} you do what you need to do"
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/greet", (req, res) => {
    // if Musumbu greet Musumbu
    // if Maxime greet Maxime
    // Please finish report-1 until 2022-12-17
    let responseText = "Hi " + req.query.name
    res.send(responseText)
})

server.get("/reports", async (req, res) => {
    let reports = await reportStorage.getReports()
    console.log(reports)
    res.send(reports)
})

server.get("/specificreport", async (req, res) => {
    let reports = await reportStorage.getSpecificReport(req)
    console.log(reports)
    res.json(reports)
})



// "Now that you know what to do, start working (listening)!"
server.listen(port, () => console.log("Listening on port " + port));
