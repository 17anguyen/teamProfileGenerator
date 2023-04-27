const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];

//Employee type selection prompts
async function getRole() {
    const employeeSelection = await
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "What employee position are we adding?",
                choices: ["Engineer", "Intern", "Manager", "View Team", "Quit"],
            }
        ])
        // .then(employeeInput => {
            switch (employeeSelection.employee){
                case "Engineer":
                    console.log("add an engineer!");
                    getGitHub();
                    break;

                case "Intern":
                    console.log("add an intern!");
                    getSchool();
                    break;

                case "Manager":
                    console.log("add a manager!");
                    getOfficeNumber();
                    break;

                case "View Team":
                    console.log(employees);
                    const html = generateHtml(employees);
                    fs.writeFile("./output/index.html",html,error => {
                        if(error){
                            console.log(error);
                        }
                    })
                    getRole();
                    break;

                default:
                    console.log("Seen you soon!")
                    break;
            }
        }
        // )
        .catch((error) => {
            console.log("Error:", error);
            break;
          });
// }

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
    ]).then(
        const newManager = new Manager (managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber)
        return newManager;
    ) getRole();
    }

// appending details to employees
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
    ]).then(
        const newIntern = new intern (internInput.name, internInput.id, internInput.email, internInput.school)
        return newIntern;
    ) getRole();
    }


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
    ]).then(
        const newEngineer = new engineer (engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.gitHub)
        return newEngineer;
    ) 
    getRole();
    }

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