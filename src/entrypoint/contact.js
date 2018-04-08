import './../scss/index.scss';
import './../css/style.css';


import { cube } from '../js/math.js';
console.log("loaded contact ," , cube(3));


export default function contact(args){
  console.log("called contact function with arg : ",args);
}