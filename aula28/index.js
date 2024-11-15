// aula date
// const data = new Date();

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //mes começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Segundo', data.getSeconds());// 0 - Domingo e 6 -Sábado
// console.log('Dia da Semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`; 
}

const data = new Date();
const dataFormatoBrasil = formataData(data);
console.log(dataFormatoBrasil);
