var w = $(window).width();
$( window ).resize(function() {
  w = $(window).width();
});

if(w<=600){
    smartphonNav();
}else{
    desktopNav();
}

function smartphonNav(){
    $("#content").touchInit({
        preventDefault: true,
        mouse: true,
        pen: true,
        maxtouch: -1,
        prefix: ""
    });

    var pos = 0;
    var coord = 0;

    $("html").on("touch_start", function(event) {
      coord = event.pageX;
    });

    $("html").on("touch_move", function(event) {
      var newCoord = event.pageX;
      var dist = coord-newCoord;
      coord = event.pageX

      pos -= dist;

      if(pos < -3.0*w){
            pos = -3.0*w;
        }else if(pos > 0){
            pos = 0;
        }

      if(pos > -0.50*w){
            $('#barra_2').css("left",pos);
            $('#barra_3').css("left",pos);
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else if(pos > -1.0*w){
            $('#barra_2').css("left",(-.50*w));
            $('#barra_3').css("left",pos);
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else if(pos > -1.5*w){
            $('#barra_2').css("left",(-.50*w));
            $('#barra_3').css("left",(-1.0*w));
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else if(pos > -2.0*w){
            $('#barra_2').css("left",(-.50*w));
            $('#barra_3').css("left",(-1.0*w));
            $('#barra_4').css("left",(-1.5*w));
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else if(pos > -2.5*w){
            $('#barra_2').css("left",(-.50*w));
            $('#barra_3').css("left",(-1.0*w));
            $('#barra_4').css("left",(-1.5*w));
            $('#barra_5').css("left",(-2.0*w));
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else{
            $('#barra_2').css("left",(-.50*w));
            $('#barra_3').css("left",(-1.0*w));
            $('#barra_4').css("left",(-1.5*w));
            $('#barra_5').css("left",(-2.0*w));
            $('#barra_6').css("left",(-2.5*w));
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }

    });

}

function desktopNav(){
    var pos = 0;
    $('html').on('mousewheel', function(event) {

        pos += event.deltaY;
        if(pos < -w){
            pos = -w;
        }else if(pos > 0){
            pos = 0;
        }


        console.log(pos);

        

        if(pos > -0.25*w){
            $('#barra_2').css("left",pos);
            $('#barra_3').css("left",pos);
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else if(pos > -0.50*w){
            $('#barra_2').css("left",(-.25*w));
            $('#barra_3').css("left",pos);
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);

        }else if(pos > -0.75*w){
            $('#barra_2').css("left",(-.25*w));
            $('#barra_3').css("left",(-.50*w));
            $('#barra_4').css("left",pos);
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);
        }else{
            $('#barra_2').css("left",(-.25*w));
            $('#barra_3').css("left",(-.50*w));
            $('#barra_4').css("left",(-.75*w));
            $('#barra_5').css("left",pos);
            $('#barra_6').css("left",pos);
            $('#barra_7').css("left",pos);
            $('#barra_8').css("left",pos);

        }
    });
}
