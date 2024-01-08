const calcLogger = require("./calcLog")
let logger = new calcLogger();

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random()*(999-100+1)+100);
  }

  add(num1, num2) {
    const value = num1 + num2;
    logger.log(this.id,value)
    return value;
  }
  subtract(num1, num2) {
    const value = num1 - num2;
    logger.log(this.id,value)
    return value;
  }
  multiply(num1, num2) {
    const value = num1 * num2;
    logger.log(this.id,value)
    return value;
  }
  divide(num1, num2) {
    const value = num1 / num2;
    logger.log(this.id,value)
    return value;
  }
}
module.exports = Calculator;
