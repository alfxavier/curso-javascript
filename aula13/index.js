// as stringues são idexadas ou seja começa por 0 depois 1 e assim sucetivamente...

let umaString = "Um \"texto\"";// caracter de escape
let barra = "Um \\texto";//quando for usar texto usar duas barras

//formas de concatenação

console.log(umaString.concat(' EM UM LIDO DIA.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`);