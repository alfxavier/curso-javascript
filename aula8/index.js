// André Xavier tem 37 anos, pesa 92kg, tem 1.76 metros de altura e seu IMC é de xxxx
// André Nasceu em 1984

const nome = 'André';
const sobrenome = 'Xavier';
const idade = 37;
const peso = 92;
const altura = 1.76;
let imc; // peso/(altura*altura)
let anoNascimento; 
let today = new Date();
today = today.getFullYear();

anoNascimento = today - idade;
imc = peso/(altura * altura);
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "KG, tem", altura, "metros de altura e seu IMC é de", imc + "." );
console.log(nome, sobrenome, "nasceu em", anoNascimento +".");

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem ${altura} metros de altura e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
