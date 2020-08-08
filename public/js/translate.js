$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    //cambiar a ingles
   $('#en-select').on("click",function() {
        $.sls.setLang("en");
        $('.b-info-espanol').hide();
        $('.m-info-espanol').hide();
        $('.b-info-ingles').show();
        $('.m-info-ingles').show();
       
       idioma = "eng";
   });

    //cambiar a ingles
    $('#en-select-menu').on("click",function() {
        $.sls.setLang("en");
        console.log('ingles');
        $('.b-info-espanol').hide();
        $('.m-info-espanol').hide();
        $('.b-info-ingles').show();
        $('.m-info-ingles').show();
        
        idioma = "eng";
    });

   //cambiar a español
   $('#es-select').on("click", function() {
        $.sls.setLang("es");
        $('.b-info-espanol').show();
        $('.m-info-espanol').show();
        $('.b-info-ingles').hide();
        $('.m-info-ingles').hide();
       
       idioma = "esp";
   });

   $('#es-select-menu').on("click", function() {
        $.sls.setLang("es");
        $('.b-info-espanol').show();
        $('.m-info-espanol').show();
        $('.b-info-ingles').hide();
        $('.m-info-ingles').hide();
       
       idioma = "esp";
   });

});

