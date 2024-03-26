#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Fist Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select Your Operator", type: "list", name: "Operator",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'], },
]);
if (answer.Operator === 'Addition') {
    console.log(`Your value is ${answer.FirstNumber + answer.SecondNumber} `);
}
else if (answer.Operator === 'Subtraction') {
    console.log(`Your value is ${answer.FirstNumber - answer.SecondNumber} `);
}
else if (answer.Operator === 'Multiplication') {
    console.log(`Your value is ${answer.FirstNumber * answer.SecondNumber} `);
}
else if (answer.Operator === 'Division') {
    console.log(`Your value is ${answer.FirstNumber / answer.SecondNumber} `);
}
else {
    console.log('please select a valid operator');
}
