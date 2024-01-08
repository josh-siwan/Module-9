"use strict";


const User = require("./users"); //require the model
const Posts = require("./posts"); //require the model
const Comments = require("./comments"); //require the model



async function init() {
  await User.sync(); //sync the model
  await Posts.sync(); //sync the model
  await Comments.sync(); //sync the model
}
init();
module.exports = {
  User, //export the model
  Posts, //export the model
  Comments, //export the model
};
