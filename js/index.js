//script para el form de contacto (Ariel) INICIO//

let d = document;

let btn = d.getElementById('btn_submit');

let form = d.getElementById('contact_form');

let datosRecibidos = d.getElementById('recepcion_datos')
form.addEventListener('submitDesc', enviarForm);

function enviarForm(e) {
    e.preventDefault();

let formInfo = new FormData(form);


let inputname = formInfo.get('name_input');
let email = formInfo.get('email_input');
let tArea = formInfo.get('area');

datosRecibidos.textContent = `el cliente: ${inputname} email: ${email} deja su comenteario ${tArea}`;
alert("Gracias por contactarnos, le responderemos a la brevedad")
form.reset()
}

//script para el form de contacto (Ariel) FINAL//





// --- Formulario Descuento (Roxana) -- INICIO

//creo eventeo escuchar boton

const formDesc = document.querySelector("#formDesc");



formDesc.addEventListener("enviarFormDesc", validarformDesc)

//creo funcion para generar y mostrar descuento

function validarformDesc(e){
    e.preventDefault();
    const nombreDesc = document.querySelector("#nombreDesc").value
    const dniDesc = document.querySelector("#dniDesc").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `¡Felicitaciones ${nombreDesc} !  Ganaste un descuento del 5% en tu próximo servicio.  Sólo presentando tu dni nro: ${dniDesc} y nombrando el siguiente código: CUPON ${Math.random() * 100000000000000000}`
}

// --- Formulario Descuento (Roxana) -- FIN