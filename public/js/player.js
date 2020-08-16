(function ($, root, undefined) {

  var audio = "";
  var $bot = "";
  var $trans = "";
  var $playNegro = "";
  var $playColor = "";

//event listener para clic en parche
$('body').on("click",'.parches .parche', function() {

  if($(this)[0] != $bot[0] && $bot != "") {
    pauseAudio();
  }

  audio = $(this).find('audio')[0];
  $bot = $(this);
  $trans = $(this).find('.transcripcion');
  $playNegro = $(this).find('.play-negro');
  $playColor = $(this).find('.play-color');

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
    $trans.show();
    $playColor.show();
    $playNegro.hide();
  }

  //Pausar la pista de audio
  function pauseAudio() {
    $bot.removeClass('playing').removeClass('paused');
    $bot.addClass('paused');
    audio.currentTime = 0;
    audio.pause();
    $trans.hide();
    $playColor.hide();
    $playNegro.show();
  }

  //reiniciar en el fin del audio
  audio.onended = function() {
    console.log ("The audio has ended");
    audio.currentTime = 0;
    pauseAudio();
    $trans.hide();
    $playColor.hide();
    $playNegro.show();
  };


})(jQuery, this);


 