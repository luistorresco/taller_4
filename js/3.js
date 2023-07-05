function calcularCircunferencia() {
  var radio = parseFloat(document.getElementById("radio").value);
  var circunferencia = 2 * Math.PI * radio;

  document.getElementById("resultadoCircunferencia").textContent =
    "La circunferencia del círculo con radio " +
    radio +
    " es: " +
    circunferencia;
}

function calcularCubo() {
  var numero = parseFloat(document.getElementById("numero").value);
  var cubo = Math.pow(numero, 3);

  document.getElementById("resultadoCubo").textContent =
    "El cubo de " + numero + " es: " + cubo;
}
