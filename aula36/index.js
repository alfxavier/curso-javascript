// const frutas = ['Pera', 'Maça', 'Uva'];

const pessoa = {
    nome:'André',
    sobrenome: 'Xavier',
    idade: 30
}

console.log(pessoa['nome']);
console.log("-----------------------");
for (let i in pessoa){
    console.log(i, pessoa[i])
}

// for (let i in frutas){
//     console.log(frutas[i]);
// }