const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateHTML = require('./util/generateHtml.js');
const employees = []



async function init() {
    const userInput = await
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "continue",
                    message: "Would you like to add an employee?",
                    choices: ["Yes", "No", "View Team"],
                }
            ])
    switch (userInput.continue) {
        case "Yes":
            getRole();
            break;

        case "No":
            fs.writeFileSync("index.html", generateHTML(employees), "utf-8")
            console.log("New file written. Seen you soon!")
            break;

        default:
            console.log(employees);
            init();
            break;
    }
}



// //Employee type selection prompts
async function getRole() {
    const employeeSelection = await
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employee",
                    message: "What employee position are we adding?",
                    choices: ["Engineer", "Intern", "Manager"],
                }
            ])
    switch (employeeSelection.employee) {
        case "Manager":
            console.log("add a manager!");
            getOfficeNumber();
            break;
            
        case "Intern":
            console.log("add an intern!");
            getSchool();
            break;

        case "Engineer":
            console.log("add an engineer!");
            getGitHub();
            break;
    }

}

// manager
async function getOfficeNumber() {
    const managerInput = await
        inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?",
                type: "input"
            },
            {
                type: "input",
                message: "add the employee ID number",
                name: "id",
            },
            {
                type: "input",
                message: "add the employee's email",
                name: "email",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is this employee's office number?",
            }
        ]).then((managerInput) => {
            const newManager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber)
            employees.push(newManager);
            console.log(newManager);
        })
    init();
};

// intern
async function getSchool() {
    const internInput = await
        inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?",
                type: "input"
            },
            {
                type: "input",
                message: "add the employee ID number",
                name: "id",
            },
            {
                type: "input",
                message: "add the employee's email",
                name: "email",
            },
            {
                type: "input",
                name: "school",
                message: "What is this intern's school?",
            }
        ]).then((internInput) => {
            const newIntern = new Intern(internInput.name, internInput.id, internInput.email, internInput.school)
            employees.push(newIntern);
            console.log(newIntern);

        })
    init();
};


// engineer
async function getGitHub() {
    const engineerInput = await
        inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?",
                type: "input"
            },
            {
                type: "input",
                message: "add the employee ID number",
                name: "id",
            },
            {
                type: "input",
                message: "add the employee's email",
                name: "email",
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is this employee's GitHub?",
            }
        ]).then((engineerInput) => {
            const newEngineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.gitHub);
            employees.push(newEngineer);
            console.log(newEngineer);
        })
    init();
}
init();
// async function employeeDetails() {
//     if (employees.length < 1) {
//         console.log("add an employee before proceeding")
//         return getRole()
//     }
//     const inquirerEmployees = employees.map(Employee => {
//         return {
//             name: employees.name,
//             value: employees
//         }
//     })
//     console.log(inquirerEmployees)
//     inquirer.prompt([
//         {
//             type: "list",
//             choices: inquirerEmployees,
//             message: "which Employee?",
//             name: "employeeChoice"
//         },
//         {
//             name: "name",
//             message: "What is the employee's name?",
//             type: "input"
//         },
//         {
//             type: "input",
//             message: "add the employee ID number",
//             name: "id",
//         },
//         {
//             type: "input",
//             message: "add the employee's email",
//             name: "email",
//         },
//     ]).then(employeeDetailsAnswers => {
//         employeeDetailsAnswers.employeeChoice.employeeDetails(employeeDetailsAnswers.id, employeeDetailsAnswers.email)
//         console.log(JSON.stringify(employees, null, 2))
//         getRole();
//     })
// }