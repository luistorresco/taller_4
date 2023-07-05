function pedirNombre() {
  var nombre = prompt("Por favor, ingresa tu nombre:");
  imprimirBienvenida(nombre);
}

function imprimirBienvenida(nombre) {
  var mensaje = "Bienvenido, " + nombre + "!";
  alert(mensaje);
}
