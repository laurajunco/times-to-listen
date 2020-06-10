(function ($, root, undefined) {

  var audio = "";
  var $bot = "";
  var $marquee = "";

  $( ".parches .parche" ).each(function() {

    var duration;
    audio = $(this).find('audio')[0];
    $marquee = $(this).find('.marquee');

      audio.onloadedmetadata = function() {
        duration = Math.round(audio.duration*1000);
        console.log('duration: ', duration);

        $marquee.marquee({
          duration: duration,
          gap: 50,
          delayBeforeStart: 500,
          direction: 'left',
          duplicated: false,
      });

      $marquee.marquee('pause');
    };

  });




//event listener para clic en parche
$('.parches .parche').click(function() {
  audio = $(this).find('audio')[0];
  $bot = $(this);
  $marquee = $(this).find('.marquee');
  $marquee.marquee('toggle');
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


 