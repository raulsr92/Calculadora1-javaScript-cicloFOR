
// capturar elementos html <input> en variables

const precio = document.querySelector("#precio-etiqueta");
console.log(precio.value);

const discount = document.querySelector("#descuento");

// capturar elementos html <button> en variables (escuchador de evento)

const botonCalcular = document.querySelector(".button-calcule");

botonCalcular.addEventListener("click", calcularDescuento);

const resultadoFinal = document.querySelector(".resultado");


function calcularDescuento(){
    const precioInteger = parseInt(precio.value);
    const discountInteger = parseInt(discount.value);
    return resultadoFinal.innerHTML = (precioInteger*(100-discountInteger))/100;
}



