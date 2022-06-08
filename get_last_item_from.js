/*
Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = JSON.parse(prompt("Enter an Array: "));

console.log(arr[arr.length -1]);