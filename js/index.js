//script para el form de contacto (Ariel) INICIO//

// NO CAMBIAR NADA DE ESTE FORM, POR FAVOR

let d = document;

let btn = d.getElementById('btn_submit');

let form = d.getElementById('contact_form');

// let datosRecibidos = d.getElementById('recepcion_datos')
form.addEventListener('submit', enviarForm);

let name_input = d.getElementById('name_input');
let email_input = d.getElementById('email_input')
let tArea = d.getElementById('area')

function enviarForm(e) {
    e.preventDefault();

// let formInfo = new FormData(form);

// let inputname = formInfo.get('name_input');
// let email = formInfo.get('email_input');
// let tArea = formInfo.get('area');

// Segunda forma de hacerlo

let inputname = name_input.value;
let email = email_input.value;
let coment = tArea.value;


// ESTO SOLO SE MUESTRA POR CONSOLA POR EL MOMENTO

console.log(`el cliente: ${inputname} 
email: ${email} 
deja su comenteario: ${coment}`);
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