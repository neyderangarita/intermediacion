/* Author:
		alert("Has pulsado el enlace...nAhora ser�s enviado a DesarrolloWeb.com");
*/
$(document).ready(function(){
   $("#prueba").click(function(evento){
		var elem =$("#formulariomayores");
		/*elem.css("display", "block");*/
		elem.show(3000);
   });
});