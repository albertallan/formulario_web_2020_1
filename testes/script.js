function calcular() {
    var n1 = parseInt(document.getElementById('numero1').value, 10);
    var n2 = parseInt(document.getElementById('numero2').value, 10);
    var soma = n1+n2;

    //alert('A Soma dos valores é: ' + soma)

    resultado.innerHTML = "Soma:" + soma;
    return false;
    //var elemh1 = document.createElement('h1');
    //elemh1.innerHTML = "TESTE H1";
    //document.getElementById('resultado').appendChild(elemh1);
}