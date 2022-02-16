'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let arr = str.split(" ")
    let num = Math.floor(arr.length / 2);

    return arr[num].length


}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here

    // let c = 'a'
    // console.log(c.charCodeAt(0)) //97
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // let max = Math.max(str1.length, str2.length)
    let arr = new Array(27).fill(0)
    let arr2 = new Array(27).fill(0)
    for (let i = 0; i < arr.length; i++) {
        arr[str1.charCodeAt(i) - 97]++;
        arr2[str2.charCodeAt(i) - 97]++;

    }


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false
        }
        else {

            continue;
        }
    }
    return true
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };