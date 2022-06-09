/*
secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
*/



const prompt = require("prompt-sync")({sigint: true});

let arr = JSON.parse(prompt("Enter an array: "));



if (arr.length >= 3){
    let second_char = arr[2][1];
    console.log("The second character of the third string is: " + second_char);
} else{
    console.log("Error. Array needs at least 3 items.")
}