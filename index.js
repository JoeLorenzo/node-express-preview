const express = require("express");
const userRouter = require("./routers/userRouters")
const server = express();


server.use(express.json())
server.use("/", userRouter)


server.listen(8080, () => console.log("server running on port 8080"));
n