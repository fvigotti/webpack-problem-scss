
import './../scss/index.scss';
import './../css/style.css';


import { square } from '../js/math.js';
console.log("loaded index , square(3) = " , square(3));


export default function contact(args){
  console.log("called index function with arg : ",args);
}