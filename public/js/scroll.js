(function ($, root, undefined) {

// Variables 
var $barra0 = $('#barra_0');
var $barra1 = $('#barra_1');
var $sidebar1 = $('#sidebar_1');
var $barra2 = $('#barra_2');
var $sidebar2 = $('#sidebar_2');
var $barra3 = $('#barra_3');
var $sidebar3 = $('#sidebar_3');
var $barra4 = $('#barra_4');
var $sidebar4 = $('#sidebar_4');

var id = 0;
var $selected;

// Iniciar en la seccion 1
seleccionarBarra(id);

// Pasar del umbral a la intro
$('#es-select').click(function() {
    id = 1;
    seleccionarBarra(id);
});

$('#en-select').click(function() {
    id = 1;
    seleccionarBarra(id);
});

// Event listeners para cambiar de sección
$sidebar1.click(function() {
    id = 1;
    seleccionarBarra(id);
});

$sidebar2.click(function() {
    id = 2;
    seleccionarBarra(id);
});

$sidebar3.click(function() {
    id = 3;
    seleccionarBarra(id);
});

$sidebar4.click(function() {
    id = 4;
    seleccionarBarra(id);
});

// Botones para seleccionar camino
$('#bojaya').click(function() {
    id = 3;
    seleccionarBarra(id);
});

$('#mampujan').click(function() {
    id = 2;
    seleccionarBarra(id);
});

//Event listener scroll
$('html').on('mousewheel', function(event) {
    sidebarsOnTop();
    var top = $selected.scrollTop();
    var deltaY = event.deltaY;
    deltaY = -deltaY;

    if (deltaY > 0 && top >= height) {
        if (id < 4) {
            avanzar();
        }
    } else if (deltaY < 0 && top <= 0) {
        if (id > 1) {
            retroceder();
        }
    }
});

/* Función para avanzar sección */
function avanzar() {
    var executed = false;
    if (!executed) {
        id++;
        seleccionarBarra(id);
        executed = true;
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

/* Función para mantener las barras de menu en 
la parte de arriba de la pantalla */
function sidebarsOnTop() {

    //iterador
    $(".sidebar").each(function() {

        var $sidebar = $(this); //seleccionar esta barra
        var $parent = $sidebar.parent(); //seleccionar a su padre
        //la propiedad de top siempre va a ser igual al scrollTop del padre
        $sidebar.css('top', $parent.scrollTop()); 
    });    
};

/* funcion para cambiar de sección */
function seleccionarBarra(i) {
    sidebarsOnTop();
    
    if (i === 0) {
        /* esconde todas las barras excepto la primera */
        $barra1.addClass('hidden');
        $barra2.addClass('hidden');
        $barra3.addClass('hidden');
        $barra4.addClass('hidden');
        
    } else if (i === 1) {
        $barra1.removeClass('hidden');
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('selected');

        $barra2.removeClass('hidden');
        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('siguiente');
        
        $barra3.removeClass('hidden');
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('hidden');
        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        height = $barra1.prop("scrollHeight") - $( window ).height();
        $selected = $barra1;
        
    } else if (i === 2) {
        $barra1.removeClass('hidden');
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('hidden');
        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('selected');

        $barra3.removeClass('hidden');
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('siguiente');

        $barra4.removeClass('hidden');
        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        height = $barra2.prop("scrollHeight") - $( window ).height();
        $selected = $barra2;
        
    }  else if (i === 3) { 
        $barra1.removeClass('hidden');
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('hidden');
        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('hidden');
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('selected');

        $barra4.removeClass('hidden');
        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('siguiente');

        height = $barra3.prop("scrollHeight") - $( window ).height();
        $selected = $barra3;

    } else if (i === 4) {
        $barra1.removeClass('hidden');
        $barra1.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra1.addClass('anterior');

        $barra2.removeClass('hidden');
        $barra2.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra2.addClass('anterior');

        $barra3.removeClass('hidden');
        $barra3.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra3.addClass('anterior');

        $barra4.removeClass('hidden');
        $barra4.removeClass('selected').removeClass('siguiente').removeClass('anterior');
        $barra4.addClass('selected');

        height = $barra4.prop("scrollHeight") - $( window ).height();
        $selected = $barra4;
    }
}

})(jQuery, this);
