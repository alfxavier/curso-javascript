//Operação ternária
// (condição) ? 'Valor para verdadeiro' : 'Valor psts falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';
console.log(nivelUsuario);

//mesma coisa que a expressão de baixo 

if (pontuacaoUsuario >= 1000){
    console.log('Usuário Vip');
} else {
    console.log('Usuário normal');
}

//setando valor
const corusuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);