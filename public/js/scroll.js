(function ($, root, undefined) {

// Variables 
var $barra1 = $('#barra_1');
var $barra2 = $('#barra_2');
var $barra3 = $('#barra_3');
var $barra4 = $('#barra_4');
var $barra5 = $('#barra_5');
var $barra6 = $('#barra_6');
var $menu = $('#menu');

var id = 6; // Iniciar en la seccion 1
var $selected;
seleccionarBarra(id);

// Pasar del umbral a la intro
$('#es-select').click(function() {
    id = 2;
    seleccionarBarra(id);
});

$('#en-select').click(function() {
    id = 2;
    seleccionarBarra(id);
});

$('#open-menu').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('abierto');
});

$('#close-menu').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
});

$('#ir-intro').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 2;
    seleccionarBarra(id);
});

$('#ir-bojaya').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 3;
    seleccionarBarra(id);
});

$('#ir-mampujan').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 4;
    seleccionarBarra(id);
});

$('#ir-hacer').click(function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 5;
    seleccionarBarra(id);
});

//Event listener scroll
$('html').on('mousewheel', function(event) {
    var top = $selected.scrollTop();
    var deltaY = event.deltaY;
    deltaY = -deltaY;

    if (deltaY > 0 && top >= height) {
        if (id < 6 && id != 1) {
            avanzar();
        }
    } else if (deltaY < 0 && top <= 0) {
        if (id > 2) {
            retroceder();
        }
    }
});

/* Función para avanzar sección */
function avanzar() {
    var executed = false;
    if (!executed) {
        executed = true;
        id++;
        seleccionarBarra(id);
    }
}

/* Función para retroceder sección*/
function retroceder() {
    var executed = false;
    if (!executed) {
        id--;
        seleccionarBarra(id);
        executed = true;
    }
};

/* funcion para cambiar de sección */
function seleccionarBarra(i) {

    if (i === 1) {
        $menu.hide();
        
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('selected');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('siguiente');
        
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('siguiente');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('siguiente');

        height = $barra1.prop("scrollHeight") - $( window ).height();
        $selected = $barra1;
        
    } else if (i === 2) {
        $menu.show();

        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('selected');
        
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('siguiente');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('siguiente');

        height = $barra2.prop("scrollHeight") - $( window ).height();
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

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('siguiente');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('siguiente');

        height = $barra3.prop("scrollHeight") - $( window ).height();
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

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('siguiente');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('siguiente');

        height = $barra4.prop("scrollHeight") - $( window ).height();
        $selected = $barra4;

    } else if (i === 5) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');
        
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('anterior');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('anterior');

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('selected');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('siguiente');

        height = $barra5.prop("scrollHeight") - $( window ).height();
        $selected = $barra5;

    } else if (i === 6) {
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');
        
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('anterior');

        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('anterior');

        $barra5.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra5.addClass('anterior');

        $barra6.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra6.addClass('selected');

        height = $barra6.prop("scrollHeight") - $( window ).height();
        $selected = $barra6;
    }
}

})(jQuery, this);
