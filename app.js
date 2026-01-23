// IMPoRTING USING ES MoDULES
// import { getPosts } from "./postController.js";

// when using export default you don't need the curly braces
import getPosts, {getPostLength} from "./postController.js";


console.log(getPosts());
console.log(`Post Length: ${getPostLength()}`);

// IMPoRTING USING CoMMoN JS

// const {generateRandomNumber, celsius_to_farenhiet} = require('./utils')

// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`Celsius: ${celsius_to_farenhiet(0)}`)