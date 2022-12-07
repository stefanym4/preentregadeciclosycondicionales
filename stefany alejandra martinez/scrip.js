//algoritmo con un ciclo
//sacar cita medica por turno con cedula
for(let i=0;i<=20;i++){
     let cedula= prompt("ingresa identificacion");
     alert ("turno N°"+i+" cedula:"+ingreseiIdentifacacion);
    }


//algoritmo con condicional switch
let citas=prompt ("ingrse el dia y te daremos el horario disponible para las citas");

switch(citas){
    case"lunes";
    console.log( "las citas disponibles son de 8:00am - 9:00am");
    break;


    case"martes";
    console.log( "las citas disponibles son de 5:00am - 9:00am");
    break;


    case"miercoles";
    console.log( "las citas disponibles son de 6:00am - 4:00pm");
    break;


    case"jueves";
    console.log( "las citas disponibles son de 7:00am - 11:00am");
    break;


    case"viernes";
    console.log( "las citas disponibles son de 4:00pm - 8:00pm");
    break;
    
    case"sabado";
    case"domingo";
    console.log("no hay horario disponible");
    break;
}