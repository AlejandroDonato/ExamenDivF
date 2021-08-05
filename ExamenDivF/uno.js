
function mostrar()
{
/*
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada
*/	

let nombre;
let edad;
let vacuna;
let	dosis;
let sexo;
let seguir;
let flagJoven =1;
//----a----
let contChina =0; 
let acumEdadChina =0; 
//----b----
let hombreMasJoven; 
let vacunaMasJoven; 
let nombreMasJoven;
//----c----
let contAmericana =0;
let contAmerMenores =0;
//----d----
let contTotalVacunados =0;
let contVacunadosUnaDosis =0;
//----e----
let contRusa =0;
let masInoculada;

do {
	nombre = prompt("Ingrese nombre del vacunado, entre 3 y 10 caracteres");
	while (!(nombre.length >= 3 && nombre.length <= 10)){
		nombre = prompt("Error, Ingrese nombre del vacunado, entre 3 y 10 caracteres");
	}
	edad = parseInt(prompt("Ingrese edad del vacunado, mayor o igual a 12 años"));
	while (isNaN(edad) || edad < 12 ){
		edad = parseInt(prompt("Error, ingrese edad del vacunado, mayor o igual a 12 años"));
	}
	if (edad < 18) {
		vacuna = "americana"
	}
	else{
		vacuna = prompt("Ingrese tipo de vacuna (rusa, china, americana)").toLocaleLowerCase();
		while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
			vacuna = prompt("Error, ingrese tipo de vacuna (rusa, china, americana)").toLocaleLowerCase();
		}
	}
	dosis = prompt("Indique si es primera o segunda dosas P/S").toLocaleLowerCase();
	while (!(dosis == "p" || dosis == "s")) {
		dosis = prompt("Error ,indique si es primera o segunda dosas P/S").toLocaleLowerCase();
	}
	sexo = prompt("Indique sexo del vacunado F/M").toLocaleLowerCase();
	while (!(sexo == "f" || sexo == "m")) {
		sexo = prompt("Error, indique sexo del vacunado F/M").toLocaleLowerCase();
	}

	switch (vacuna) {
		case "china":
			contChina ++; 
			acumEdadChina += edad;
			break;
		case "americana":
			contAmericana ++;
			if (edad < 18) {
				contAmerMenores ++; 
			}
			break;
		case "rusa":
			contRusa ++;
			break;
	}
if (sexo == "m" && (flagJoven !=0 || hombreMasJoven > edad )) {
	hombreMasJoven = edad;
	vacunaMasJoven = vacuna;
	nombreMasJoven = nombre;
	flagJoven = 0;
}
contTotalVacunados++;
if (dosis == "p") {
	contVacunadosUnaDosis ++;
}



	seguir = prompt("desea ingresar mas personas S/N").toLocaleLowerCase();	

} while (seguir == "s");

if (contChina > contAmericana && contChina > contRusa) {
	masInoculada = "China";
}
else if (contAmericana >= contChina && contAmericana > contRusa ) {
	masInoculada = "Americana";
}
else{
	masInoculada = "Rusa";
}

//a- Promedio de edad de los que se vacunaron con la china
document.write("El promediod e edad de los vacunados con la china es: "+ acumEdadChina / contChina +"<br>");
//b- Nombre y vacuna del hombre más joven
document.write("el hombre mas joven se llama " + nombreMasJoven + " y fue vacunado con la " + vacunaMasJoven +"<br>");
//c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
if (contAmericana !=0 && contAmerMenores != 0) {
	document.write("el promedio de vacuna americana que son menores es: " + contAmerMenores*100/contAmericana +"<br>");
}
//d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
if (contVacunadosUnaDosis !=0 && contTotalVacunados != 0) {
	document.write("el promedio de vacunados con una docis es: " + contVacunadosUnaDosis*100/contTotalVacunados +"<br>");
}
//e- Vacuna mas inoculada
document.write("la vacuna mas incoculada es la "+ masInoculada +"<br>");

}
