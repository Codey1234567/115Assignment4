const prompt = require('prompt-sync')();

// EXERCISE 1
/*
function randomArray() {
    let randomNumber = Math.floor(Math.random() * 9) + 2;
    let rndarr = [];
    for (let i = 0; i < randomNumber; i++) {
        let rndint = Math.floor(Math.random() * 99) + 1;
        rndarr.push(rndint);
    }
    console.log(rndarr);
    return rndarr;
}

function deleteEven(arr) {
    let noEven = arr
    for (let i = noEven.length; i >= 0; i--) {
        if (noEven[i] % 2 === 0) {
            noEven.splice(i, 1);
        }
    }
    console.log(noEven);
}

deleteEven(randomArray());

*/


// EXERCISE 2
/*

var arr = [5, 4, 6, 5, 7, 8, 6, 9, 15, 14, 14, 15, 12, 14];
function deleteDuplicate() {
    let set = new Set(arr);
    console.log(set);
}
deleteDuplicate();

*/

// EXERCISE 3
/*

function checkArray(arr, num) {
    if (arr.indexOf(num) === -1) {
        return false;
    } else {
        return true;
    }
}

let arr = [5, 4, 6, 5, 7, 8, 6, 9, 15, 14, 14, 15, 12, 14];
console.log(checkArray(arr, 2));

*/

// EXERCISE 4
/*

let arr = [120, 115, 111];
let arr2 = [];
let map = new Map([]);
    for (i = 0; i < arr.length; i++) {
        arr2[i] = String.fromCharCode(arr[i]);
        map.set(arr[i], arr2[i]);
    }
console.log(map);

*/