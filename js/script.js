/* Author: Neyder Angarita Osorio.
		alert("Has pulsado el enlace");
*/
$(document).ready(function(){
   $("#prueba,#prueba1").click(function(evento){
		var elem =$("#formulariomayores");
		/*elem.css("display", "block");*/
		elem.show(1000);
   });
});


$(document).ready(function(){
   $("#ocultar,#guardardatos").click(function(evento){
		var elem =$("#formulariomayores");
		/*elem.css("display", "block");*/
		elem.hide(1000);
   });
});


$(document).ready(function(){
	$('#a1').tooltip ('<p id="b1">Elija el sector y subsecor que mas se aproxime al que pertenece la compañia</p>', { width: 200});
	$('#a2').tooltip ('<p id="b1">Describa de forma breve el nombre del cargo vacante e incluya palabras claves que le permitan a los candidatos conocer de qué se trata la oferta. Entre más claro sea el titulo, más ajustados serán los perfiles de los aspirantes que apliquen a la oferta</p>', { width: 200 });
	$('#a3').tooltip ('<p id="b1">Seleccione el Cargo que sera otorgado al profesional contratado, y que cumple con los requisistos necesarios para la oferta</p>', { width: 200 });
	$('#a4').tooltip ('<p id="b1">Es un elemento a tener en cuenta como politica de seleccion y una clasificancion jerárquica de los cargos</p>', { width: 200 });
	$('#a5').tooltip ('<p id="b1">Registre una Descripcion detallada de las capacidades las capacidades que debe cumplir el aspirante para aplicar al la vacante ofrecida</p>', { width: 200 });
	$('#a6').tooltip ('<p id="b1">Experiencias o habilidades en un determinado tema o trabajo desempeñado</p>', { width: 200 });
	$('#a7').tooltip ('<p id="b1">Los Sectores son la división de la actividad económica que realiza la empresa dependiendo del proceso productivo que realiza.</p>', { width: 200 });
	$('#a8').tooltip ('<p id="b1">Ingrese su correo electronico que sera utilizado como usario para el inicio de sesión </p>', { width: 200 });
	$('#a9').tooltip ('<p id="b1">Ingrese su contraseña para el inicio de sesion su cuenta podra utilizarla para ingresar cuando se verifique su cuenta </p>', { width: 200 });
	$('#a10').tooltip ('<p id="b1">Es una clasificacion mas especifica del sector en el que se desempeña la empresa</p>', { width: 200 });
	$('#a11').tooltip ('<p id="b1">Realize una descripcion de las actividades realizadas en la empresa y sus caracteristicas principales.</p>', { width: 200 });
	$('#a12').tooltip ('<p id="b1">Recuerde que el nombre de un programa no es necesariamente igual al título obtenido. Ej.: Ingeniería Industrial (programa)/Ingeniero Industrial (título) o Comercio exterior/profesional en Comercio exterior.</p>', { width: 200 });
});