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

var pos = 0;
var id = 1;
var $selected;

// Iniciar en la seccion 1
seleccionarBarra(id);


// Pasar de el umbral a la intro
console.log('es');	
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
    console.log('bojaya');
    id = 3;
    seleccionarBarra(id);
});

$('#mampujan').click(function() {
    console.log('mampujan');
    id = 2;
    seleccionarBarra(id);
});


//Event listener scroll
$('html').on('mousewheel', function(event) {
    sidebarsOnTop();

    var top = $selected.scrollTop();
    console.log('top', top);
    console.log('height', height);
    
    
    /*//si termina el scroll pasar a la siguiente (o anterior) sección
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
    } */
 
});

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
        console.log('height', height);
        

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
        console.log('height', height);
        
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
        console.log('height', height);

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
        console.log('height', height);
    }
}

})(jQuery, this);

//height = $barra1.innerHeight() + $barra2.innerHeight() + $barra3.innerHeight() + $barra4.innerHeight();