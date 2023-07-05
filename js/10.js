function solicitarFecha() {
  var fechaActual = prompt("Ingrese la fecha actual (formato: MM/DD/AAAA):");
  calcularDiasSemanas(fechaActual);
}

function calcularDiasSemanas(fechaActual) {
  var hoy = new Date();
  var fechaIngresada = new Date(fechaActual);

  var unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día

  // Restamos la fecha actual a la fecha ingresada para obtener la diferencia en días
  var diasFaltantes = Math.round(
    (new Date(hoy.getFullYear() + 1, 0, 1) - fechaIngresada) / unDia
  );

  // Calculamos la cantidad de semanas faltantes dividiendo los días faltantes entre 7
  var semanasFaltantes = Math.floor((365 - diasFaltantes) / 7) ;

  var mensaje =
    "Faltan " +
    diasFaltantes +
    " días y " +
    semanasFaltantes +
    " semanas para terminar el año.";

  alert(mensaje);
}
