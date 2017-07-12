

$(document).ready(function() {
  $(".loader_inner").fadeOut(); 
  $(".loader").fadeOut("slow");
  new WOW().init();
  window.load = function() {
 
  }
});


$(function() {
  $(".next-section a").click(function() {
    $("html, body").animate({
      scrollTop : $("section").offset().top
    }, 800);
  });



      $(document).ready(function() {
        $('.popup-with-form').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });
      });


      $(".owl-carousel").owlCarousel({
       loop: true,
       loop: true,
       autoplay: true,
       responsive : {
        // breakpoint from 0 up
        1500 : {
          items: 3
        },
        1200 : {
          items: 3
        },
        // breakpoint from 480 up
        768 : {
          items: 2
        },
        // breakpoint from 768 up
        0 : {
          items: 1
        }
      }
    });


    //Counter
    var time = 10, cc = 1;
    $(window).scroll(function(){
      $('#counter').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 700){
          if(cc < 2){
            $('span').each(function(){
              var 
              i = 1,
              num = $(this).data('num'),
              step = 70 * time / num,
              that = $(this),
              int = setInterval(function(){
                if (i <= num) {
                  that.html(i);
                }
                else {
                  cc= cc+2;
                  clearInterval(int);
                }
                i++;
              },step);
            });
          }
        }
      });
    });
     $(document).ready(function(){
      if($(window).scrollTop()>1860)
      {
      $('#counter').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 700){
          if(cc < 2){
            $('span').each(function(){
              var 
              i = 1,
              num = $(this).data('num'),
              step = 70 * time / num,
              that = $(this),
              int = setInterval(function(){
                if (i <= num) {
                  that.html(i);
                }
                else {
                  cc= cc+2;
                  clearInterval(int);
                }
                i++;
              },step);
            });
          }
        }
      });
  }
    });



    //mnu
    $(document).ready(function() {
      $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
      });//end slide toggle

      $(window).resize(function() {		
        if (  $(window).width() > 500 ) {			
         $('nav ul').removeAttr('style');
       }
     });//end resize
   });//end ready
   //Paralax

   $(document).ready(function(){  

    $(document).scroll(function(){
      var scrolled = $(this).scrollTop();
      if(($(window).width() > 993) && (scrolled<100 )){
        var topDist = $(document).scrollTop();
        $('.left-content').css('margin-top', (topDist/10)*3);
      }  
    });
  });})






  // });