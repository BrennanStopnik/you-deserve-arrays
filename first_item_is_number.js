/*
firstItemIsNumber.js: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number
*/


const prompt = require("prompt-sync")({sigint: true});

let arr = JSON.parse(prompt("Enter an array: "));

if (arr[0] === Number){
    console.log("The first item in the array is a number:", true)
} else{
    console.log("The first item in the array is a number:", false)
}