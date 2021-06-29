const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'},
];

for (i = 0; i < elementos.length; i++){
    const resultado = document.querySelector('.container');
    const tag = document.createElement(elementos[i].tag);
    tag.innerHTML = elementos[i].texto;
    resultado.appendChild(tag);
    console.log(elementos[i].tag);
    console.log(elementos[i].texto);

}