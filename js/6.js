function convertirTemperatura() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var unidad = document.getElementById("unidad").value;

  var resultado;
  var mensaje;

  if (unidad === "celsius") {
    // Convertir de Celsius a Fahrenheit
    var fahrenheit = (temperatura * 9) / 5 + 32;
    resultado = fahrenheit;

    if (temperatura < 0 || fahrenheit < 32) {
      mensaje = "¡Nos congelamos!";
    } else if (
      (temperatura >= 5 && temperatura <= 15) ||
      (fahrenheit >= 33 && fahrenheit <= 50)
    ) {
      mensaje = "Está haciendo frío.";
    } else if (
      (temperatura >= 16 && temperatura <= 25) ||
      (fahrenheit >= 51 && fahrenheit <= 77)
    ) {
      mensaje = "Está templado el día.";
    } else if (temperatura > 26 || fahrenheit > 78) {
      mensaje = "Tiene fiebre o es el apocalipsis.";
    }
  } else if (unidad === "fahrenheit") {
    // Convertir de Fahrenheit a Celsius
    var celsius = ((temperatura - 32) * 5) / 9;
    resultado = celsius;

    if (temperatura < 0 || celsius < 0) {
      mensaje = "¡Nos congelamos!";
    } else if (
      (temperatura >= 33 && temperatura <= 50) ||
      (celsius >= 5 && celsius <= 15)
    ) {
      mensaje = "Está haciendo frío.";
    } else if (
      (temperatura >= 51 && temperatura <= 77) ||
      (celsius >= 16 && celsius <= 25)
    ) {
      mensaje = "Está templado el día.";
    } else if (temperatura > 78 || celsius > 26) {
      mensaje = "Tiene fiebre o es el apocalipsis.";
    }
  }

  document.getElementById("resultado").textContent = "Resultado: " + resultado;
  document.getElementById("mensaje").textContent = mensaje;
}
