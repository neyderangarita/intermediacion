/* Author: Neyder Angarita Osorio.
		alert("Has pulsado el enlace");
*/
/************mostrar*****************************/
$(document).ready(function(){
   $(".boton_expandir,.ocultar,.agregar").click(function(evento){	
		var formularioexperiencia = $("#formularioexperiencia");
		var formularioformal = $("#formularioformal");
		var formularioidioma = $("#formularioidioma");
		var formularionoformal = $("#formularionoformal");
		var formulariopublicacion = $("#formulariopublicacion");
		var text = $(this).text();

		if (text == 'Agregar experiencia'){
			formularioexperiencia.show(1000);
			$(".boton_expandir").hide(1000);
		}

		if (text == 'Agregar otro estudio'){
			formularioformal.show(1000);
			$(".boton_expandir").hide(1000);
		}
		if (text == 'Agregar otro idioma'){
			formularioidioma.show(1000);
			$(".boton_expandir").hide(1000);
		}			
		if (text == 'Agregar Educacion no formal'){
			formularionoformal.show(1000);
			$(".boton_expandir").hide(1000);
		}		
		if (text == 'Agregar Publicacion'){
			formulariopublicacion.show(1000);
			$(".boton_expandir").hide(1000);	
		}

		if (text == 'Cancelar'){
			formularioexperiencia.hide(1000);
			formularioformal.hide(1000);
			formularioidioma.hide(1000);
			formularionoformal.hide(1000);
			formulariopublicacion.hide(1000);
			$(".boton_expandir").show(1000);
		}

		if (text == 'Agregar'){
			formularioexperiencia.hide(1000);
			formularioformal.hide(1000);
			formularioidioma.hide(1000);
			formularionoformal.hide(1000);
			formulariopublicacion.hide(1000);
			$(".boton_expandir").show(1000);
		}

   });
});

$(document).ready(function(){
   $(".inicializar").click(function(evento){	
		$('#myModal').modal('show');
});

});

$(document).ready(function(){
   $(".inicializar2").click(function(evento){	
		$('#myModal1').modal('show');
});

});



$(document).ready(function(){
   $(".oferta").click(function(evento){	
		$('#contenedor').load('formulario_oferta.html');
	});
});


$(document).ready(function(){
   $(".ofertas_empresa").click(function(evento){	
		$('#contenedor').load('ofertas_empleo.html');
	});
});


/*
$(document).ready(function(){
   $(".oferta").click(function(evento){	
				alert("hola mundo");
	});
});*/


/*****************************************************/
$(document).ready(function(){
	$('#mensaje_sector').tooltip ('<p id="b1">Elija el sector y subsecor que mas se aproxime al que pertenece la empresa</p>', { width: 200});
	$('#mensaje_nivel').tooltip ('<p id="b1">Seleccione el nivel del cargo que mas se ajuste a su nivel profesional</p>', { width: 200 });
	$('#mensaje_cargo').tooltip ('<p id="b1">En este campo se de elegir el nombre del cargo que mas se ajuste a laso estandares del mercado. Ej: Gerente de talento humano por Gerente(cargo Equivalente). </p>', { width: 200 });
	$('#mensaje_funciones').tooltip ('<p id="b1">Es un campo de mucha importancia, permite a las empresas conocer que labores y proyectos se desarrollaron y que metas se cumplieron en cada cargo para dar una idea de su potencial</p>', { width: 200 });
	$('#mensaje_estado_estudios').tooltip ('<p id="b1">Seleccione el estado en el que se encuentran sus estudios. Puede seleccionar entre Culminado, En curso, Abandonado o Aplazado</p>', { width: 200 });
	$('#mensaje_dominio_idioma').tooltip ('<p id="b1">Para cada idioma, debe especificar el porcentaje de dominio (De 10 a 100%) Sea lo más honesto posible, porque las compañías realizan pruebas para comprobar el dominio de otras lenguas.</p>', { width: 200 });
	$('#mensaje_titulo_oferta').tooltip ('<p id="b1">Nota: Describa de forma breve el nombre del cargo vacante e incluya palabras claves que le permitan a los candidatos conocer de qu&eacute; se trata la oferta. Entre m&aacute;s claro sea el titulo, m&aacute;s ajustados ser&aacute;n los perfiles de los aspirantes que apliquen a la oferta</p>', { width: 200 });




	$('#a5').tooltip ('<p id="b1">Registre una Descripcion detallada de las capacidades las capacidades que debe cumplir el aspirante para aplicar al la vacante ofrecida</p>', { width: 200 });
	$('#a6').tooltip ('<p id="b1">Experiencias o habilidades en un determinado tema o trabajo desempeñado</p>', { width: 200 });
	$('#a7').tooltip ('<p id="b1">Los Sectores son la división de la actividad económica que realiza la empresa dependiendo del proceso productivo que realiza.</p>', { width: 200 });
	$('#a8').tooltip ('<p id="b1">Ingrese su correo electronico que sera utilizado como usario para el inicio de sesión </p>', { width: 200 });
	$('#a9').tooltip ('<p id="b1">Ingrese su contraseña para el inicio de sesion su cuenta podra utilizarla para ingresar cuando se verifique su cuenta </p>', { width: 200 });
	$('#a10').tooltip ('<p id="b1">Es una clasificacion mas especifica del sector en el que se desempena la empresa</p>', { width: 200 });
	$('#a11').tooltip ('<p id="b1">Realize una descripcion de las actividades realizadas en la empresa y sus caracteristicas principales.</p>', { width: 200 });
	$('#a12').tooltip ('<p id="b1">Recuerde que el nombre de un programa no es necesariamente igual al título obtenido. Ej.: Ingeniería Industrial (programa)/Ingeniero Industrial (título) o Comercio exterior/profesional en Comercio exterior.</p>', { width: 200 });
});