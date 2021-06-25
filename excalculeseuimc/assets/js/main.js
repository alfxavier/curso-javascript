//não criar variável global. o certo é criar uma função.

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    
    function recebeEventoForm (evento){
        evento.preventDefault();
        const peso = form.querySelector ('.peso');
        const altura = form.querySelector ('.altura');

        //const imc = peso / (altura*altura);
                       
        // if (peso > 18.5){
        //     resultado.innerHTML = `<p>${imc}</p>`;
        //     console.log(imc);
        // }else{
        //     console.log(imc);
        // };
        console.log(peso, altura)
    }  
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();
