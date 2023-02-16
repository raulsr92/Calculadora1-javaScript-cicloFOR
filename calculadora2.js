// capturar elementos html <input> en variables
const precio = document.querySelector("#precio-etiqueta");
console.log(precio);

const cupon = document.querySelector("#cupon");
console.log(cupon.value);

// capturar elementos html <button> en variables (escuchador de evento)
const botonCalcular = document.querySelector(".button-calcule");

botonCalcular.addEventListener("click", calcularDescuento);

// capturar elemento html del botón LIMPIAR

const botonClean = document.querySelector(".reset")

botonClean.addEventListener("click", limpiarFormulario);


// capturar elemento html para mostrar el precio con descuento
const resultadoFinal = document.querySelector(".resultado");
console.log(resultadoFinal);

// capturar elemento html para mostrar advertencia
const resultadoFinalAdv = document.querySelector(".advertencia");

// capturar elemento html para mostrar el descuento aplicado por el cupón

const dctoFinal = document.querySelector(".descuento-final");

// crear un array que contenga objetos

const cupones=[];

cupones.push({
	nombre:"VERANO 2023",
	descuento: 20
});

cupones.push({
	nombre:"PROGRAMACION",
	descuento: 5
});

cupones.push({
	nombre:"JAVASCRIPT",
	descuento: 10
});

cupones.push({
	nombre:"FRONTEND",
	descuento: 15
});

console.log(cupones);

// funcion que se activa al escuchar el evento de click

/*
function calcularDescuento(){	
	function algoritmo(element){
		const precioInteger = parseInt(precio.value);
		const cuponString = cupon.value;
		if (!precioInteger || !cuponString){
			resultadoFinalAdv.innerHTML = "No deje campos en blanco porfavor"
		} else{
			switch(cuponString){
				case element.nombre:
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-element.descuento))/100 + " $";
					dctoFinal.innerHTML = "Obutvo un dcto. de" + " " + element.descuento + " "+ "%";
					break;
				default:
					resultadoFinal.innerHTML = "El cupón " + cuponString+ " no tiene descuento";
					dctoFinal.innerHTML = "0"		
			}
			}
		};
		cupones.forEach(algoritmo);
};
*/
function calcularDescuento(){
		// Cada vez que hay un nuevo click, refresca los campos
		resultadoFinal.innerHTML = "";
		dctoFinal.innerHTML= "";

		const precioInteger = parseInt(precio.value);
		const cuponString = cupon.value;
		const isResultadoFinalClosed = resultadoFinal.classList.contains("inactive");
		const isAdvertenciaClosed = resultadoFinalAdv.classList.contains("inactive");
		const isDctoFinalClosed = dctoFinal.classList.contains("inactive");

		if (!precioInteger || !cuponString){
			if(!isResultadoFinalClosed){
				resultadoFinal.classList.add("inactive");
			}
			if(!isDctoFinalClosed){
				dctoFinal.classList.add("inactive");
			}
			if(isAdvertenciaClosed){
				resultadoFinalAdv.classList.remove("inactive");
			}

			resultadoFinalAdv.innerHTML = "No deje campos en blanco"
			
		} else{
			if(!isAdvertenciaClosed){
				resultadoFinalAdv.classList.add("inactive");
			}
			if(isDctoFinalClosed){
				dctoFinal.classList.remove("inactive");
			}
			if(isResultadoFinalClosed){
				resultadoFinal.classList.remove("inactive");
			}

			for (let i=0; i<cupones.length;i++){
				console.log(cupones.length)
				console.log(cupones[i]);
				
				if(cuponString==cupones[i].nombre){
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-(cupones[i].descuento)))/100 + " $";
					console.log(cupones[i].descuento);
					dctoFinal.innerHTML = "Obutvo un dcto. de" + " " + (cupones[i].descuento) + " "+ "%";
				} 
			}
			console.log(resultadoFinal);

			if (resultadoFinal.innerHTML==""){
				resultadoFinal.innerHTML = "El cupón " + cuponString+ " no tiene descuento";
				dctoFinal.innerHTML = "0"
			}
			console.log(resultadoFinal.innerHTML);

		}
	}

// función para el botón limpiar

function limpiarFormulario(){
	resultadoFinal.classList.add("inactive");
	resultadoFinalAdv.classList.add("inactive");
	dctoFinal.classList.add("inactive");
}
