// capturar elementos html <input> en variables
const precio = document.querySelector("#precio-etiqueta");
console.log(precio);

const discount = document.querySelector("#descuento");

// capturar elementos html <button> en variables (escuchador de evento)
const botonCalcular = document.querySelector(".button-calcule");

botonCalcular.addEventListener("click", calcularDescuento);

// capturar elemento html para mostrar el descuento
const resultadoFinal = document.querySelector(".resultado");

// capturar elemento html para mostrar advertencia
const resultadoFinalAdv = document.querySelector(".advertencia");

function calcularDescuento(){
    const precioInteger = parseInt(precio.value);
    const discountInteger = parseInt(discount.value);
    if (discountInteger>40){
			return resultadoFinalAdv.innerHTML = "El descuento máximo es 40%."
		} else if(!precioInteger ||!discountInteger){
			return resultadoFinalAdv.innerHTML = "Ingrese el precio o descuento para efectuar el cálculo."
		} else{
			return resultadoFinal.innerHTML = 
			"Su precio con dcto. es " + (precioInteger*(100-discountInteger))/100 + " $";
		}
};



