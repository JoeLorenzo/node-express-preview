const express = require("express");

const server = express();
server.use(express.json())
const users = [ {id: 1, username: "Bart"}, {id: 2, username: "Lisa"}, {id: 3, username: "Homer"} ]

server.get("/api", (req, res) => {
    // console.log(req)
    res.json({"message": "hello from the api"})
})

server.get("/api/users", (req, res) => {
    res.json(users)
})

server.post("/api/users", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json({resMessage: "post successfull", users})
})

server.get("/api/user/:id", (req, res) => {
    console.log("-------req.params is----------")
    console.log(req.params)
    // req.params should console log an object
    console.log("------------------------------")
    const id = req.params.id
    const user = users.find(user => user.id == id)
    if (user) {
        res.json(user)
    }
    else {
        res.status(404).json({message: "user ID not found"})
    }
    
})
server.get("/", (req, res) => {
    // console.log(req)
    res.send("<h2>Hello World from the root</h2>")
});


server.listen(8080, () => console.log("server running on port 8080"));
