/*
Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = JSON.parse(prompt("Enter an array: "));

if (arr.length >= 4){
    console.log("The item at index 3 is: " + arr[3]);
} else {
    console.log("The last item in the array is: " + arr[arr.length -1]);
}