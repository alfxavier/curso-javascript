/*
Escreva uma função que recebe um número e retorneo seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = retorna o próprio número
checar se o número é realmente um número = Retorna o próprio número 
Use a função com números de 0 a 100
*/

function teste(x){
    if (x % 3 === 0 & x % 5 === 0){
        return `FizzBuzz`;
    } else if(x % 3 === 0) {
        return 'Fizz';
    } else if(x % 5 === 0) {
        return 'Buzz';
    } else if(typeof x !== 'number'){
        return "não é número";
    } else {
        return "não é divisível por 3 ou 4";
    }
}

let i = 0;

while (i < 100){
    console.log(teste(i));
    i++;
}