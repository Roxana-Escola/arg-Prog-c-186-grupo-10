let btn_enviar_presu = document.getElementById('btn_enviar');
let form_presu = document.getElementById('presupuesto1');
form_presu.addEventListener('submit', enviar_presu);
let fullname_presu = document.getElementById('fullname');

function enviar_presu(e) {
  e.preventDefault();
  let name_presu = fullname.value;
  alert(`Gracias ${name_presu}, nos contactaremos pronto para enviarle el presupuesto`)
  form_presu.reset();
}
