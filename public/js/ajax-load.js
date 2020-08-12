var contador = 0;
var numBarras = 8;

$( "#barra_2" ).load( "ajax/intro.html", addContador())

$( "#barra_3" ).load( "ajax/bojaya.html" , function() {
    addContador()
    $('.linea-tiempo.bojaya').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });
})

$( "#barra_4" ).load( "ajax/mampujan.html", function() {
    contador++
    $('.linea-tiempo.mampujan').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });
})

$( "#barra_5" ).load( "ajax/sonson.html", function() {
    addContador()
    $('.linea-tiempo.sonson').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    }); 
})
$( "#barra_6" ).load( "ajax/choiba.html", function() {
    addContador()
    $('.linea-tiempo.choiba').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
    });
})

$( "#barra_7" ).load( "ajax/hacer.html", addContador())
$( "#barra_8" ).load( "ajax/creditos.html", addContador());
$( "#menu" ).load( "ajax/menu.html", addContador());


//solo se activa el umbral cuando todo haya cargado
function addContador() {
    contador++;
    if(contador === numBarras) {
        $('.cargando').hide();
        $('.botones').show();
    }
}
