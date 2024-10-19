precio = 400000
cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

valorTotal = document.querySelector(".valor-total");


cantidadSpan =document.querySelector(".cantidad")
cantidadSpan.innerHTML = cantidad

function sumar(){
    cantidad++;
    ActualizarPrecio();
    ActualizarCantidad();
}

function restar() {
    if(cantidad >0){
         cantidad--;
        ActualizarPrecio();
        ActualizarCantidad();
     }
 }

function ActualizarPrecio(){
    valorTotal.innerHTML = cantidad * precio
}

function ActualizarCantidad(){
    cantidadSpan.innerHTML = cantidad
}


