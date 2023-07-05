function calcularSuperficie(ancho, alto) {
    var superficie = ancho * alto;
    return superficie;
  }

  function mostrarSuperficie() {
    var anchoRectangulo = parseInt(document.getElementById('ancho').value);
    var altoRectangulo = parseInt(document.getElementById('alto').value);

    var superficieRectangulo = calcularSuperficie(anchoRectangulo, altoRectangulo);

    document.getElementById('resultado').innerHTML = "La superficie del rectángulo es: " + superficieRectangulo;
  }