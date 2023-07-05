function solicitarInformacion() {
    var numProductos = parseInt(prompt("Ingrese el número de productos:"));
    var productos = [];

    for (var i = 1; i <= numProductos; i++) {
      var nombre = prompt("Ingrese el nombre del Producto " + i + ":");
      var valor = parseFloat(prompt("Ingrese el valor del Producto " + i + ":"));
      var cantidad = parseInt(prompt("Ingrese la cantidad del Producto " + i + ":"));

      var producto = {
        nombre: nombre,
        valor: valor,
        cantidad: cantidad
      };

      productos.push(producto);
    }

    imprimirInformacion(productos);
  }

  function imprimirInformacion(productos) {
    var totalMercado = 0;
    var mensaje = "";

    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var subtotal = producto.valor * producto.cantidad;

      totalMercado += subtotal;

      mensaje += (i + 1) + " - " + producto.nombre + " $" + producto.valor.toFixed(2) + " x " + producto.cantidad + " = $" + subtotal.toFixed(2) + "\n";
    }

    mensaje += "-----------------------------------\n";
    mensaje += "Total Mercado: $" + totalMercado.toFixed(2);

    alert(mensaje);
  }