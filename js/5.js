function realizarOperaciones() {
  var num1 = parseFloat(document.getElementById("numero1").value);
  var num2 = parseFloat(document.getElementById("numero2").value);

  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var division = num1 / num2;

  document.getElementById("resultadoSuma").textContent = "Suma: " + suma;
  document.getElementById("resultadoResta").textContent = "Resta: " + resta;
  document.getElementById("resultadoMultiplicacion").textContent =
    "Multiplicación: " + multiplicacion;
  document.getElementById("resultadoDivision").textContent =
    "División: " + division;
}
