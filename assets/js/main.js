$(document).ready(function(){
	var imgItems = $('.slider li').length; /*contará cada elemento li*/
	var imgPos = 1;
	//agregando paginación
	for(i = 1; i<= imgItems; i++){
		$('pagination').append('<li><span class="fa fa-circle"></span></li>');
	}

	$('.slider li').hide(); //ocultamos todos los sliders
	$('.slider li:first').show(); // mostramos el primer match del selector con :first
	$('.pagination li:first').css({'color': '#CD6E2E'}); //damos estilos al primer item de la paginación

	//ejecutamos todas las funciones

	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function(){
			nextSlider();
	}, 4000);

	//FUNCIONES=============================

	function pagination(){
	var paginationPos = $(this).index() + 1;
	/*
	*this hace referencia al icono fa-circle, mientras qie index() nos devuelve 
	*la posicion comenzando desde 0, Le agregamos 1 con el +1
	*/

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); //para que aparezca la imagen en transición 

		//Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color' : '#858585'});
		$(this).css({'color' : '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}
		$('.pagination li').css({'color' : '#858585'});
		$('.pagination li:nth-child('+ imgPos +')').css({'color' : '#CD6E2E'});


		$('.slider li').hide(); //ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn();//mostramos el slide seleccionado


	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}
		$('.pagination li').css({'color' : '#858585'});
		$('.pagination li:nth-child('+ imgPos +')').css({'color' : '#CD6E2E'});


		$('.slider li').hide(); //ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn();//mostramos el slide seleccionado


	}



});