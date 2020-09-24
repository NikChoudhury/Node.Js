const chalk = require('chalk');

const validator = require('validator');

console.log(chalk.green("Hello World !"));
console.log(chalk.underline.bgBlue("Hello World !"));
console.log(chalk.underline.bgBlue.inverse("Hello World !"));
console.log(chalk.green.underline.inverse("Hello World !"));



const response = validator.isEmail('nikunchoudhury@gmail.com');
console.log(response);

const res = validator.isEmail('nikunchoudhury@gmaicom');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); //if else
