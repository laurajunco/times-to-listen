$(document).ready(function () {

    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

   $('#en-select').click(function() {
    $.sls.setLang("en");
    console.log('en');	
   });

   $('#es-select').click(function() {
    $.sls.setLang("es");
    console.log('es');	
   });
});

