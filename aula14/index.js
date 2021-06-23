//IEEE 754-2008 - problemas com números flutuantes

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //num1 = num1 + num2;
num1 += num2;
num1 += num2;


//num1 = num1.toFixed(2); //não resolve o problema!!

//num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));


console.log(num1);
console.log(Number.isInteger(num1));


// console.log(num1.toString()+num2); // tranformando numero em string.
// console.log(typeof num1);// nesse caso o num1 constinua sendo uma string.
// num1 = num1.toString();
// console.log(num1.toString(2)); //retorna um valor binario
// console.log(num1.toFixed(2));// arredonda para duas casas decimais
// console.log(Number.isInteger(num1)); // retorna true se um número for inteiro
// let temp = num1 * 'true';
// console.log(Number.isNaN(temp)); // retor true se for um NaN não é número



