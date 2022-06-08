/*
Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = prompt("Enter an Array: ");

console.log(arr[0]);