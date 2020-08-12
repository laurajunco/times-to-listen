$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    //cambiar a ingles
   $('body').on('click', '#en-select, #en-select-menu',  function() {
        $('.img-es').hide();
        $('.img-en').show();
        $.sls.setLang("en");
   });

    //cambiar a español
    $('body').on('click', '#es-select-menu, #es-select', function() {

        $('.img-en').hide();
        $('.img-es').show();
        $.sls.setLang("es");
    });

});

