const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const createTeam = require('./src/template.js')
teamArr = [];

function init () {
    function generateTeam() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Which employee are you adding to your team?',
                choices: ['Manager', 'Engineer', 'Intern', 'My team is complete'],
                name: 'employee'
            }
        ])
        .then(function (userInput) {
            switch(userInput.employee) {
                case 'Manager':
                    createManager();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    createHTML();    
            }
        })
    }

    function createManager() {
        inquirer.prompt([ 
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'managerName'
            },
            {
                type: 'input',
                message: "What is the manager's employee ID?",
                name: 'managerId'
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'managerOffice'
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            teamArr.push(manager);
            generateTeam();
        })
    }


    function createEngineer() {
        inquirer.prompt([ 
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineerName'
            },
            {
                type: 'input',
                message: "What is the engineer's employee ID?",
                name: 'engineerId'
            },
            {
                type: 'input',
                message: "What is the engineer's email address?",
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub username?",
                name: 'engineerGithub'
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            generateTeam();
        })
    }

    function createIntern() {
        inquirer.prompt([ 
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName'
            },
            {
                type: 'input',
                message: "What is the intern's employee ID?",
                name: 'internId'
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'internEmail'
            },
            {
                type: 'input',
                message: "Where doesthe intern attend school?",
                name: 'internSchool'
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(manager);
            generateTeam();
        })
    }


function createHTML () {
    console.log('Success! Your page has been created.')
    fs.writeFileSync(outputPath, createTeam(teamArr))

}

generateTeam();

}

init();