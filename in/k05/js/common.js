
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
	
    if (windowWidth > 1024) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");

    } else{
      //모바일
    $("header").removeClass("pc").addClass("mo");

    }
}
function scroll(){
  $(".up").each(function(){
    var qq = $(this).offset().top - $(this).innerHeight() - $(window).innerHeight();
    if($(window).scrollTop() >= qq){
      $(this).addClass("active");
    }
  })
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });

  // $("footer .slide").slick({
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow: 5,
  //   arrows: false,
  //   dots: true,
        // prevArrow : $('.banner .btn .prev'), 
        // nextArrow : $('.banner .btn .next'),
  // //   responsive:[
  // //     {
  // //         breakpoint:1100,
  // //         settings :{
  // //           slidesToShow: 4,
  // //           infinite:true,
  // //         }
  // //       },
  // //       {
  // //           breakpoint:501,
  // //           settings :{
  // //             slidesToShow: 2,
  // //             infinite:true,
  // //           }
  // //         }
  // //     ]
  // // });
  
  // $('.banner .btn .pause').click(function() {
  //   $('.banner .slide').slick('slickPause');
  //   $(this).css("display","none");
  //   $('.banner .btn .play').css("display","inline-block");
  // });
  // $('.banner .btn .play').click(function() {
  //   $('.banner .slide').slick('slickPlay');
  //   $(this).css("display","none");
  //   $('.banner .btn .pause').css("display","inline-block");
  // });

  $(window).load(function(){
    scroll();
    $(window).scroll(function(event){ 
      scroll();
    });
  });

  $(document).ready(function(){
    var moveType = 0; 
    var moveSpeed = 3000; 
    var moveWork = false; 
    var movePause = false; 
  
    function tkSlide(){		
      var $tkSlide = $('#tickerSlide'),
        $tkSlidePos = $('#tickerSlide').css('left').replace(/[^-\d\.]/g, ''),
        $tkWidth = $('#tickerSlide').width(),
        $tklength = $('#tickerSlide li').length,
        $tkSlideW = $tkWidth + 400,
        $tkitemW = $('#tickerSlide li').width(),
        $tkitemFirst = $('#tickerSlide li:first-child');
  
      $tkSlide.css({
        'left' : $tkSlidePos,
        'width' : $tkWidth + $tkitemW
      });
      if(moveWork==false){
        if(moveType==0){
          $tkSlide.css('left' ,$tkSlidePos);
          $tkSlide.animate({left : -$tkitemW},{duration:moveSpeed, easing:"linear", step:function(){
            if(movePause==true){ 
              $tkSlide.stop();
             }
          }, complete:function(){
            $tkSlide.append("<li>" + $('#tickerSlide li:first-child').html() + "</li>");
            $('#tickerSlide li:first-child').remove(); 
            $tkSlide.css('left' ,'0');
            tkSlide();
          }});
        }
      }
    }
    $('#tickerSlide').parent().on("mouseenter", function(){
      movePause=true;
    });
    $('#tickerSlide').parent().on("mouseleave", function(){
      movePause=false;
      tkSlide();
    });
    $('.slideWrap >a.bxBtn').on('click', function(){
      var $thisClass = $(this).hasClass("bx-prev");
  
      if($thisClass){
        for(var i=0;i<5;i++){				
          var $tkSlide = $('#tickerSlide'),				
          $tkitem = $('#tickerSlide li:last-child()').html();
  
          $('#tickerSlide li:first-child()').before("<li>" + $tkitem + "</li>");
          $('#tickerSlide li:last-child()').remove();
        }
        $tkSlide.animate({left : 200}, 500, function(){
          $tkSlide.css('left' ,'0');	
        });
      } else {
        for(var i=0;i<5;i++){				
          var $tkSlide = $('#tickerSlide'),				
          $tkitem = $('#tickerSlide li:nth-child(1)').html();
  
          $tkSlide.append("<li>" + $tkitem + "</li>");
          $('#tickerSlide li:nth-child(1)').remove();
        }
        $tkSlide.animate({left : -200}, 500, function(){
          $tkSlide.css('left' ,'0');	
        });
        
      }
    });
    tkSlide();
  });

  $(".kakao_q .wrap a").mouseover(function(){
    $(this).parents(".wrap").addClass("active")
  });
  $(".kakao_q .wrap a").mouseleave(function(){
    $(this).parents(".wrap").removeClass("active")
  });

});