const express = require("express");
const app = express();

require("dotenv").config();
// parse requests of content-type -application / json;
app.use(express.json());

let dbConnect = require("./dbconnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let postRoutes = require('./routes/postsRoutes')
app.use('/api/posts', postRoutes)

let commentRoutes = require('./routes/commentsRoutes')
app.use('/api/comments', commentRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});