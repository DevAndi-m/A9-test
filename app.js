const fs = require ('fs')
const validator = require('validator')
const chalk = require('chalk')

app

const email = validator.isEmail('andimorina093@gmail.com')

const url = validator.isURL('https://www.youtube.com/')
console.log(url)
console.log(email)

const green = chalk.green('Success')
console.log(green)

// DETYRA 

const text = fs.readFileSync('./text.txt', 'utf-8');

const red = chalk.red(text);

console.log(red)


