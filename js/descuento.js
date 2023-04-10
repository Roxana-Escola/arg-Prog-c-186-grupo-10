// --- Formulario Descuento (Roxana) -- INICIO

//creo eventeo escuchar boton

const formDesc = document.querySelector("#formDesc");

formDesc.addEventListener("submit", validarformDesc)

//creo funcion para generar y mostrar descuento

function validarformDesc(e){
    e.preventDefault();
    const nombreDesc = document.querySelector("#nombreDesc").value
    const dniDesc = document.querySelector("#dniDesc").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `¡Felicitaciones ${nombreDesc} !  Ganaste un descuento del 5% en tu próximo servicio.  Sólo presentando tu dni nro: ${dniDesc} y nombrando el siguiente código: CUPON ${Math.random() * 100000000000000000}`
}

// --- Formulario Descuento (Roxana) -- FIN