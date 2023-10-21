const inquirer = require('inquirer');

criteria = {
    message: 'Enter up to 3 characters',
    type: 'input',
    name: 'text'
}

inquirer.prompt(
    criteria
)