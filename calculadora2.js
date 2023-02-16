// Capturar el precio ingresado por usuario
const precio = document.querySelector("#precio-etiqueta");
console.log(precio);

// Capturar el cupón ingresado por usuario
const cupon = document.querySelector("#cupon");
console.log(cupon.value);

// Capturar el boton de CALCULAR y agregarle el evento de click
const botonCalcular = document.querySelector(".button-calcule");
botonCalcular.addEventListener("click", calcularDescuento);

// Capturar el boton de LIMPIAR y agregarle el evento de click
const botonClean = document.querySelector(".reset")
botonClean.addEventListener("click", limpiarFormulario);

// Capturar elemento html para mostrar el precio con descuento
const resultadoFinal = document.querySelector(".resultado");
console.log(resultadoFinal);

// Capturar elemento html para mostrar advertencia
const resultadoFinalAdv = document.querySelector(".advertencia");

// Capturar elemento html para mostrar el descuento aplicado por el cupón
const dctoFinal = document.querySelector(".descuento-final");

// Crear un array que contenga objetos (1 objeto = 1 cupon)

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

// Funcion que se activa al escuchar el evento de click del botón "APLICAR CUPON"

function calcularDescuento(){
	// Cada vez que hay un nuevo click, refresca los campos
		resultadoFinal.innerHTML = "";
		dctoFinal.innerHTML= "";
	
	// Capturar solo los valores del precio y el cupon para poder trabajar con ellos
		const precioInteger = parseInt(precio.value);
		const cuponString = cupon.value;
	
	// Establecer un estado para los elementos que muestran información al usuario para evitar 
	// superposición de información al momento de la interacción
		const isResultadoFinalClosed = resultadoFinal.classList.contains("inactive");
		const isAdvertenciaClosed = resultadoFinalAdv.classList.contains("inactive");
		const isDctoFinalClosed = dctoFinal.classList.contains("inactive");

		// Condicional para mostrar mensaje en caso se deje un campo en blanco	
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

			// en caso no hay un campo en blanco, se procede a recorrer el array de los cupones

			for (let i=0; i<cupones.length;i++){
				console.log(cupones.length)
				console.log(cupones[i]);
				
				if(cuponString==cupones[i].nombre){
					resultadoFinal.innerHTML = "Su precio con dcto. es " + (precioInteger*(100-(cupones[i].descuento)))/100 + " $";
					console.log(cupones[i].descuento);
					dctoFinal.innerHTML = "Obtuvo un dcto. de" + " " + (cupones[i].descuento) + " "+ "%";
				} 
			}
			console.log(resultadoFinal);


			// Condicional para el caso en que el cupón sea uno no existente. Quiere decir que si luego del ciclo FOR
			// ninguno cupon ingresado por el usuario coincide con los cupones del array, se mostrará un mensaje que el 
			// cupón no existe

			if (resultadoFinal.innerHTML==""){
				resultadoFinal.innerHTML = "El cupón " + cuponString+ " no tiene descuento";
				dctoFinal.innerHTML = "0"
			}
			console.log(resultadoFinal.innerHTML);

		}
	}

// Funcion que se activa al escuchar el evento de click del botón "LIMPIAR"

function limpiarFormulario(){
	resultadoFinal.classList.add("inactive");
	resultadoFinalAdv.classList.add("inactive");
	dctoFinal.classList.add("inactive");
}
