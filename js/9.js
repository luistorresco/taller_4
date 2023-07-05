function solicitarPrecios() {
  var numProductos = parseInt(prompt("Ingrese el número de productos:"));
  var precios = [];

  for (var i = 1; i <= numProductos; i++) {
    var precio = parseFloat(
      prompt("Ingrese el precio del Producto " + i + ":")
    );
    precios.push(precio);
  }

  calcularTotal(precios);
}

function calcularTotal(precios) {
  var subtotal = 0;

  for (var i = 0; i < precios.length; i++) {
    subtotal += precios[i];
  }

  var iva = subtotal * 0.19;
  var total = subtotal + iva;

  var mensaje = "Precio de cada producto:\n\n";

  for (var i = 0; i < precios.length; i++) {
    mensaje += "Producto " + (i + 1) + ": $" + precios[i] + "\n";
  }

  mensaje += "\nSubtotal: $" + subtotal.toFixed(2) + "\n";
  mensaje += "IVA (19%): $" + iva.toFixed(2) + "\n";
  mensaje += "Total a pagar: $" + total.toFixed(2);

  alert(mensaje);
}
