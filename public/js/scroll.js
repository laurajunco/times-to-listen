(function ($, root, undefined) {

// Variables 
var $barra1 = $('#barra_1');
var $barra2 = $('#barra_2');
var $barra3 = $('#barra_3');
var $barra4 = $('#barra_4');
var $barra5 = $('#barra_5');
var $barra6 = $('#barra_6');
var $barra7 = $('#barra_7');
var $barra8 = $('#barra_8'); 
var $menu = $('#menu');

var barras = [
    $barra1, 
    $barra2, 
    $barra3, 
    $barra4, 
    $barra5, 
    $barra6, 
    $barra7, 
    $barra8
];

var lineas = [
    {id: 3,linea:'.linea-tiempo.bojaya'},
    {id: 4,linea:'.linea-tiempo.mampujan'},
    {id: 5,linea:'.linea-tiempo.sonson'},
    {id: 6,linea:'.linea-tiempo.choiba'}, 
];

var id = 1; // Iniciar en la seccion 1
var $selected;

$menu.hide(); //ocultar el menu
seleccionarBarra(id);

/* Pasar del menu a la intro */
$barra1.on('click', '#es-select, #en-select', function() {
    $menu.show();
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('abierto');
    seleccionarBarra(id);
});

/* Abrir y cerrar menu */
$menu.on("click", '#open-menu', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('abierto');
});

$menu.on("click", '#close-menu', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
});

/* Navegación menú */

$menu.on("click", '#ir-intro', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 2;
    seleccionarBarra(id);
    $('#ir-bojaya').removeClass('disabled');
    $('#ir-mampujan').removeClass('disabled');
    $('#ir-sonson').removeClass('disabled');
    $('#ir-choiba').removeClass('disabled');
    $('#ir-hacer').removeClass('disabled');
});

$menu.on("click", '#ir-bojaya', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 3;
    seleccionarBarra(id);
});

/* flecha siguiente o anterior */
$('body').on("click", '.flecha-nav .siguiente', function() {
    id++
    seleccionarBarra(id);
})

$('body').on("click", '.flecha-nav .anterior', function() {
    id--
    seleccionarBarra(id);
})


$menu.on("click", '#ir-mampujan', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 4;
    seleccionarBarra(id);
});

$menu.on("click", '#ir-sonson', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 5;
    seleccionarBarra(id);
});

$menu.on("click", '#ir-choiba', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 6;
    seleccionarBarra(id);
});

$menu.on("click", '#ir-hacer', function() {
    $menu.removeClass('cerrado').removeClass('abierto')
    $menu.addClass('cerrado');  
    id = 7;
    seleccionarBarra(id);
});


/* Event listener para scroll */
$('html').on('mousewheel', function(event) {
    var top = $selected.scrollTop();
    var deltaY = event.deltaY;
    deltaY = -deltaY;

    if (deltaY > 0 && top >= height) {
        if (id <= barras.length && id != 1) {
            avanzar();
        }
    } else if (deltaY < 0 && top <= 0) {
        if (id > 2) {
            retroceder();
        }
    }
});

/* Función para avanzar sección (closure) */
function avanzar() {
    var executed = false;
    if (!executed) {
        executed = true;
        id++;
        seleccionarBarra(id);
    }
}

/* Función para retroceder sección */
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

    for (var j = 0; j < barras.length; j++){

        if (j+1 === i) {
            barras[j].removeClass('selected').removeClass('siguiente').removeClass('anterior');
            barras[j].addClass('selected');

            height = barras[j].prop("scrollHeight") - $( window ).height();
            $selected = barras[j];

        } else if (j+1 < i) {
            barras[j].removeClass('selected').removeClass('siguiente').removeClass('anterior');
            barras[j].addClass('anterior');

        } else if (j+1 > i) {
            barras[j].removeClass('selected').removeClass('siguiente').removeClass('anterior');
            barras[j].addClass('siguiente');
        }

        //play-pause timelines
        if (lineas[j]) {
            if (lineas[j].id === i) {
                $(lineas[j].linea).slick('slickPlay');
            } else {
                $(lineas[j].linea).slick('slickPause');
            }
        }
    }
}
})(jQuery, this);
