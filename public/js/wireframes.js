(function ($, root, undefined) {

    // Variables 
var $barra1 = $('#barra_1');
var $barra2 = $('#barra_2');
var $barra3 = $('#barra_3');
var $barra4 = $('#barra_4');
var width = $(window).width();
var pos = 0;
var id = 1;

// Iniciar en la seccion 1
seleccionarBarra(id);

// Event listeners para cambiar de sección
$barra1.click(function() {
    id = 1;
    seleccionarBarra(id);
});

$barra2.click(function() {
    id = 2;
    seleccionarBarra(id);
});

$barra3.click(function() {
    id = 3;
    seleccionarBarra(id);
});

$barra4.click(function() {
    id = 4;
    seleccionarBarra(id);
});


$('html').on('mousewheel', function(event) {

    pos -= event.deltaY/2;
    if(pos > width){
        pos = width;
    }   else if(pos < 0){
        pos = 0;
    }
    
    if(pos >= 0 && pos < width/4) {
        id = 1;
    } 

    if(pos >= width/4 && pos < width/2) {
        id = 2;
    } 

    if(pos >= width/2 && pos < 2*width/3) {
        id = 3;
    } 

    if(pos >= 2*width/3 && pos < width) {
        id = 4;
    } 

    seleccionarBarra(id);
    
    //console.log('position: ', pos);
});



/* funcion para cambiar de sección */
function seleccionarBarra(i) {
    if (i === 1) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('selected');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('siguiente');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');
    } else if (i === 2) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('selected');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

    }  else if (i === 3) { 
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('selected');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');
    } else if (i === 4) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('anterior');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('selected');
    }

}


})(jQuery, this);