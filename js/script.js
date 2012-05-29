 /*Author: Neyder Angarita Osorio.
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

		if (text == 'Cancelar' && formularioexperiencia ){
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


   $(".inicializar").click(function(evento){	
		$('#myModal').modal('show');
	});


   $(".oferta").click(function(evento){	
		$('#contenedor').load('formulario_oferta.html');	
	});

   $(".ofertas_empresa").click(function(evento){	
		$('#contenedor').load('ofertas_empleo.html');
	});


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