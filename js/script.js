/* Author: Neyder Angarita Osorio.
		alert("Has pulsado el enlace");
*/
$(document).ready(function(){
   $("#prueba,#prueba1").click(function(evento){
		var elem =$("#formulariomayores");
		/*elem.css("display", "block");*/
		elem.show(3000);
   });
});


$(document).ready(function(){
   $("#ocultar").click(function(evento){
		var elem =$("#formulariomayores");
		/*elem.css("display", "block");*/
		elem.hide(3000);
   });
});

