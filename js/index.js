/* 
script para el form de contacto

*/

let d = document;

let btn = d.getElementById('btn_submit');

let form = d.getElementById('contact_form');

let datosRecibidos = d.getElementById('recepcion_datos')
form.addEventListener('submit', enviarForm);

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



