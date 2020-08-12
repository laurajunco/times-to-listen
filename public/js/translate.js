$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    //cambiar a ingles
   $('body').on('click', '#en-select, #en-select-menu',  function() {
        $.sls.setLang("en");
        $('.img-es').hide();
        $('.img-en').show();
   });

    //cambiar a españo
    $('body').on('click', '#es-select-menu, #en-select', function() {
        $.sls.setLang("es");
        $('.img-en').hide();
        $('.img-es').show();
    });

});

