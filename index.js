const express = require("express");  // express for creating http apis for get post create update
const http = require("http"); // http for creating http server for webSockets
const path = require("path"); // path for creating path for static files
const app = express();

const {Server} = require("socket.io"); // socket.io for creating web sockets
const server = http.createServer(app); // created server for handling web sockets
const io = new Server(server); // created web sockets for handling web sockets
app.use(express.static(path.resolve("./public"))); // static files for web sockets



io.on("connection",(socket)=>{
    socket.on("Client-Message",(message)=>{
        console.log("A new message from client :- ",message);
        io.emit("message",message);  // Here io is used to send message to all users
    })
   
})

app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(9000,()=>console.log("Server is running on port http://localhost:9000"));
