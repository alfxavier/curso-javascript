/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) => não é afetado nas mudanças
os valores são copiados

Referência (mutável) - array, object, function => é afetado nas mudanças!!! os valores são lincados! passados por referência
*/ 

// let a = [1, 2, 3]; // criação do array
// let b = [...a]; // cópia valores para b
// let c = a; // linka ao valores

const a = {
    nome: 'André',
    sobrenome: 'Xavier'
};

const b = a; // faz apenas referência!

const c = {...a}; // cópia os valores de a!