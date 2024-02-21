const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of you project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        message: 'What kind of command should be run to install dependencies?',
        name: 'cmdInstall',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'cmdTest'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'useRepo'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((ans) => {
        writeToFile('./sample/README.md', generateMarkdown(ans));
    });
}

// function call to initialize program
init();
