function funcionBoton1() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso1.png"

    document.getElementById("parrafo").innerHTML = "Si desea agendar una cita, haga click en el primer parrafo de abajo para empezar."
}
function funcionBoton2() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso2.png"

    document.getElementById("parrafo").innerHTML = "Elija el tipo de servicio que necesite, ingrese su nombre completo, ingrese la placa de su vehículo e ingrese su correo electrónico."
}
function funcionBoton3() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso3.png"

    document.getElementById("parrafo").innerHTML = "Elija la fecha y la hora de la cita."
}
function funcionBoton4() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso4.png"

    document.getElementById("parrafo").innerHTML = "Confirme los datos de la cita."
}
function funcionBoton5() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso5.png"

    document.getElementById("parrafo").innerHTML = "Si quiere ver el estado de su vehiculo, haga click al segundo parrafo que esta abajo."
}
function funcionBoton6() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso6.png"

    document.getElementById("parrafo").innerHTML = "Ingrese su nombre y la placa del vehiculo."
}
function funcionBoton7() {
    var imagen = document.getElementById("paso1");
    imagen.src = "paso7.png"

    document.getElementById("parrafo").innerHTML = "Listo, aqui aparece el estado de su vehiculo y los datos de la cita."
}


var color = document.getElementById("botonD");
    boton = document.getElementById("botonN");
    contador = 0;

function disponible() {
    if(contador == 0){
        boton.classlist.add("gold");
        contador = 1;
    }else{
        boton.classlist.remove("gold");
        contador = 0;
    }
}

color.addEventListener("click",disponible,true)


/* function nodisponible() {
    var color = document.getElementById("botonN");

} */

