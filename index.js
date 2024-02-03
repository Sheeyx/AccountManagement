//Module package Core
// let a = 0;
// setInterval(function(){
//     if(a!==5){
//         a++;
//         console.log(a);`
//     }
// },1000)


// setTimeout(function(){
//     console.log("ishga tushdi");
// },5000);

// const fs = require("fs");
// const data = fs.readFileSync("./input.txt","utf-8");
// console.log(data);

// console.log("-------------");

// fs.writeFileSync("./input.txt",`${data} \n\t\t by Sheeyx`);
// const newData = fs.readFileSync("./input.txt","utf-8");
// console.log(newData);

//Module package External

//Moment
// const moment = require("moment");

// setInterval(()=>{
//     const time = moment().format("");
//     console.log(`Hozirgi vaqt: ${time}`);
// },5000)

// Inquirer

// const inquirer = require("inquirer");
// inquirer
//     .prompt([{type: "input",name:'raqam',message: "raqamni kiriting?"}])
//     .then((answer) => {
//         console.log("men kiritgan raqam qiymati",answer.raqam);
//     })
//     .catch((err)=>console.log(err));

// Validator

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// const test = validator.isInt("ab");
// const test = validator.isIP("2001:4860:7:40e::ff");
// console.log("test:", test);

// UUID

// const {v4: uuidv4} = require("uuid");
// const random = uuidv4();
// console.log("random", random);

// // Chalk
//  const chalk = require('chalk');
// const log = console.log;

// // log(chalk.blue("hello") + random + chalk.red("!"));
// log(chalk.blue("uuid creates ",random));

//Module package File

// const calculate = require("./hisob.js");

// const result = calculate.kopaytirish(80,20);


// const result2 = calculate.ayrish(80,20);


// const result3 = calculate.qoshish(70,20);

// console.log("Natija: ",result);
// console.log("Natija: ",result2);
// console.log("Natija: ",result3);

// console.log(require("module").wrapper);

const Account = require("./account");
Account.tellMeAboutClass();


console.log("===========")
const myAccount = new Account("Sheeyx", 200000, 9374324324234);
myAccount.giveMeDetails();
myAccount.makeDeposit(300000);

//Bugatti Chiyron 2.4mln usd

myAccount.withdrawMoney(400000);    

