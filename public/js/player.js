(function ($, root, undefined) {

  var audio = "";
  var $bot = "";
  var $marquee = "";

  /*$( ".parches .parche" ).each(function() {

    var duration;
    audio = $(this).find('audio')[0];
    $marquee = $(this).find('marquee')[0];
    $text = $(this).find('marquee p');
    width = $text.width() // ancho en pixeles del texto 

        audio.onloadedmetadata = function() {
        duration = Math.round(audio.duration); //duracion en segundos del audio
        $marquee.stop();
        $marquee.scrollAmount = 15;
        //$marquee.setAttribute("HTMLMarqueeElement.scrollamount", "10");
      };

  });*/

  $( ".parches .parche" ).each(function() {
    $container = $(this).find('.transcripcion');
    $marquee = $( "<marquee class='transcripcion-marquee' scrollamount='15'> <p> Responder, soy lucy vengo de los Estados Unidos y ahora vivo en Canadá, crecí cerca de un lago y siempre me ha encantado el agua, para mi la magia de este proceso viene de la forma en que cada creación genera una respuesta, un regalo que luego retorna a sus remitentes para que le continúen. Cada nueva creación nos conmueve y nuestra respuesta nos conecta, aquí hasta el amor por el agua recordando lo que fue y lo que puede ser.</p></marquee>");
    $container.append($marquee);
  });



//event listener para clic en parche
$('.parches .parche').click(function() {
  audio = $(this).find('audio')[0];
  $bot = $(this);
  $marquee = $(this).find('marquee')[0];
  playPauseAudio();
  return false;
});

audio.onended = function() {
  console.log ("The audio has ended");
  $marquee.start();
  audio.currentTime = 0;
  pauseAudio();
};


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
    $marquee.start();
  }

  //Pausar la pista de audio
  function pauseAudio() {
    $bot.removeClass('playing').removeClass('paused');
    $bot.addClass('paused');
    audio.pause();
    $marquee.stop();
  }


})(jQuery, this);


 