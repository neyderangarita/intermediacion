 /*Author: Neyder Angarita Osorio.
		alert("Has pulsado el enlace");
*/
/************mostrar*****************************/
$(document).ready(function(){

    

   $(".boton_expandir_idioma,.boton_expandir_informal,.boton_expandir_publicaciones,.boton_expandir_formal,.boton_expandir_laboral,.agregar").click(function(evento){	
		var formularioexperiencia = $("#formularioexperiencia");
		var formularioformal = $("#formularioformal");
		var formularioidioma = $("#formularioidioma");
		var formularionoformal = $("#formularionoformal");
		var formulariopublicacion = $("#formulariopublicacion");

		var text = $(this).text();


		if (text == 'Agregar experiencia'){
			formularioexperiencia.show(1000);
			$(".boton_expandir_laboral").hide(1000);
		}

		if (text == 'Agregar otro estudio'){
			formularioformal.show(1000);
			$(".boton_expandir_formal").hide(1000);
		}
		if (text == 'Agregar otro idioma'){
			formularioidioma.show(1000);
			$(".boton_expandir_idioma").hide(1000);
		}			
		if (text == 'Agregar Educación informal'){
			formularionoformal.show(1000);			
			$(".boton_expandir_informal").hide(1000);
		}		
		if (text == 'Agregar Publicación'){
			formulariopublicacion.show(1000);
			$(".boton_expandir_publicaciones").hide(1000);
		}

		/*
		if (text == 'Agregar'){
			formularioexperiencia.hide(1000);
			formularioformal.hide(1000);
			formularioidioma.hide(1000);
			formularionoformal.hide(1000);
			formulariopublicacion.hide(1000);
			$(".boton_expandir_idioma,.boton_expandir_informal,.boton_expandir_publicaciones,.boton_expandir_formal,.boton_expandir_laboral").show(1000);
		}*/
   });

/************************************************************************************************/
   	$(".expandir_publicaciones").click(function(evento){	
   		//alert("Has pulsado el enlace");
		$("#formulariopublicacion").show(1000);
		$(".expandir_publicaciones").hide(1000);
	});
   	$(".expandir_idioma").click(function(evento){	
   		//alert("Has pulsado el enlace");
		$("#formularioidioma").show(1000);
		$(".expandir_idioma").hide(1000);
	});
	$(".expandir_informal").click(function(evento){	
   		//alert("Has pulsado el enlace");
		$("#formularionoformal").show(1000);
		$(".expandir_informal").hide(1000);
	});
	$(".expandir_formal").click(function(evento){	
   		//alert("Has pulsado el enlace");
		$("#formularioformal").show(1000);
		$(".expandir_formal").hide(1000);
	});
	$(".expandir_laboral").click(function(evento){	
   		//alert("Has pulsado el enlace");
		$("#formularioexperiencia").show(1000);
		$(".expandir_laboral").hide(1000);
	});
/***************************************************************************************************/

   	$(".cencelar_experiencia").click(function(evento){	
		$("#formularioexperiencia").hide(1000);
		$(".boton_expandir_laboral").show(1000);
		$(".expandir_laboral").show(1000);
	});
   	$(".cencelar_formal").click(function(evento){	
		$("#formularioformal").hide(1000);
		$(".boton_expandir_formal").show(1000);
		$(".expandir_formal").show(1000);
	});
   	$(".cencelar_idioma").click(function(evento){	
		$("#formularioidioma").hide(1000);
		$(".boton_expandir_idioma").show(1000);
		$(".expandir_idioma").show(1000);
	});
	$(".cencelar_informal").click(function(evento){	
		$("#formularionoformal").hide(1000);
		$(".boton_expandir_informal").show(1000);
		$(".expandir_informal").show(1000);
	});
	$(".cencelar_publicaciones").click(function(evento){	
		$("#formulariopublicacion").hide(1000);
		$(".boton_expandir_publicaciones").show(1000);
		$(".expandir_publicaciones").show(1000);
	});

/*************************************************************************************************************/


   $(".inicializar").click(function(evento){	
		$('#myModal').modal('show');
	});



    $(".elminiar_postulacion").click(function(evento){  
      $('#myModal_misaplicaciones').modal('show');
    });

   $(".oferta").click(function(evento){	
		$('#contenedor').load('formulario_oferta.html');	
	});

   $(".configurar_cuenta").click(function(evento){	
		$('#contenedor').load('configurar_cuenta.html');	
	});

   $(".notificaciones_empleador").click(function(evento){	
		$('#contenedor').load('notificaciones_empleador.html');	
	});

   $(".notificaciones_egresado").click(function(evento){	
		$('#contenedor').load('notificaciones_egresado.html');	
	});


/********************************************************************************************************/

/*
   $(".ofertas_empresa").click(function(evento){	
		$('#contenedor').load('ofertas_empleo.html');
	});
*/
/*
   $(".formulario_oferta").click(function(evento){	
		alert("hola mundo");
	});
*/

    $(".mostrar_postulacion").click(function(evento){	
    	//alert("hola mundo");
		$(".contenedor_postulaciones").css("display","inline");
		//formularioformal.show(1000);
	});

	$(".ocultar_postulacion").click(function(evento){	
    	//alert("hola mundo");
		$(".contenedor_postulaciones").css("display","none");
		//formularioformal.show(1000);
	});

	$('#primer_tool').tooltip({

		animation: true,
		placement: 'top',
		title: 'click para administrar su cuenta',
		trigger: 'hover',
		delay: { show: 300, hide: 100 }
	});


    $("input#autocomplete").typeahead({

   	source: ["ingeniero agoindustrial", "médico veterinario y zootecnista", "ingeniero agrónomo","ingeniero agroindustrial", "biólogo", "ingeniero de sistemas", "ingeniero electrónico"
   	          , "licenciado en matemáticas y física", "licenciado en producción agropecuaria","economista", "contador público", "administrador de empresas" , "profesional en mercadeo"
   	          , "enfermero" ,"tecnologo en regencia de farmacia", "Administrador", "Analista", "Asesor", "Asistente", "Asistente de investigación" , "Auditor", "Auxiliar","Consultor" 
   	          ,"Coordinador", "Contralor", "Director", "Diseñador", "Docente o profesor", "Ejecutivo", "enfermera", "Entrenador", "Gerente", "Interventor", "Programador", "Representante de ventas"
   	          , "Jefe", "Revisor fiscal", "Secretaria", "Subdirector", "Subgerente", "Supernumerario", "Supervisor", "Vendedor", "Webmaster", "Trader" ],
    items: 8
    });


    $("input#ubicacion_empleo").typeahead({

   	source: ["Colombia", "Alemania", "Argentina", "Aruba", "Australia", "Austria", "Bélgica" , "Bolivia", "Brasil", "Canadá", "Chile", "China", "Amazonas",	"Antioquia", "Arauca", "Atlántico",	
	"Bolívar",	
	"Boyacá",	
	"Caldas",	
	"Caquetá",	
	"Casanare",
	"Cauca",	
	"Cesar",	
	"Chocó",	
	"Córdoba",	
	"Cundinamarca",	
	"Guainía",	
	"Guaviare",	
	"Huila",	
	"La Guajira",	
	"Magdalena",	
	"Meta",	
	"Nariño",	
	"Norte de Santander",	
	"Putumayo",	
	"Quindío",	
	"Risaralda",	
	"San Andrés y Providencia",	
	"Santander",	
	"Sucre",	
	"Tolima",	
	"Valle del Cauca",	
	"Vaupés",	
	"Vichada"  ],

    items: 8
    });


    $("input#empresas_listado").typeahead({

   	source: ["Electrificadora del Meta", "Llano gas S.A", "Procearroz Ltda","Cereales del Llano S.A", 
   			"Constructora Convesa Ltda", "Fondo Ganadero del Meta S.A", "R. y R Ltda"
   	          , "Agroindustrias del Ariari Ltda", "Procesadora de arroz Montecarlo Ltda" , "Romarco Ltda." ],
    items: 8
    });


    $("input#empresas_listado").typeahead({

   	source: ["Electrificadora del Meta", "Llano gas S.A", "Procearroz Ltda","Cereales del Llano S.A", 
   			"Constructora Convesa Ltda", "Fondo Ganadero del Meta S.A", "R. y R Ltda"
   	          , "Agroindustrias del Ariari Ltda", "Procesadora de arroz Montecarlo Ltda" , "Romarco Ltda." ],
    items: 8
    });

});


 /*********************************************************************************************************/

     $(".ver_postulaciones").click(function(evento){  
   		//alert("hola mundo");
    	//$(".listado_aspirantes").css("display","inline");
    	$(".listado_aspirantes").show(500);
    	$(".ver_postulaciones").hide(500);
    	$(".ocultar_postualacion").show(500);
    });

    $(".ocultar_postualacion").click(function(evento){  
   		//alert("hola mundo");
    	//$(".listado_aspirantes").css("display","inline");
    	$(".listado_aspirantes").hide(500);
    	$(".ver_postulaciones").show(500);
    	$(".ocultar_postualacion").hide(500);
    });

/*************************************************************************************************************/