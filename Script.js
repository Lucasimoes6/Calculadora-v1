function clicar(num) {
    let Num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = Num + num;
}

function igual() {
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}