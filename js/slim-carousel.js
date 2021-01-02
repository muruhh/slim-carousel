$(document).ready(function(){

    $("img").mousedown(function(e){
        e.preventDefault();
    });

    var ticker = "";
    autoSlide();
    
    function autoSlide(){ 
        ticker = setInterval(function(){
            var slides = $(".slide").length;
            var current_slide = $(".slide.active").data('index');
            current_slide++;

            if(current_slide == slides+1){
                current_slide = 1;
            }

            $(".slide").removeClass("active");
            $(".slide[data-index=" + current_slide + "]").addClass("active");
            
            $(".slide img, .slide h2, .slide p").not(".slide.active img, .slide.active h2, .slide.active p").hide(1);
            
            $(".slide.active img").fadeIn(500);
            $(".slide.active h2").delay(500).fadeIn(500);
            $(".slide.active p").delay(1000).fadeIn(500);
        }, 6000);
    }

    $(".slide.active img").fadeIn(500);
    $(".slide.active h2").delay(500).fadeIn(500);
    $(".slide.active p").delay(1000).fadeIn(500);

    $(".slider-arrows").click(function(){
        slide($(this));
        clearInterval(ticker);
        autoSlide();
    });


    function slide(arrow){
        var slides = $(".slide").length;
        var current_slide = $(".slide.active").data('index');
        
        if(arrow.hasClass("slider-right-arrow")){
            current_slide++ >= slides && (current_slide = 1);

            $(".slide").removeClass("active");
            $(".slide[data-index=" + current_slide + "]").addClass("active");
        }
        else{
            current_slide-- == 1 && (current_slide = slides);
            $(".slide").removeClass("active");
            $(".slide[data-index=" + current_slide + "]").addClass("active");
        }
        
        if(current_slide <= slides && current_slide >= 1){
            $(".slide img, .slide h2, .slide p").not(".slide.active img, .slide.active h2, .slide.active p").hide(1);
            
            $(".slide.active img").fadeIn(500);
            $(".slide.active h2").delay(500).fadeIn(500);
            $(".slide.active p").delay(1000).fadeIn(500);
        }
    }

    

});