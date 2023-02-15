// capturar elementos html <input> en variables
const precio = document.querySelector("#precio-etiqueta");
console.log(precio);

const cupon = document.querySelector("#cupon");
console.log(cupon.value);

// capturar elementos html <button> en variables (escuchador de evento)
const botonCalcular = document.querySelector(".button-calcule");

botonCalcular.addEventListener("click", calcularDescuento);

// capturar elemento html para mostrar el precio con descuento
const resultadoFinal = document.querySelector(".resultado");

// capturar elemento html para mostrar advertencia
const resultadoFinalAdv = document.querySelector(".advertencia");

// capturar elemento html para mostrar el descuento aplicado por el cupón

const dctoFinal = document.querySelector(".descuento-final");

// funcion que se activa al escuchar el evento de click

function calcularDescuento(){
    const precioInteger = parseInt(precio.value);
    const cuponString = cupon.value;
		if (!precioInteger || !cuponString){
			resultadoFinalAdv.innerHTML = "No deje campos en blanco"
		} else{
			switch(cuponString){
				case "VERANO 2023":
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-20))/100 + " $";
					dctoFinal.innerHTML = "Obutvo un dcto. de 20%"
		
					break;
				case "PROGRAMACION":
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-5))/100 + " $";
					dctoFinal.innerHTML = "Obutvo un dcto. de 5%"
		
					break;	
				case "JAVASCRIPT":
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-10))/100 + " $";
					dctoFinal.innerHTML = "Obutvo un dcto. de 10%"
		
					break;	
				case "FRONTEND":
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-15))/100 + " $";
					dctoFinal.innerHTML = "Obtuvo un dcto. de 15%"
					break;	
				default:
					resultadoFinal.innerHTML = "El cupón no existe";
					dctoFinal.innerHTML = "No hubo descuento"			
			}
		}
};



