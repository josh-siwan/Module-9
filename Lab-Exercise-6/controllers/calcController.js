const Calculator = require('../library/calcLib')

let myCalc = new Calculator()

const addition = (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const subtraction = (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = myCalc.subtract(number1,number2)
    console.log(subtraction)
    res.status(200)
    res.json({result:subtraction})
}

const multiplication = (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiplication = myCalc.multiply(number1,number2)
    console.log(multiplication)
    res.status(200)
    res.json({result:multiplication})
}

const division = (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = myCalc.divide(number1,number2)
    console.log(division)
    res.status(200)
    res.json({result:division})
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division
}