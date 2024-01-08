const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const serverSocket = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

serverSocket.on("connection", (clientSocket) => {
  console.log("a user connected");

  clientSocket.on("new user", () => {
    serverSocket.emit("new user", { text: "A new user is connected", connectionMsg: true });
  });

  clientSocket.on("chat message", (msg) => {
    console.log("message: " + msg);
    serverSocket.emit("chat message", msg);
  });

  clientSocket.on("disconnect", () => {
    console.log("user disconnected");
    serverSocket.emit("user disconnect", { text: "An user is disconnected", connectionMsg: true });
  });

  clientSocket.on("typing", (msg) => {
    clientSocket.broadcast.emit("typing", { text: msg.nickname + " is typing..." });
  });


});

server.listen(3000, () => {
  console.log("listening on *:3000");
});