const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
// const generateHtml =require("./util/generateHtml");
// const generateCSS =require("./util/generateCSS");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const employees = [];



//Employee type selection prompts
function askQuestion() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "question",
                message: "What employee position are we adding?",
                choices: ["Engineer", "Intern", "Manager", "Quit"],
            }
        ]).then(answers => {
            switch (answers.question) {
                case "Engineer":
                    console.log("add an engineer!")
                    employeeName();
                    getGitHub();
                    break;


                case "Intern":
                    console.log("add an intern!")
                    employeeName();
                    getSchool();
                    break;


                case "Manager":
                    console.log("add a manager!")
                    employeeName();
                    officeNumber();
                    break;

                default:
                    console.log("Seen you soon!")
                    break;

            }
        }).then((answer) => {
            if (answer.addEmployee) {
              promptEmployeeType();
            } else {
              fs.writeFile("index.html", generateHtml(employees), (err, data) => {
                if (err) {
                  throw err;
                }
                console.log("complete!");
              });
            }
          })
          .catch((error) => {
            console.log("Error:", error);
          });
}


// adding a new employee
function employeeName() {
    inquirer.prompt({
        name: "name",
        message: "What is the employee's name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const newName = new Employee(name);
        employees.push(newName)
        console.log(employees);
        askQuestion();
    })
}

// appending details to employees
function employeeDetails() {
    if (employees.length < 1) {
        console.log("add an employee before proceeding")
        return askQuestion()
    }
    const inquirerEmployees = employees.map(Employee => {
        return {
            name: employees.name,
            value: employees
        }
    })
    console.log(inquirerEmployees)
    inquirer.prompt([
        {
            type: "list",
            choices: inquirerEmployees,
            message: "which Employee?",
            name: "employeeChoice"
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
    ]).then(employeeDetailsAnswers => {
        employeeDetailsAnswers.employeeChoice.employeeDetails(employeeDetailsAnswers.id, employeeDetailsAnswers.email)
        console.log(JSON.stringify(employees, null, 2))
        askQuestion();
    })
}

function getSchool() {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is this intern's school?",
        }
    ]).then(employeeDetailsAnswers => {
        employeeDetailsAnswers.employeeChoice.employeeDetails(employeeDetailsAnswers.id, employeeDetailsAnswers.email, employeeDetailsAnswers.school)
        console.log(JSON.stringify(employees, null, 2))
        askQuestion();
    })
}

function officeNumber() {
    inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What is this employee's office number?",
        }
    ]).then(employeeDetailsAnswers => {
        employeeDetailsAnswers.employeeChoice.employeeDetails(employeeDetailsAnswers.id, employeeDetailsAnswers.email, employeeDetailsAnswers.officeNumber)
        console.log(JSON.stringify(employees, null, 2))
        askQuestion();
    })
}

function getGitHub() {
    inquirer.prompt([
        {
            type: "input",
            name: "gitHub",
            message: "What is this employee's GitHub?",
        }
    ]).then(employeeDetailsAnswers => {
        employeeDetailsAnswers.employeeChoice.employeeDetails(employeeDetailsAnswers.id, employeeDetailsAnswers.email, employeeDetailsAnswers.gitHub)
        console.log(JSON.stringify(employees, null, 2))
        askQuestion();
    })
}