(function ($, root, undefined) {

  var audio = "";
  var $bot = ""

//event listener para clic en parche
$('.parches .parche').on('click', function() {
  audio = $(this).find('audio')[0];
  $bot = $(this);
  playPauseAudio();
  return false;
});


//Reproducir/pausar audio
  function playPauseAudio() {
    var playing = $bot.hasClass('playing') ? true : false;
    
    if (!playing) {
      playAudio();
    } else {
      pauseAudio();
    }
  }

  //Reproducir la pista de audio
  function playAudio() {
    $bot.removeClass('playing').removeClass('paused');
    $bot.addClass('playing');
    audio.play();
  }

  //Pausar la pista de audio
  function pauseAudio() {
    $bot.removeClass('playing').removeClass('paused');
    $bot.addClass('paused');
    audio.pause();
  }


})(jQuery, this);


 