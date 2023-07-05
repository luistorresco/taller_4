function mostrarNombre(nombre) {
    if (isNaN(nombre)) {
      document.getElementById('resultado').textContent = "El nombre ingresado es: " + nombre;
    } else {
      document.getElementById('resultado').textContent = "¡Ingrese un nombre válido!";
    }
  }