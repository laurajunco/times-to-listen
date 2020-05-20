(function ($, root, undefined) {

// Variables 
var $barra1 = $('#barra_1');
var $barra2 = $('#barra_2');
var $barra3 = $('#barra_3');
var $barra4 = $('#barra_4');
var height;
var pos = 0;
var id = 1;
var $selected;

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
    
    var deltaY = event.deltaY;

    if (deltaY < -80) {
        deltaY = -80;
    } else if (deltaY > 80) {
        deltaY = 80;
    }

    pos -= deltaY*event.deltaFactor ;

    if( pos > height + 100) {
        if (id < 4) {
            id++;
            seleccionarBarra(id);
            console.log('id', id);
            pos = 0;
        }
    } else if ( pos < 0 - 100) {
        if ( id > 1 ) {
            id--;
            seleccionarBarra(id);
            console.log('id', id);
            pos = height;
        }
    } 
 
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

        height = $barra1.prop("scrollHeight");
        $selected = $barra1;
        pos = 10;

    } else if (i === 2) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('selected');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        height = $barra2.prop("scrollHeight");
        $selected = $barra2;
        

    }  else if (i === 3) { 
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('selected');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        height = $barra3.prop("scrollHeight");
        $selected = $barra3;

    } else if (i === 4) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('anterior');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('selected');

        height = $barra4.prop("scrollHeight");
        $selected = $barra4;
    }
}


})(jQuery, this);