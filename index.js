
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`C to F: ${celciusToFahrenheit(0)}`);

import getPosts, {getPostsLength} from "./postContoller.js";

console.log(getPosts());

console.log(`Post Length: ${getPostsLength()}`);

