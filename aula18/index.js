//Aula Objetos

// função dentro do objeto é um método

const pessoa1 ={
    nome: "André",
    sobrenome: 'Xavier',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();







// //Criando um objeto
// function criaPessoa (nome, sobrenome, idade){
//     return{nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Andre', 'Xavier', 37);
// const pessoa2 = criaPessoa('Hugo', 'Roberto', 45);
// const pessoa3 = criaPessoa('Devid', 'Antonio', 25);

// console.log(pessoa1.sobrenome);


// const pessoa1 = {
//     nome: 'André',
//     sobrenome: 'Xavier',
//     idade: 38
// }
// console.log(pessoa1.nome);