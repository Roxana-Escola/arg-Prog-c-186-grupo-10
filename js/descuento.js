// --- Formulario Descuento (Roxana) -- INICIO



const formDesc = document.querySelector("#formDesc");//nombro form

formDesc.addEventListener("submit", validarCampos)//escucho boton y disparo funcion de validación de campos

// func validar campos - 1er paso

function validarCampos(e){
    e.preventDefault();
    const nombreDesc = document.querySelector("#nombreDesc").value;
    if (nombreDesc === "" || isNaN(nombreDesc) === false || nombreDesc.length < 5) {
        alert("Ingrese un nombre válido.");
        document.querySelector("#nombreDesc").value = "";//vacío el campo mal llenado o sin llenar
      
    } else {
        e.preventDefault();
        const dniDesc = document.querySelector("#dniDesc").value;
            if (dniDesc === "" || isNaN(dniDesc) === true || (dniDesc.length != 8 && dniDesc.length != 7)) {
                alert("Ingrese un DNI válido.");
                document.querySelector("#dniDesc").value = "";//vacío el campo mal llenado o sin llenar
        } else {
              validarformDesc(e)
            
          }
}
}

//creo funcion para generar y mostrar descuento - 2do paso

function validarformDesc(e){
    e.preventDefault();
    const nombreDesc = document.querySelector("#nombreDesc").value
    const dniDesc = document.querySelector("#dniDesc").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `¡Felicitaciones ${nombreDesc} !  Ganaste un 5% de descuento en tu próximo servicio.  Sólo presentando tu dni nro: ${dniDesc} y nombrando el siguiente código: CUPON ${Math.random() * 100000000000000000}`
}


