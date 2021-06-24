//não criar variável global. o certo é criar uma função.

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector ('.nome');
        const sobrenome = form.querySelector ('.sobrenome');
        const peso = form.querySelector ('.peso');
        const altura = form.querySelector ('.altura');
       
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        resultado.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value} Kg, Altura: ${altura.value} m.</p>`;
        console.log(pessoas);
    } 

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();