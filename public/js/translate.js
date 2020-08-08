$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    //cambiar a ingles
   $('body').on('click', '#en-select', function() {
        $.sls.setLang("en");
       idioma = "eng";
   });

    //cambiar a ingles
    $('body').on('click', '#en-select-menu', function() {
        $.sls.setLang("en");
        console.log('ingles');
        idioma = "eng";
    });

   //cambiar a español
   $('body').on('click', '#es-select', function() {
        $.sls.setLang("es");
       idioma = "esp";
   });

   $('body').on('click', '#es-select-menu', function() {
        $.sls.setLang("es");
     
       idioma = "esp";
   });

});

