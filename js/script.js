/* Author: Neyder Angarita Osorio.
		alert("Has pulsado el enlace");
*/
$(document).ready(function(){
   $("#prueba,#prueba1").click(function(evento){
		var elem =$("#formulariomayores");
		var elem1 =$("#prueba");
		/*elem.css("display", "block");*/
		elem.show(1000);
		elem1.hide(1000);
   });
});

$(document).ready(function(){
   $("#ocultar,#guardardatos").click(function(evento){
		var elem =$("#formulariomayores");
		var elem1 =$("#prueba");
		/*elem.css("display", "block");*/
		elem.hide(1000);
		elem1.show(1000);
   });
});

/*****************EDUCACIÓN FORMAL*********************************/

$(document).ready(function(){
   $("#estudioformal,#modificar_estudio").click(function(evento){
		var elem =$("#formularioformal");
		var elem1 =$("#estudioformal");
		elem.show(1000);
		elem1.hide(1000);
   });
});


$(document).ready(function(){
   $("#Cancelar_fomal,#guardar_formal").click(function(evento){
		var elem =$("#formularioformal");
		var elem1 =$("#estudioformal");
		elem.hide(1000);
		elem1.show(1000);
   });
});

/*****************FORMAL*********************************/



$(document).ready(function(){
	$('#mensaje_sector').tooltip ('<p id="b1">Elija el sector y subsecor que mas se aproxime al que pertenece la empresa</p>', { width: 200});
	$('#mensaje_nivel').tooltip ('<p id="b1">Seleccione el nivel del cargo que mas se ajuste a su nivel profesional</p>', { width: 200 });
	$('#mensaje_cargo').tooltip ('<p id="b1">En este campo se de elegir el nombre del cargo que mas se ajuste a laso estandares del mercado. Ej: Gerente de talento humano por Gerente(cargo Equivalente). </p>', { width: 200 });
	$('#mensaje_funciones').tooltip ('<p id="b1">Es un campo de mucha importancia, permite a las empresas conocer que labores y proyectos se desarrollaron y que metas se cumplieron en cada cargo para dar una idea de su potencial</p>', { width: 200 });
	$('#mensaje_estado_estudios').tooltip ('<p id="b1">Seleccione el estado en el que se encuentran sus estudios. Puede seleccionar entre Culminado, En curso, Abandonado o Aplazado</p>', { width: 200 });


	$('#a5').tooltip ('<p id="b1">Registre una Descripcion detallada de las capacidades las capacidades que debe cumplir el aspirante para aplicar al la vacante ofrecida</p>', { width: 200 });
	$('#a6').tooltip ('<p id="b1">Experiencias o habilidades en un determinado tema o trabajo desempeñado</p>', { width: 200 });
	$('#a7').tooltip ('<p id="b1">Los Sectores son la división de la actividad económica que realiza la empresa dependiendo del proceso productivo que realiza.</p>', { width: 200 });
	$('#a8').tooltip ('<p id="b1">Ingrese su correo electronico que sera utilizado como usario para el inicio de sesión </p>', { width: 200 });
	$('#a9').tooltip ('<p id="b1">Ingrese su contraseña para el inicio de sesion su cuenta podra utilizarla para ingresar cuando se verifique su cuenta </p>', { width: 200 });
	$('#a10').tooltip ('<p id="b1">Es una clasificacion mas especifica del sector en el que se desempeña la empresa</p>', { width: 200 });
	$('#a11').tooltip ('<p id="b1">Realize una descripcion de las actividades realizadas en la empresa y sus caracteristicas principales.</p>', { width: 200 });
	$('#a12').tooltip ('<p id="b1">Recuerde que el nombre de un programa no es necesariamente igual al título obtenido. Ej.: Ingeniería Industrial (programa)/Ingeniero Industrial (título) o Comercio exterior/profesional en Comercio exterior.</p>', { width: 200 });
});