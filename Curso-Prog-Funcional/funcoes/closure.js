/*Closure é quando uma função "lembra"
seu escopo lexico, mesmo quando a função
é executada fora desse escopo lexico */

import * as escopo from "./closure_escopo.js";

const yPlus3 = escopo.out;
const x = 1000;

console.log(yPlus3()());
