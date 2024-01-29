#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
console.log(chalk.cyanBright(" Develp by Hassan Sheikh"))

var answer = await inquirer.prompt([ 
    {
        type:"input",
        name:"userId",
        message:"Kindly enter your Id"
    },
    {
        type:"number",
        name:"userPin",
        message:"Kindly enter your pin"
    },{
        type:"list",
        name:"accountType",
        choices:["saving","current"],
        message:"select your account type: "
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fast cash","withdraw"],
        message:"select your transaction",
        when(answer){
            return answer.accountType
        }
    },
    {
        type:"list",
        name:"amount",
        choices:[1000,2000,5000,10000],
        message:"select your amount",
        when(answer){
            return answer.transactionType=="Fast cash"
        }
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your amount",
        when(answer){
            return answer.transactionType=="withdraw"
        }
    }
])
if(answer.userId && answer.userPin){
    var balance =500000
    console.log("Previous Balance:",balance)
    var EnterAmount=answer.amount
    if(balance >=EnterAmount){
        var remining = balance - EnterAmount
        console.log("Your remining balance ",remining)
    }else{
        console.log(`Insufficet Balance`)
    }
}