const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = 
    [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub user name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this ReadMe?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a description of this project?',
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
            type: 'checkbox',
            name: 'badge',
            message: 'What license(s) apply?',
            choices: ["GitHub", "NPM"]
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please explain which license this application is covered under.'
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
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email for people to contact you with additional questions?'
        }
    ]

function readmeQuestions() {
    inquirer.prompt(questions)
     .then(function(answers) {
        fs.writeFile('./projectREADME.md', markDown(answers), err => {
            if (err) throw new Error(err);
        })
     });
};

readmeQuestions();


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
