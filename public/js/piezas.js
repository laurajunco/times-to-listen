(function ($, root, undefined) {

    var audio = "";
    var $bot = "";
    var iden ="";
    var trans = "";
  
    $('body').on("mouseenter",'.rect', function() {

        audio = $(this).find('audio')[0];
        $bot = $(this);
        iden = $(this).attr("trans");
        trans = $("#" + iden);
        trans.show();
        audio.play();
        return false;
    });

    $('body').on("click",'.rect', function() {

        audio = $(this).find('audio')[0];
        $bot = $(this);
        iden = $(this).attr("trans");
        trans = $("#" + iden);
        trans.show();
        audio.play();
        return false;
    });

    $('body').on("mouseleave",'.rect', function() {
        audio.currentTime = 0;
        audio.pause();
        trans.hide();
        return false;
    });
    
    audio.onended = function() {
        audio.currentTime = 0;
        audio.pause();
    };
  
})(jQuery, this);