//links to dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
//links to team pages
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//link to template
const createTeam = require('./src/template.js');




const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

let teamMemberArr = [];

    function createManager() {
         inquirer.prompt([ 
            {
                 type: 'input',
                 message: "What is the manager's name?",
                 name: 'name'
             },
             {
                 type: 'input',
                 message: "What is the manager's employee ID?",
                name: 'id'
            },
             {
                 type: 'input',
                 message: "What is the manager's email address?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'office'
            }
         ])
         .then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.office);
            teamMemberArr.push(manager);
            createNewTeamMember();
         })
    }


    function createNewTeamMember() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Which type of employee would you like to add next?',
                name: 'newType',
                choices: ['Engineer', 'Intern', 'My team is complete']
            }
        ])
        .then(function newMember(response) {
            switch(response.newType) {
                case 'Engineer':
                    return createEngineer();
                    break;
                case 'Intern':
                    return createIntern();
                    break;
                default:
                    return createTeam();       
            }
        })
    }

    function createEngineer() {
        inquirer.prompt([ 
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the engineer's employee ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the engineer's email address?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub username?",
                name: 'github'
            }
        ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            teamMemberArr.push(engineer);
            createNewTeamMember();
        })
    }

    function createIntern() {
        inquirer.prompt([ 
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the intern's employee ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'email'
            },
            {
                type: 'input',
                message: "Where does the intern attend school?",
                name: 'school'
            }
        ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            teamMemberArr.push(intern);
            createNewTeamMember();
        })
    }

    function writeToFile(fileName, data) {
        return fs.writeFile(fileName, data, (err) =>
        {err ? console.error(err) : console.log('Success! Your HTML page has been created.')}
        )
    }

    function init () {
        createManager()
        .then(teamMemberArr => {
            writeToFile('team.html', createTeam(teamMemberArr))
        })
    };
        


createTeam();



init();