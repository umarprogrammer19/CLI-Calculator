#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        message: chalk.green("Enter Your First Number"),
        type: "number",
        name: "firstNumber"
    }, {
        message: chalk.green("Enter Your Second Number"),
        type: "number",
        name: "secondNumber"
    }, {
        message: chalk.green("Enter Your Opearator"),
        type: "list",
        name: "opearator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }]);
if (answer.opearator === "Addition") {
    console.log(chalk.yellow(`Your Answer is ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.opearator === "Subtraction") {
    console.log(chalk.yellow(`Your Answer is ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.opearator === "Multiplication") {
    console.log(chalk.yellow(`Your Answer is ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.opearator === "Division") {
    console.log(chalk.yellow(`Your Answer is ${answer.firstNumber / answer.secondNumber}`));
}
else {
    console.log(chalk.red("Please Enter Correct Value"));
}
