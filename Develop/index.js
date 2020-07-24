const fs = require('fs');
const inquirer = require('./node_modules/inquirer/lib/inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// array of questions for user
const questions = readmeQuestions => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this ReadMe?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of this project?'
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'what is the Table of Contents for this ReadMe?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation did you use?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What was the usage for this project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license(s) apply?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Were there any contributers to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were run on this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What questions did you have at the beginning of the project?'
    }
    ])
    
    
};

questions();
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
