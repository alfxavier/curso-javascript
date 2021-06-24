function saudacao (nome) {
    console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`;
}

function soma (x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

// const raiz = n => n ** 0.5; //airfuction função simplificada

const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));
 
console.log(soma());

// const variavel = saudacao("André");

// console.log(variavel);