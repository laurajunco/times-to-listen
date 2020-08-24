(function ($, root, undefined) {

    var audio = "";
    var $bot = "";
  
    $('body').on("mouseenter",'.rect', function() {
        audio = $(this).find('audio')[0];
        $bot = $(this);
        audio.play();
        return false;
    });

    $('body').on("mouseleave",'.rect', function() {
        audio.currentTime = 0;
        audio.pause();
        return false;
    });
    
    audio.onended = function() {
        audio.currentTime = 0;
        audio.pause();
    };
  
})(jQuery, this);