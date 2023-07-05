function convertirKilometrosAMetros(velocidadKm) {
  var velocidadMetros = velocidadKm * 1000;
  return velocidadMetros;
}

function convertirKilometrosAMillas(velocidadKm) {
  var velocidadMillas = velocidadKm / 1.60934;
  return velocidadMillas;
}

function mostrarConversion() {
  var velocidadEnKm = parseFloat(document.getElementById("velocidad").value);
  var velocidadEnMetros = convertirKilometrosAMetros(velocidadEnKm);
  var velocidadEnMillas = convertirKilometrosAMillas(velocidadEnKm);

  document.getElementById("metros").innerHTML =
    "Velocidad en metros: " + velocidadEnMetros + " m";
  document.getElementById("millas").innerHTML =
    "Velocidad en millas: " + velocidadEnMillas + " mi";
}
