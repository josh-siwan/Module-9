"use strict";

const Models = require("../models");
const getComments = (res) => {
  Models.Comments.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createComments = (data, res) => {
  Models.Comments.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateComments = (req, res) => {
  Models.Comments.update(req.body, { where: { CommentID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteComments = (req, res) => {
  Models.Comments.destroy({ where: { CommentID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
};
