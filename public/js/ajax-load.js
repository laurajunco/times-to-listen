$( "#barra_2" ).load( "ajax/intro.html")

$( "#barra_3" ).load( "ajax/bojaya.html" , function() {

    $('.linea-tiempo.bojaya').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                speed: 8000,
                autoplay: false,
                autoplaySpeed: 0,
                cssEase: 'linear',
                pauseOnFocus: false,
                pauseOnHover: false,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                speed: 8000,
                autoplay: false,
                autoplaySpeed: 0,
                cssEase: 'linear',
                pauseOnFocus: false,
                pauseOnHover: false,
                infinite: true,
            }
        }
        ]
    });
})

$( "#barra_4" ).load( "ajax/mampujan.html", function() {
    $('.linea-tiempo.mampujan').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            }
        ]
    });
})

$( "#barra_5" ).load( "ajax/sonson.html", function() {
    $('.linea-tiempo.sonson').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            }
        ]
    }); 
})
$( "#barra_6" ).load( "ajax/choiba.html", function() {
    $('.linea-tiempo.choiba').slick({
        slidesToShow: 6,
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    speed: 8000,
                    autoplay: false,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    infinite: true,
                }
            }
        ]
    });
})

$( "#barra_7" ).load( "ajax/hacer.html")
$( "#barra_8" ).load( "ajax/creditos.html");
$( "#menu" ).load( "ajax/menu.html");
