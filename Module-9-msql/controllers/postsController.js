"use strict";

const Models = require("../models");
const getPosts = (res) => {
  Models.Posts.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createPosts = (data, res) => {
  Models.Posts.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updatePosts = (req, res) => {
  Models.Posts.update(req.body, { where: { PostID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deletePosts = (req, res) => {
  Models.Posts.destroy({ where: { PostID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts
};
