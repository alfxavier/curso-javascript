//Dados primitivos. String, number, undefined, null, boolean, symbol.

//string
const nome = 'Andre'; 
const nome1 = "Andre";
const nome2 = `Andre`;

//number
//const num1 = 10;
//const num2 = 10.7;

let nomeAluno; //undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; //nulo -> não aponta para local nenhum na memória

const boolean = true; //or false -> valor lógico

// Operados Aritméticos (+, -, /, *, **)

//+ adição e concatenação
//** potenciação
//% retorna o resto da divisão
//ordem de precedencia dos operadores arintmeticos (), **, *, /, %, +, -.

let num11 = 5;
let num22 = 10;
console.log("--------")
console.log(num11 ** num22);

//operador de incremento ++

let contador = 1;
contador++; //2
contador++;//3
contador++;//4
contador++;//5
contador++;//6

console.log(contador);

//++contador; //primeiro faz a conta depois retorna
//contador++; //executa a ação depois realiza o incremento do valor

//console.log(contador++);
//console.log(++contador);

//--contador;//decremeto
//contador--;//decremento

const passo = 2;
contador = 0
// contado = contador + passo >> contador += passo
contador += passo;
contador += passo;
contador += passo;
contador += passo;
contador += passo;
contador += passo;

console.log(contador);

//NaN -> not a number

const num1 = 10;
const num2 = parseInt('5');//convete patra inteiro
const num3 = parseFloat('5.3'); //converte para float
const num4 = Number('5.4');// identifica se é float ou inteiro e transforma string em numero

console.log(num1 + num2);
console.log(typeof num2);