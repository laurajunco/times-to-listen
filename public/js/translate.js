$(document).ready(function () {
    // Initialization
    $.sls.init({
        defaultLang: "es",
        path: "./languages/",
        persistent: false,
    });

    var lang = $.sls.getLang();

    console.log('lang 1:', lang);

    // Manually set language
   $('#toggle').click(function() {
    $.sls.setLang("en");
    console.log('lang 2:', lang);	
   });
});

