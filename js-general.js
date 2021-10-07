//nos valemos de un constructor para generar el objeto con datos del usuario
class Suscripcion {
    constructor(nombre,apellido,dni,mail,sexo,pais,provincia,localidad,calle,numero,codigoPostal,datosTarjeta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.sexo = sexo;
        this.pais = pais;
        this.provincia = provincia;
        this.localidad = localidad;
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.datosTarjeta = datosTarjeta;    
    }
}

//traemos el div que contiene el form del html para realizar el evento con su funcion en cuestion. 
formSuscripcion = document.getElementById("formSus");
formSuscripcion.addEventListener("submit",guardarSuscripcion);