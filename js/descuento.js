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
            const dniDesc = document.querySelector("#dniDesc").value;
            if (dniDesc === "" || isNaN(dniDesc) === true || (dniDesc.length != 8 && dniDesc.length != 7)) {
                alert("Ingrese un DNI válido.");
                document.querySelector("#dniDesc").value = "";//vacío el campo mal llenado o sin llenar
        }   else {
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
    generarPdf(e);
}

// --- Formulario Descuento (Roxana) -- FINAL



// --- Generacion de PDF (Roxana) -- INICIO


function generarPdf(e) {
    

// primero tengo que obtener los valores de los campos del formulario
const nombrePdf = document.querySelector("#nombreDesc").value
const dniPdf = document.querySelector("#dniDesc").value

// despues creo un nuevo documento PDF
const formDescPdf = new jsPDF();


//ahora comienzo a agregar contenido al pdf en orden descendiente

//1° agrego un titulo 

formDescPdf.text("Comprobante de descuento para el comprador:", 10, 30);

// 2° agrego el contenido de los campos al documento PDF

formDescPdf.text("Nombre:", 10, 40);
formDescPdf.text(nombrePdf, 40, 40);
formDescPdf.text("D.N.I.:", 10, 50);
formDescPdf.text(dniPdf, 40, 50);

//3° agrego detalle del descento 

formDescPdf.text("¡Felicitaciones!", 10, 70);
formDescPdf.text("Usted ha recibido un 5% de descuento.", 10, 80);
formDescPdf.text("Atte...", 10, 100);
formDescPdf.text("Arma Rodados s.r.l.", 10, 110);

//4° descargo el documento pdf

formDescPdf.save('formDesc.pdf')
    
}

// --- Generacion de PDF (Roxana) -- FINAL