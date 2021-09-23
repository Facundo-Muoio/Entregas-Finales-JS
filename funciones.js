// Funcion principal que se encarga de recolectar todos los datos de la suscripcion para luego mostrarle un resumen del mismo detallando: 
// el nombre del plan y la cantidad de meses que se suscribe como su costo final y la forma que utilizo para pagarlo.

function pago(){
    while(numeroMeses < 0){
        numeroMeses = parseInt(prompt("El valor que usted ingresó no es valido, Ingrese un número válido"));
    }
    metodoPago = parseInt(prompt("seleccione la opción de método de pago que desea para su suscripción\n1-Tarjeta de crédito o débito\n2-Paypal\n3-Mercadopago\n4-Pago fácil o Rapi pago"));
    switch(metodoPago){
        case 1: numeroTarjeta = prompt("Ingrese los 4 últimos números de su tarjeta de crédito o débito:");
        while(numeroTarjeta > 9999 || numeroTarjeta < 0){
            numeroTarjeta = parseInt(prompt("El número de su tarjeta no es válido. Ingrese un número de  tarjeta de crédito o débito válido:"));
        }
        codigoSeguridad = parseInt(prompt("Ingrese los tres dígitos que corresponden al código de seguridad en el reverso de su tarjeta"));
        while(codigoSeguridad > 999 || codigoSeguridad < 0){
            codigoSeguridad = parseInt(prompt("El código de seguridad de su tarjeta no es válido. Ingrese el código de seguridad de 3 dígitos que figura en el reverso de su tarjeta"));
        }
        diaDeVencimiento = parseInt(prompt("Ingrese el día de vencimiento de la tarjeta"));
        while(diaDeVencimiento > 31 || diaDeVencimiento < 0){
            diaDeVencimiento = parseInt(prompt("El día ingresado no es valido, reingrese el dato porfavor"));
        }
        mesDeVencimiento = parseInt(prompt("Ingrese el mes de vencimiento de la tarjeta"));
        while(mesDeVencimiento > 12 || mesDeVencimiento < 0){
            mesDeVencimiento = parseInt(prompt("El mes ingresado no es valido, reingrese el dato porfavor"));
        }
        añoDeVencimiento = parseInt(prompt("Ingrese el año de vencimiento de la tarjeta"));
        while(añoDeVencimiento < 0){
            añoDeVencimiento = parseInt(prompt("El año ingresado no es valido, reingrese el dato porfavor"));
        }
        alert("En la consola vera el resumen de su compra");
        console.log("Usted adquirió el plan " + nombrePlan + " por " + numeroMeses + " meses." + " El costo final del servicio con IVA incluido es de: " + "$" +iva(precioPlan, numeroMeses) + "\nMétodo de pago: tarjeta que termina en " + numeroTarjeta + " y vence el " + fecha(diaDeVencimiento,mesDeVencimiento,añoDeVencimiento));
    
        break;
        
        case 2:
            emailUsuario = prompt("Ingrese su mail de usuario");
            emailUsuario = comprobarUsuario(emailUsuario);
            constraseñaUsuario = prompt("Ingrese su contraseña")
            alert("En la consola vera el resumen de su compra");
            console.log("Usted adquirió el plan " + nombrePlan + " por " + numeroMeses + " meses." + " El costo final del servicio con IVA incluido es de: " + "$" +iva(precioPlan, numeroMeses) + "\nMétodo de pago: cuenta de paypal con nombre usuario de: " + emailUsuario);
        break;
    
        case 3:
            emailUsuario = prompt("Ingrese su mail de usuario");
            emailUsuario = comprobarUsuario(emailUsuario);
            constraseñaUsuario = prompt("Ingrese su contraseña")
            alert("En la consola vera el resumen de su compra");
            console.log("Usted adquirió el plan " + nombrePlan + " por " + numeroMeses + " meses." + " El costo final del servicio con IVA incluido es de: " + "$" +iva(precioPlan, numeroMeses) + "\nMétodo de pago: cuenta de mercadopago con nombre usuario de: " + emailUsuario);
        break;
        case 4:
            alert("En la consola le dejamos un link con el cual podra abonar en cualquier sucursal de Pago Fácil o Rapi Pago")
            alert("También en la consola encontrará la información de su compra")
            console.log("link Pago Fácil:https://www.pagofacil.com.ar/?gclid=CjwKCAjwy7CKBhBMEiwA0Eb7an30bGke7bXqkXeduCicm9jgNTL_miKnT9oi4RpMDKBdlM3Wt1YWfBoCBpMQAvD_BwE&gclsrc=aw.ds \nlink Rapi pago:https://hypelinkads.io/rapipago/?gclid=CjwKCAjwy7CKBhBMEiwA0Eb7aqYkahHQdRJ_YhxrrKgKo-vwe1BIHmLPV9Jlc6XREp-oY2xcjdffDhoC-10QAvD_BwE")
            console.log("Usted adquirió el plan " + nombrePlan + " por " + numeroMeses + " meses." + " Acerquese a la sucursal de Pago Fácil o Rapi Pago correspondiente con el link de pago")
    }
}

// Funcion para unir en un string los datos de la fecha de vencimiento de la tarjeta  que estan en un array 

function fecha(dia, mes, año){
    fechaVencimientoTarjeta.push(dia);
    fechaVencimientoTarjeta.push(mes);
    fechaVencimientoTarjeta.push(año);
    return fechaVencimientoTarjeta.join("/");
}

// Funcion que permite comprobar y validar si el mail de usuario que se ingresa tanto en mercadopago como en paypal contiene @ y .com

function comprobarUsuario(email){
    while (email.includes("@") === false || email.includes(".com") === false){
    email = prompt("El email ingesado no es correcto. Acuerdese que el mismo debe contar con @ y .com");
   } return email;
}

// Funcion que se utiliza para sacar el iva del %21 en la suscripcion de los planes por tarjeta y pagos digitales (paypal,mercadopago)

function iva(precio, meses){
    costoFinal = precio * meses + ((precio * meses)* 0.21);
    return costoFinal
}
