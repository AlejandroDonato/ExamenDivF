function mostrar()
{
    /*
    El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta
    */
let nacionalidad;
let resultado;
let edad;
let cepa;
let contTotal =0;
let contPositivos =0;
let contNegativos =0;
let porcentajePos;
let porcentajeNeg;
let contDelta =0;
let contAlfa =0;
let contBeta =0;


let menorCepa;
let menorEdadArg;
let cantExtranjerosDelta =0;
let flagMenorEdad =1;

for (let i = 1; i <= 8  ; i++) {
    nacionalidad = prompt("Ingrese nacionalidad del tripulante, argentina o extranjero").toLocaleLowerCase();
	while (!(nacionalidad == "argentina" || nacionalidad == "extranjero")){
		nacionalidad = prompt("Error, ingrese nacionalidad del tripulante, argentina o extranjero").toLocaleLowerCase();
	}
    resultado = prompt("Ingrese tipo de resultado (positivo , negativo)").toLocaleLowerCase();
	while (resultado != "positivo" && resultado != "negativo") {
		resultado = prompt("Error, ingrese tipo de resultado (positivo , negativo)").toLocaleLowerCase();
	}
	edad = parseInt(prompt("Ingrese edad del tripulante, mayor a 18 y menor a 65 años"));
	while (isNaN(edad) || (edad < 18 || edad > 65) ){
		edad = parseInt(prompt("Error, ingrese edad del tripulante, mayor a 18 y menor a 65 años"));
	}
	if (resultado == "positivo") {
        cepa = prompt("ingrese cepa del virus (delta, alfa, beta)");
        while (cepa != "delta" && cepa != "alfa" && cepa != "beta"){
            cepa = prompt(" Error, ingrese cepa del virus (delta, alfa, beta)");
        }
    }
    else{
        cepa = "ninguna";
    }
    contTotal ++;
    if (resultado == "positivo") {
        contPositivos ++;
        switch (cepa) {
            case "delta":
                contDelta++;
                break;
            case "alfa":
                contAlfa++;
                break;
            case "beta":
                contBeta++;
                break;
        }
    }
    else{
        contNegativos++;
    }
    //d- Edad del menor argentino contagiado
    if (nacionalidad == "argentina" && resultado == "positivo" && (flagMenorEdad !=0 || menorEdadArg > edad) ) {
        menorEdadArg = edad;
    }
    //e- Cantidad de personas extranjeras contagiadas con la delta
    if (nacionalidad == "extranjero" && resultado == "positivo" && cepa == "delta"  ) {
        cantExtranjerosDelta++;
    }
}

//a- Porcentaje de positivos
porcentajePos = contPositivos*100/contTotal;
//b- Porcentaje de negativos
porcentajeNeg = contNegativos*100/contTotal;

//c- Cuál es la cepa menos encontrada
if (contDelta < contAlfa && contDelta < contBeta) {
	menorCepa = "delta";
    }
    else if (contAlfa <= contDelta && contAlfa < contBeta ) {
	menorCepa = "alfa";
    }
    else{
	menorCepa = "beta";
    }


document.write("porcentaje de positivos es igual a " + porcentajePos + "% <br>" )
document.write("Porcentaje de negativos es igual a " + porcentajeNeg + "% <br>" )
document.write("La cepa menos encontrada es la " + menorCepa + "<br>")
document.write("Edad del menor argentino contagiado es de " + menorEdadArg + " años <br>" )
document.write("Cantidad de personas extranjeras contagiadas con la delta es "+ cantExtranjerosDelta +"<br>")





}
