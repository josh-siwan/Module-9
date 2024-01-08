const express = require("express");
const app = express();


// parse requests of content-type -application / json;
app.use(express.json());

let fruitRoutes = require('./routes/fruitRoutes')
app.use('/api/news', fruitRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
