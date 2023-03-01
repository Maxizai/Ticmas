document.getElementById('sumar').addEventListener('click', function(){
    let nuemroA = document.getElementById('numero1').value;

    console.log('El valor del número A es' + nuemroA);
    let nuemroB = document.getElementById('numero2').value;
    console.log('El valor del número B es' + nuemroB);
    let resultado = sumar(parseInt(nuemroA) + parseInt(nuemroB));
    console.log('El resuldado de la suma es:' + resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('ContenedorResultado').style.display = 'block';
})

function sumar(a,b){
    return a + b;
};
