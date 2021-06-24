/* 

 && -> false && true -> false "o valor mesmo" 
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
"" '' ``
null / underfined
NaN

*/

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);


// function falaOi () {
//     return 'Oi';
// }


// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi())
