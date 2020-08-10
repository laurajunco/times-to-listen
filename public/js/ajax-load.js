$( "#barra_1" ).load( "ajax/umbral.html")
$( "#barra_2" ).load( "ajax/intro.html")

$( "#barra_3" ).load( "ajax/bojaya.html" , function() {
    $('.linea-tiempo.bojaya').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });

    $('.slider').mouseover(function() {
        $('.slider').slick('slickPlay')
    });
})

$( "#barra_4" ).load( "ajax/mampujan.html", function() {
    $('.linea-tiempo.mampujan').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });

    $('.slider').mouseover(function() {
        $('.slider').slick('slickPlay')
    });
})

$( "#barra_5" ).load( "ajax/sonson.html", function() {
    $('.linea-tiempo.sonson').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });

    $('.slider').mouseover(function() {
        $('.slider').slick('slickPlay')
    });
})
$( "#barra_6" ).load( "ajax/choiba.html", function() {
    $('.linea-tiempo.choiba').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });

    $('.slider').mouseover(function() {
        $('.slider').slick('slickPlay')
    });
})


$( "#barra_7" ).load( "ajax/hacer.html")
$( "#barra_8" ).load( "ajax/creditos.html")
$( "#menu" ).load( "ajax/menu.html")
