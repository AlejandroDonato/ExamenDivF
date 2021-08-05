function mostrar()
{
/*
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, 
	Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
*/

let origen;
let cantidad;
let costo;
let menorCant;
let origenMenorCant;
let contOriente =0;
let cantOriente =0;
let contOccidente =0;
let cantOccidente =0;
let promOccidente;
let totViajes;
let totCantidad;
let descuento;

do {
	origen = prompt("Ingrese origen de las vacunas (Oriente, Occidente, Secreto)").toLocaleLowerCase();
	while (origen != "oriente" && origen != "occidente" && origen != "secreto") {
		origen = prompt("Error, ingrese origen de las vacunas (Oriente, Occidente, Secreto)").toLocaleLowerCase();
	}
	cantidad = parseInt(prompt("Ingrese cantidad de vacunas (entre 500000 y 2500000)"));
	while (isNaN(cantidad)|| (cantidad >2500000 || cantidad < 500000) ) {
		cantidad = parseInt(prompt("Error, ingrese cantidad de vacunas (entre 500000 y 2500000)"));
	}
	costo = parseInt(prompt("Ingrese costo del vuelo (entre 1 millón y 5 millones de pesos)"));
	while (isNaN(costo)|| (costo >1000000 || costo < 5000000) ) {
		costo = parseInt(prompt("Error,ingrese costo del vuelo (entre 1 millón y 5 millones de pesos)"));
	}

if (origen == "oriente") {
	cantOriente += cantidad;
	contOriente++;
}
else if (origen == "occidente"){
	cantOccidente += cantidad;
	contOccidente++;
}
totViajes += costo;
totCantidad = cantOccidente+cantOriente; 

	seguir = prompt("desea ingresar mas vuelos S/N").toLocaleLowerCase();
} while (seguir == "s");


if (contOccidente > contOriente ) {
	menorCant = contOriente;
	origenMenorCant = "oriente";
}
else if (contOccidente < contOriente) {
	menorCant = contOccidente;
	origenMenorCant = "occidente";
}	
promOccidente = cantOccidente/contOccidente;

if (totCantidad >= 10000000) {
	descuento = 0.75;
}
else if (totCantidad >= 5000000) {
	descuento = 0.85;
}
else{
	descuento = 1
}
//a- El origen que envió menor cantidad de vacunas
document.write("El origen que envió menor cantidad de vacunas " + origenMenorCant + "<br>")
//b- El promedio por vuelo de vacunas llegadas de Occidente
document.write("El promedio por vuelo de vacunas llegadas de Occidente " + promOccidente  + "<br>")
//c- El total sin descuentos a pagar por los gastos de los viajes
document.write("El total sin descuentos a pagar por los gastos de los viajes " + totViajes + "<br>")
//d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, 
document.write("El total condescuento es de " + totViajes*descuento + "<br>")

//	Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
//	Informar si hubo descuento de cuanto fue y el importe final con descuento







}
