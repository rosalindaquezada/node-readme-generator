//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./generateMarkdown');
//Questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'gh',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project..',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices:['MIT', 'APACHE 2.0','GPL 3.0','BSD 3','none'],
        filter(val){
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contribution to the repo?',
    },
];

//write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("README file is being created..");
        writeToFile("./proj/README.md", generateMarkdown({ ...responses }));
    });
}
//Initialize app
init();