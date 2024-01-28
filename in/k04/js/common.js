
$(function () {

  $(window).scroll(function () {

    var TOP = $(document).scrollTop();
    
    if(TOP>0){
      $(".header").css("background","#fff");
    }else{
      $(".header").css("background","");
    }
    
    }); 

  $(".btn-gnb").click(function(){
    if($(".header").hasClass("open")){
      $(".header").removeClass("open");
    }else{
      $(".header").addClass("open");
    }
  });
  
  $(".main6 .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    pauseOnHover: false,
    speed:1200,
    fade:true
  });
  $(".slide_nav img").click(function(){
    $(".slick-dots li").eq($(this).index()).trigger("click");
  });

  $(".header ul li").click(function(){
    var menuT = $(".main>div").eq($(this).index()+1).offset().top - $(".header").outerHeight();
    $(document).scrollTop(menuT);
    console.log(menuT);

  });


});