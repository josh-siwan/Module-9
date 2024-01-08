const express = require('express');
const router = express.Router();
const calcController = require("../controllers/calcController")

router.get('/add', (req, res) => {
        calcController.addition(req,res)
    })

router.get('/subtract', (req, res) => {
        calcController.subtraction(req,res)
    })

router.get('/multiply', (req, res) => {
        calcController.multiplication(req,res)
    })

router.get('/divide', (req, res) => {
        calcController.division(req,res)
    })

    module.exports = router;