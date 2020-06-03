$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    //cambiar a ingles
   $('#en-select').click(function() {
    $.sls.setLang("en");
   });

   //cambiar a español
   $('#es-select').click(function() {
    $.sls.setLang("es");
   });
});

