(function ($, root, undefined) {

  var audio = "";
  var $botPlay = "";

  //Modal
  $('.galeria-parches a').on('click', function() {

    $('.modal-content').html($(this).html());
    
    $(this).addClass("clicked");
    
    $('.modal').fadeIn(300);

    resetVariables();

    return false;
  });

  $('.modal-close').on('click', function() {
      
      $('.modal').fadeOut(300);
      pauseAudio();
      audio.currentTime = 0

      return false;
  });

  function resetVariables() {
    audio = $('.modal-content').find('audio')[0];
    $botPlay = $('.modal-content').find('.bot-play');

    $botPlay.click(playPauseAudio);
  }


  
  // función para hacer toggle a reproducir/pausar audio
  function playPauseAudio() {
    var playing = $botPlay.hasClass('playing') ? true : false;
    
    if (!playing) {
      playAudio();
    } else {
      pauseAudio();
    }
  }

  //función para reproducir la pista de audio
  function playAudio() {
    //console.log('audio play');

    $botPlay.removeClass('playing').removeClass('paused');
    $botPlay.addClass('playing');

    audio.play();

    audio.ontimeupdate = () => {
        updateProgressBar( audio.currentTime, audio.duration );
    }
  }

  //función para pausar la pista de audio
  function pauseAudio() {
    //console.log('audio pause');
    $botPlay.removeClass('playing').removeClass('paused');
    $botPlay.addClass('paused');
    audio.pause();

  }

  //funcion para controlar barra de progreso del a
  function updateProgressBar( current, total ) {
    var porcentaje = ( current * 100 ) / total;
    $( '.slider .current' ).attr( 'style', 'width: '+porcentaje+'%' ); 
  };

})(jQuery, this);



 