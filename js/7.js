function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var imc = peso / (altura * altura);
  var mensaje;

  if (imc < 18.5) {
    mensaje = "Bajo peso: Debe ir al nutricionista.";
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensaje = "Normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    mensaje = "Sobrepeso";
  } else if (imc >= 30.0) {
    mensaje = "Obeso: Debe ir al nutricionista.";
  }

  document.getElementById("resultadoIMC").textContent =
    "IMC: " + imc.toFixed(2);
  document.getElementById("mensaje").textContent = mensaje;
}
