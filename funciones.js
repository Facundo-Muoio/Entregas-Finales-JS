
//Funcion que permite capturar los datos del formulario de la pagina guardarlo en un objeto dentro de un array lo mismo se pasa al localstorage para ser almacenado y luego mostrar un mensaje de bienvenida y datos de la suscripcion.

function guardarSuscripcion(e) {
    e.preventDefault();
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let dni = document.getElementById("dni").value;
    let mail = document.getElementById("mail").value;
    let sexo = document.getElementById("sexo").value;
    let pais = document.getElementById("country").value;
    let provincia = document.getElementById("prov").value;
    let localidad = document.getElementById("loc").value;
    let calle = document.getElementById("street").value;
    let numero = document.getElementById("numberStreet").value;
    let codigoPostal = document.getElementById("postalCode").value;
    let datosTarjeta = {
        titularTarjeta: document.getElementById("cardHolder").value, 
        dniTarjeta: document.getElementById("cardDni").value, 
        tarjeta: document.getElementById("card").value, 
        numeroDeTarjeta: document.getElementById("cardNumber").value, 
        mesDeVencimiento: document.getElementById("cardMonth").value, 
        añoVencimiento: document.getElementById("cardYear").value,
        codigoDeSeguridad: document.getElementById("cardPsw").value
        }

    const usuario = new Suscripcion(nombre,apellido,dni,mail,sexo,pais,provincia,localidad,calle,numero,codigoPostal,datosTarjeta);
    usuarios.push(usuario);
    localStorage.setItem("Lista usuarios",JSON.stringify(usuarios));
    obtenerDatos();
    let susAviso = document.getElementById("panelForm");
    susAviso.classList.remove("div__formSus");
    susAviso.classList.add("new__div--formSus")
    susAviso.innerHTML = `<img class="img__bienvenido" src="img/messi-saludo.jpg"><h2 class="h2__bienvenido">¡Bienvenido ${listaUsuarios[0].nombre}!</h2><p class="welcome">Su suscripción se realizo con éxito. Ahora forma parte del equipo Golprime y puede disfrutar de nuestro contenido exclusivo:
    <br><br>- Notas exclusivas <br>- Tarjeta con beneficios en diferentes negocios y servicios<br>- Todas nuestras noticias en formato pdf para ser descargadas
    <br>- Acceso a lectura offline <br>- Diario de papel en la puerta de su casa y mucho más.<br><br>A continuación le dejamos los detalles de su compra:<br><br>
    Usted adquirió nuestro plan con una tarjeta ${listaUsuarios[0].datosTarjeta.tarjeta} a nombre de ${listaUsuarios[0].datosTarjeta.titularTarjeta} cuyos dígitos son ${listaUsuarios[0].datosTarjeta.numeroDeTarjeta} y vence el mes ${listaUsuarios[0].datosTarjeta.mesDeVencimiento} del año 20${listaUsuarios[0].datosTarjeta.añoVencimiento}</p>`
    document.body.appendChild(susAviso)
}


//Funcion para obtener los datos del localstorage y poder utilizarlos.

function obtenerDatos () {
    listaUsuarios = JSON.parse(localStorage.getItem("Lista usuarios"));
}