// André Xavier tem 37 anos, pesa 92kg, tem 1.76 metros de altura e seu IMC é de xxxx
// André Nasceu em 1984

const nome = 'André';
const sobrenome = 'Xavier';
const anoNascimento = 1984;
const peso = 92;
const altura = 1.76;
let imc; // peso/(altura*altura)
let today = new Date();
today = today.getFullYear();
const idade = today - anoNascimento;
imc = peso/(altura * altura);
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "KG, tem", altura, "metros de altura e seu IMC é de", imc.toFixed(2) + "." );
console.log(nome, sobrenome, "nasceu em", anoNascimento +".");

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem ${altura} metros de altura e seu IMC é de ${imc.toFixed(2)}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`); // forma mais legivél de trabalhar e mais moderna conforme professor.
