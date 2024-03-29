

"use strict";
let Models = require("../models"); //matches index.js
const getPosts = (res) => {
//finds all users
Models.Posts.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
const createPosts = (data, res) => {
//creates a new user using JSON data POSTed in request body
console.log(data)
new Models.Posts(data).save()
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const updatePosts = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    Models.Posts.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  
  const deletePosts = (req, res) => {
    //deletes the user matching the ID from the param
    Models.Posts.findByIdAndDelete(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  
  module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
  };