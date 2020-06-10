// example

// function getFirstElementOfArray(array) {
//     return array[0];
// }
// const array = ["Madrid", "Barcelona", "Miami"];
// const firstElement = getFirstElementOfArray(array);
// console.log(firstElement); // <== Madrid

// fast enough (or inexpensive) so we don't have to make it asynchronous


// hypothetical example

// this function would have to be async to prevent textsize to be undefined
// function readFile(file) {
//     // read the file - or some other expensive operation
//     return contentFile.length;
// }

// const textSize = readFile("odyssey.txt");
// console.log(textSize); // => undefined

function someCallbackFunction() {
    console.log("Hey there, Ironhackers! 😎");
}
let timeoutId = setTimeout(someCallbackFunction, 0);
// console.log(timeoutId);
// clearTimeout(timeoutId);
console.log('runs first ⏰');

// More common way to write a settimeout :
/*
setTimeout(function () {
    console.log("Hey there, Ironhackers! 😎");
}, 5000);
*/
















