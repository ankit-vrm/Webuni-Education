'use strict';

$(document).ready(function(){  
      AOS.init();
    
     $(window).load(function(){
      $("#preloader").delay(400).fadeOut ("slow");
      $(".loader").fadeOut();
    })
    
    $(window).scroll(function(){
        var y=$(this).scrollTop();
        if( y>=800){
            $(".top").fadeIn()
        }
        else{
            $(".top").fadeOut()
        }
        })
    
    $(".top").click(function(){
            $("body,html").animate({
                "scrollTop":"0px"
            })
        })

    
    
    $(".card").mouseover(function(){
        $(".card-img-price", this).show();
        $(".img-blur", this).css({"filter": "blur(3px)"})
    })
    
    $(".card").mouseout(function(){
        $(".card-img-price", this).hide();
        $(".img-blur", this).css({"filter": "blur(0px)"})
    })
    
    $(".fs-course").click(function(){
        window.location=$(this).find("a").attr("href");
        return false;
    })
    
    
     $(".navbar-toggler").click(function(){
        $(".search-course").toggleClass("hide-srch",100,"linear")
    })
    
        
    
     $("a.nav-link").click(function(){
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
    })
    
   
    
    
    var mixer = mixitup('.filter-container');
    
   
    
    
});
    

