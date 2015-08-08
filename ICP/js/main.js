$(document).ready(function(){
	$('.carousel').carousel({
	interval:2000,
	pause:"hover"
})

	$(".btnProyecto").click(function(){

	//	$("#Proyecto1").click();	
		$(this).parent().find("#Proyecto1").click();
	})
})
