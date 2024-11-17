function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!date) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e){
    //trtar erro aqui. Ex. enviar para log
}finally {
    console.log('Tenha um bom dia');
}