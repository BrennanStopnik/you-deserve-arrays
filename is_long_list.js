/*
isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = JSON.parse(prompt("Enter an array: "));

if (arr.length > 9){
    console.log(true);
} else{
    console.log(false)
}