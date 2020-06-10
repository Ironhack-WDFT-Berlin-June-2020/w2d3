# Async and Callbacks

JavaScript is a synchronous language with some asynchronous behaviours, it is executed line by line and the next line is only executed when the current line is finished.

Synchronous in this regard means one line after the other.
JavaScript is single threaded - only one thing can be done at a time.

If at a certain line there is some very time consuming code running it would stop the execution of the lines below - that would be very bad 😩
For operations that take an unpredictable amount of time we use async functionality.

#### Potentially blocking operations

* Encryption 

* Filesystem 

* Compression

Then the async function runs in the background and the rest of the code can continue to execute. 

### Example - fast enough (or inexpensive) so we don't have to make it asynchronous
```js
function getFirstElementOfArray (array) {
    return array[0];
  }
  const array = ["Madrid", "Barcelona", "Miami"];
  const firstElement = getFirstElementOfArray(array);
  console.log(firstElement); // <== Madrid
```


### Hypothetical example - this would take time and textSize would be undefined

```js
 this function would have to be async to prevent textsize to be undefined
 function readFile (file) {
     // read the file - or some other expensive operation
     return contentFile.length;
   }

   const textSize = readFile("odyssey.txt");
   console.log(textSize); // => undefined
```

### Let's look at an actual async function : setTimeout

```js
function someCallbackFunction() {
    console.log("Hey there, Ironhackers! 😎");
}
setTimeout(someCallbackFunction, 3000);
// console.log(timeoutId);
// clearTimeout(timeoutId);
console.log('runs first ⏰');
```

### If we comment in the clearTimeout we can stop the execution of the callback

### More common way to write a settimeout : 

```js
const timeoutId = setTimeout(function () {
     console.log("Hey there, Ironhackers! 😎");
}, 5000);
```

### Exercise 

#### Open this Repl

https://repl.it/@janRedmann/setTimeout-counter

```js
// change that code so that the setTimeout get's stopped if we counted to 5
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);

  counter += 1;
}

let timeoutId = setTimeout(callbackFunction, 1000);
```

#### Solution
```js
// solution for the counter
let counter = 1;
const callbackFunction = function () {
  
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter += 1;

  if (counter > 5) {
    clearTimeout(timeoutId);
  }
}

let timeoutId = setTimeout(callbackFunction, 1000);
```

#### If we want to execute something at a certain interval there is a better method: setInterval()

```js
let i = 1;
const intervalId = setInterval(function () {
    console.log(i);

    i++;

    if (i > 10) {
        clearInterval(intervalId);
    }
}, 1000);
```