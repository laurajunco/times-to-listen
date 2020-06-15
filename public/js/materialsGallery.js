var idioma = "esp";

$(document).ready(function(){

	$("#materiales").hover(function(){},defaultImage);    

    $("#m-1").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/1.jpg");

    });    

    $("#m-2").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/2.jpg");

    }); 

    $("#m-3").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/3.jpg");

    }); 

    $("#m-4").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/4.jpg");

    }); 

    $("#m-5").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/5.jpg");

    }); 

    $("#m-6").hover(function(){

        // Change src attribute of image

        $("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/6.jpg");

    }); 

});

function defaultImage(){
	$("#materiales-hacer").attr("src", "img/hacer/materiales_"+idioma+"/0.jpg");
}