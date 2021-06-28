//não criar variável global. o certo é criar uma função.

function meuEscopo() {
    const form = document.querySelector('.form');
    //const resultado = document.querySelector('.resultado');


    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let imc = peso.value / (altura.value * altura.value);

        imc = imc.toFixed(2);

        if (imc > 1 && imc <= 18.8) {
            resultado.innerHTML = `<p style="color:red">IMC: ${imc}. Abaixo do peso.</p>`;
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p style="color:green">IMC: ${imc}. Peso normal.</p>`;
        } else if (imc > 24.9 && imc <= 29.9) {
            resultado.innerHTML = `<p style="color:red">IMC: ${imc}. Sobrepeso.</p>`;
        } else if (imc > 29.9 && imc <= 34.9) {
            resultado.innerHTML = `<p style="color:red">IMC: ${imc}. Obesidade grau 1.</p>`;
        } else if (imc > 34.9 && imc <= 39.9) {
            resultado.innerHTML = `<p style="color:red">IMC: ${imc}. Obesidade grau 2.</p>`;
        } else if (imc > 39.9 && imc <= 100) {
            resultado.innerHTML = `<p style="color:red">IMC: ${imc}. Obesidade grau 3.</p>`;
        } else {
            resultado.innerHTML = `<p style="color:red">Valores invalidos.</p>`;
        } 
        // console.log(peso.value)
        // console.log(altura.value)

    }
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();
