'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------


const LastWord = (str) => {
    // write your code here

    str = str.slice(str.lastIndexOf(' ') + 1)
    return str;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    str = str.split(" ");
    let lastItem = str[str.length - 1]
    return lastItem;
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

//I => we   am => are was=> were
const replaceWords = (str) => {
    // write your code here

    let arr = str.split(" ");
    let str2 = "";
    for (let index = 0; index < arr.length; index++) {

        if (arr[index] === "I")
            arr.splice(index, 1, "We")

        if (arr[index] === "am")
            arr.splice(index, 1, "are")

        if (arr[index] === "was")
            arr.splice(index, 1, "were")
        str2 = arr.join(" ");
    }

    // console.log(str2);
    return str2;


}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    let str = "";
    let count = 0;
    for (let x = 0; x < arr.length; x++) {
        str = str.concat(arr[x]);
        if (x % 4 === 0 && x != 0)
            str = str.concat(',');
        if (x == arr.length - 1)
            str = str + "";
        else
            str = str + " ";


    }


    // console.log(str)
    return str;

}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here

    let count = 0;
    let arr = [];
    let str2 = ""
    for (let i = 0; i <= str.length; i++) {
        if (i === 0) {
            count++;
            arr.push(str.charAt(i))
        }
        else {
            if (str.charAt(i) === str.charAt(i - 1)) {
                count++;

            }
            else if (str.charAt(i - 1) !== " ")
                arr.push(count)

            if (str.charAt(i) === " " || str.charAt(i) !== str.charAt(i - 1)) {
                arr.push(str.charAt(i))
                count = 1;

            }
            else {
                if (str.charAt(i) !== str.charAt(i - 1))
                    arr.push(str.charAt(i))
            }

        }
    }

    arr.forEach(element => {
        str2 += element;
    })
    return str2
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };