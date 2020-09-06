$( "#barra_2" ).load( "ajax/intro.html")

$( "#barra_3" ).load( "ajax/bojaya.html" , function() {

    $('.linea-tiempo.bojaya.arriba').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.bojaya.abajo',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    speed: 500,
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.linea-tiempo.bojaya.abajo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.bojaya.arriba',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });
})

$( "#barra_4" ).load( "ajax/mampujan.html", function() {
    $('.linea-tiempo.mampujan.arriba').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.mampujan.abajo',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.linea-tiempo.mampujan.abajo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.mampujan.arriba',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });
})

$( "#barra_5" ).load( "ajax/sonson.html", function() {
    $('.linea-tiempo.sonson.arriba').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.sonson.abajo',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.linea-tiempo.sonson.abajo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.sonson.arriba',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });
})
$( "#barra_6" ).load( "ajax/choiba.html", function() {
    $('.linea-tiempo.choiba.arriba').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.choiba.abajo',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.linea-tiempo.choiba.abajo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        asNavFor: '.linea-tiempo.choiba.arriba',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    cssEase: 'linear',
                    autoplay: false,
                    slidesToShow: 2
                }
            }
        ]
    });
})

$( "#barra_7" ).load( "ajax/hacer.html")
$( "#barra_8" ).load( "ajax/creditos.html");
$( "#menu" ).load( "ajax/menu.html");