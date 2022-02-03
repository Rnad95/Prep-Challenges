'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
    // write your code here

    let add = obj.reduce(function (acc, current, index) {
        return ++index;

    });
    return add;

}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------


const stringReverse = (str) => {
    // write your code here
    str = str.split(' ');
    let arrStr = "";
    const rev = str.reduce(function (acc, val, index) {

        if (index === 3)
            arrStr = arrStr + (str[str.length - 1 - index]);
        else
            arrStr = arrStr + (str[str.length - 1 - index]) + " ";

    }, 0)

    // console.log(arrStr)
    return arrStr
}



// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    // write your code here

    let arr = [];
    let res = {};
    let newObj = obj.reduce(function (acc, val, index) {
        arr.push(val.votes_To)

    }, 0)
    const count = {};
    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    return count;
}



module.exports = { objectCounter, stringReverse, statistics };

