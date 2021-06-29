const verdaderira = true;

//Let tem escopo de bloco { ... bloco}
//Var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdaderira) {
    let nome ='Otávio';
    console.log(nome, nome2);
};