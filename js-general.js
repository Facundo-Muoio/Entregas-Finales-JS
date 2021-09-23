
let opcionSuscripcion = parseInt(prompt("Seleccione uno de nuestros planes para suscribirse ingresando el número de opción\n1-Digital Básico\n2-Digital Básico + Club Gol\n3-Diario de Domingo + Acceso Digital + Club Gol"));

while (opcionSuscripcion < 1 || opcionSuscripcion > 3){
    alert("El valor que usted ingresó no es válido");
    opcionSuscripcion = parseInt(prompt("Seleccione uno de nuestros planes para suscribirse ingresando el número de opción\n1-Digital Básico\n2-Digital Básico + Club Gol\n3-Diario de Domingo + Acceso Digital + Club Gol"));
}
switch (opcionSuscripcion){
    case 1: numeroMeses = parseInt(prompt("Usted eligió el plan Digital Basico, el valor de la suscripión mensual de este plan es de $100. Ingrese el número de meses que quiera suscribirse a este plan"));
    nombrePlan = "Digital Básico"
    precioPlan = 100
    pago();
    break;

    case 2: numeroMeses = parseInt(prompt("Usted eligió el plan Digital Básico + Club Gol, el valor de la suscripión mensual de este plan es de $150. Ingrese el número de meses que quiera suscribirse a este plan"));
    nombrePlan = "Digital Básico + Club Gol"
    precioPlan = 150
    pago();
    break;

    case 3: numeroMeses = parseInt(prompt("Usted eligió el plan Diario de Domingo + Acceso Digital + Club Gol, el valor de la suscripión mensual de este plan es de $200. Ingrese el número de meses que quiera suscribirse a este plan"));
    nombrePlan = "Diario de Domingo + Acceso Digital + Club Gol"
    precioPlan = 200
    pago();
    break;
}