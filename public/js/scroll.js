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


//Event listener scroll
$('html').on('mousewheel', function(event) {
    sidebarsOnTop();
    
    var deltaY = event.deltaY;
    var tol = 100; //tolerancia

    //limitar deltaY entre 80 y -80
    if (deltaY < -40) {
        deltaY = -40;
    } else if (deltaY > 40) {
        deltaY = 40;
    }

    //calcular la posición en Y
    pos -= deltaY*event.deltaFactor ;
    
    //si termina el scroll pasar a la sigueinte (o anterior) sección
    if( pos > height + tol) {
        if (id < 4) {
            id++;
            seleccionarBarra(id);
        }
        pos = 0;
    } else if ( pos < 0 - tol) {
        if ( id > 1 ) {
            id--;
            seleccionarBarra(id);
        }
        pos = height;
    } 
 
});

/* Función para mantener las barras de menu en 
la parte de arriba de la pantalla */

function sidebarsOnTop() {
    $(".sidebar").each(function() {

        var $sidebar = $(this);
        var $parent = $sidebar.parent();
        $sidebar.css('top', $parent.scrollTop());

    });    
};



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