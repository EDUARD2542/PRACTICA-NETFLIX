/* Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así:
 A= suscripción $3, B= suscripción $5, C= suscripción $10; adicional el suscriptor debe pagar
 *un 10% adicional por servicio de conexión (menos el plan C, que ya lo incluye). Se desea conocer:
*a) precio a pagar por cada suscriptor
*b) porcentaje de suscriptores que no pagaron servicio decconexión
*c) cuál es el plan favorito*/

import Cl_agencia from "./agencia.js";
import Cl_suscriptores from "./suscriptores.js";

let agencia = new Cl_agencia(),
    suscriptor1 = new Cl_suscriptores(15657858,"A"),
    suscriptor2 = new Cl_suscriptores(15657859,"B"),
    suscriptor3 = new Cl_suscriptores(15657867,"C");
    

agencia.procesarSuscriptores(suscriptor1);
agencia.procesarSuscriptores(suscriptor2);
agencia.procesarSuscriptores(suscriptor3);

let salida = document.getElementById("salida");
salida.innerHTML = "RESULTADOS";

salida.innerHTML += "<br>el porcentaje de suscriptores que no pagaron servicio de conexion es" + agencia.porcSuscriptoresNoPagaron()+"%";
salida.innerHTML += "<br>el plan favorito es" +" "+ agencia.planFavorito();
salida.innerHTML += "<br>el pago por suscriptor es" + suscriptor1.pagoSuscriptor();
salida.innerHTML += "<br>el pago por suscriptor es" + suscriptor2.pagoSuscriptor();
salida.innerHTML += "<br>el pago por suscriptor es" + suscriptor3.pagoSuscriptor();