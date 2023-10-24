const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = require('./lib/shapes.js');

criteria = [
    {message: 'Please enter up to 3 characters:',
    type: 'input',
    name: 'text'},

    {message: 'Please enter a text color:',
    type: 'input',
    name: 'textColor'},

    {message: 'Please choose a shape:',
    type: 'list',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']},

    {message: 'Please enter a shape color:',
    type: 'input',
    name: 'shapeColor'}
]

function writeToFile(fileName, criteria) {
    inquirer
    .prompt(criteria).then((data) => {
        fs.writeFile(fileName, generateSVG(data), (err) =>
        err ? console.log(err) : console.log('Successfully created SVG file!')
        )});
}

writeToFile('logo.svg', criteria)