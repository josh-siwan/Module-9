"use strict";

const getFruits = (res) => {
  fetch("https://fruityvice.com/api/fruit/all")
    .then(function (response) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getFruits
};
