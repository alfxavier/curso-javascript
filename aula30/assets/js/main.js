

// function getDayWeekText(diaSemana) {
//     let dayWeekText;

//     switch (diaSemana) {
//         case 0:
//             dayWeekText = 'Domingo';
//             return dayWeekText;
//         case 1:
//             dayWeekText = 'Segunda-feira';
//             return dayWeekText;
//         case 2:
//             dayWeekText = 'Terça-feira';
//             return dayWeekText;

//         case 3:
//             dayWeekText = 'Quarta-feira';
//             return dayWeekText;

//         case 4:
//             dayWeekText = 'Quinta-feira';
//             return dayWeekText;

//         case 5:
//             dayWeekText = 'Sexta-feira';
//             return dayWeekText;

//         case 6:
//             dayWeekText = 'Sábado';
//             return dayWeekText;
//         default:
//             dayWeekText ="";
//             return dayWeekText;


//     }

// }

// function getMonthText(mes) {
//     let MonthText;

//     switch (mes) {
//         case 0:
//             MonthText = 'Janeiro';
//             return MonthText;
//         case 1:
//             MonthText = 'Fevereiro';
//             return MonthText;    
//         case 2:
//             MonthText = 'Março';
//             return MonthText;    
//         case 3:
//             MonthText = 'Abril';
//             return MonthText;    
//         case 4:
//             MonthText = 'Maio';
//             return MonthText;    
//         case 5:
//             MonthText = 'Junho';
//             return MonthText;    
//         case 6:
//             MonthText = 'Julho';
//             return MonthText;
//         case 7:
//             MonthText = 'Agosto';
//             return MonthText;
//         case 8:
//             MonthText = 'Setembro';
//             return MonthText;
//         case 9:
//             MonthText = 'Outubro';
//             return MonthText;
//         case 10:
//             MonthText = 'Novembro';
//             return MonthText;
//         case 11:
//             MonthText = 'Dezembro';
//             return MonthText;

//         default:
//             MonthText ="";
//             return MonthText;


//     }

// }
// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// const data = new Date();
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const min = data.getMinutes();
// const diaSemana = data.getDay();
// const mesTexto = getMonthText(mes);
// const diaNormaizado = zeroAEsquerda(dia);
// const horaNormaizada =zeroAEsquerda(hora);
// const minNormalizado = zeroAEsquerda(min);
// const diaSemanaTexto = getDayWeekText(diaSemana);

// const dataCabecalho = document.querySelector('.data');
// dataCabecalho.innerHTML = `${diaSemanaTexto}, ${diaNormaizado} de ${mesTexto} de ${ano}. ${horaNormaizada}:${minNormalizado}`;
// console.log(diaSemanaTexto, dia, mesTexto, ano, hora, minNormalizado);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'short'});
