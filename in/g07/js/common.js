
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
	
    if (windowWidth > 1200) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");

    } else{
      //모바일
    $("header").removeClass("pc").addClass("mo");
      $("header.mo .mo_open").click(function(){
        $("header.mo .top").addClass("on");
        $("header.mo .wrap>.inner").addClass("on");
        $("header.mo .m_right").addClass("on");
        $("header.mo .right").addClass("close");
        $("header.mo .mo_close").addClass("ani");
      });
      $("header.mo .mo_close").click(function(){
        $("header.mo .top").removeClass("on");
        $("header.mo .m_right").removeClass("on");
        $("header.mo .wrap>.inner").removeClass("on");
        $("header.mo .right").removeClass("close");
        $(this).removeClass("ani");
      });
      $("header .menu .depth1>a").click(function(){
        $("header .menu .depth1").removeClass("current");
        $(this).parent("").addClass("current");
      });
    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });

  // LNB
// var compLnb = (function(){
//   if($(".left_menu").length < 1) return false;
  
//   var lnb = $(".left_menu .menu h2 a"), spd=300;
   
//   lnb.on("click", function(){
//     var $this = $(this), 
//        sm = $this.closest("h2").next(".smallmenu"), 
//        lnb = $(".left_menu .menu");

//     if($this.hasClass('outlnk')) return;
//     if($this.hasClass('single')) return;

//     $this.closest("li").siblings().find(".open").removeClass("open");
//     $this.closest("li").siblings().find(".smallmenu").slideUp(spd);

//     sm.stop().slideToggle(spd);
//     $this.toggleClass("open");

//     return false;
//   })
// })();


  // 맨위로 가기
  $(".go_top").click(function () {
    $('body,html').animate({
      'scrollTop': 0
    }, 300, 'swing', function () {});
  });

  // 탭 설정및 웹접근성반영
  $(".com_tab>li").on("keydown", function (event) {
    event = event || window.event;
    var keycode = event.keyCode || event.which;
    switch (keycode) {
      case 13: // Enter
        // 선택된 탭 활성화
        $(this)
          .addClass("active")
          .attr("aria-selected", "true")
          // 기존 탭 비활성화
          .siblings()
          .removeClass("active")
          .attr("aria-selected", "false");
        // 연관된 탭 패널 활성화
        $("#" + $(this).attr("aria-controls"))
          .addClass("active")
          // 기존 탭 패널 비활성화
          .siblings(".tabpanel")
          .removeClass("active");
        break;
    }
  });

  $(".com_tab li").on("mousedown", function () {
    // 선택된 탭 활성화
    $(this)
      .addClass("active")
      .attr({
        "aria-selected": "true"
      })
      .focus()
      // 기존 탭 비활성화
      .siblings()
      .removeClass("active")
      .attr({
        "aria-selected": "false"
      });
    // 연관된 탭 패널 활성화
    $("#" + $(this).attr("aria-controls"))
      .addClass("active")
      // 기존 탭 패널 비활성화
      .siblings(".tabpanel")
      .removeClass("active");
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
  // // }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     if (currentSlide !== nextSlide) {
//       $('.slick-center + .slick-cloned').each(function(index, node) {
//           var $node = $(node);
          
//           setTimeout(function() {
//               $node.addClass('slick-current');
//               $node.addClass('slick-center');
//           });
//       });
//   }
// });
  
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

  $(".visual_slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade:true,
    prevArrow : $('.visual_btn .prev'), 
    nextArrow : $('.visual_btn .next'),
    asNavFor: '.next_slide'
  }).on('afterChange', function() {
    if($(".visual_slide .slick-dots li").length >= 10){
      if($(".visual_slide .slick-dots .slick-active").index() >= 9){
        $(".visual_btn span").text(($(".visual_slide .slick-dots .slick-active").index()+1));
      }else{
        $(".visual_btn span").text("0"+($(".visual_slide .slick-dots .slick-active").index()+1));
      }
    }else{
      $(".visual_btn span").text("0"+($(".visual_slide .slick-dots .slick-active").index()+1));
    }
  });
  if($(".visual_slide .slick-dots li").length >= 10){
    $(".visual_btn p em").text($(".visual_slide .slick-dots li").length);
  }else{
    $(".visual_btn p em").text("0"+$(".visual_slide .slick-dots li").length);
  };
  $('.visual_btn .pause').click(function() {
    $('.visual_slide').slick('slickPause');
    $(this).css("display","none");
    $('.visual_btn .play').css("display","inline-block");
  });
  $('.visual_btn .play').click(function() {
    $('.visual_slide').slick('slickPlay');
    $(this).css("display","none");
    $('.visual_btn .pause').css("display","inline-block");
  });
  $(".next_slide").slick({
    infinite: true,
    fade:true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.visual_slide'
  });

  $(".schedule .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow : $('.schedule .btn .prev'), 
    nextArrow : $('.schedule .btn .next'),
  });

  $(".news .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    arrows: true,
    dots:true,
    prevArrow : $('.main2 .tit .btn .prev'), 
    nextArrow : $('.main2 .tit .btn .next'),
    responsive:[
          {
              breakpoint:1025,
              settings :{
                slidesToShow: 3,
                infinite:true,
              }
            },
            {
                breakpoint:580,
                settings :{
                  slidesToShow: 2,
                  infinite:true,
                }
              }
          ]
  }).on('afterChange', function() {
    if($(".news .slide .slick-dots li").length >= 10){
      if($(".news .slide .slick-dots .slick-active").index() >= 9){
        $(".main2 .tit .btn span").text(($(".news .slide .slick-dots .slick-active").index()+1));
      }else{
        $(".main2 .tit .btn span").text("0"+($(".news .slide .slick-dots .slick-active").index()+1));
      }
    }else{
      $(".main2 .tit .btn span").text("0"+($(".news .slide .slick-dots .slick-active").index()+1));
    }
  });
  if($(".news .slide .slick-dots li").length >= 10){
    $(".main2 .tit .btn p em").text($(".news .slide .slick-dots li").length);
  }else{
    $(".main2 .tit .btn p em").text("0"+$(".news .slide .slick-dots li").length);
  };
  $('.main2 .tit .btn .pause').click(function() {
    $('.news .slide').slick('slickPause');
    $(this).css("display","none");
    $('.main2 .tit .btn .play').css("display","inline-block");
  });
  $('.main2 .tit .btn .play').click(function() {
    $('.news .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.main2 .tit .btn .pause').css("display","inline-block");
  });

  $(".sub_top .right_btn button").click(function(){
    $(".sub_top .right_btn div").toggleClass("active");
  });

  $(".satis .bot li:nth-of-type(2) span").mouseover(function(){
    $(".satis .bot li:nth-of-type(2) span").removeClass("active");
    $(this).index()+1;
    var n = 0;
    while($(this).index() >= n){
      $(".satis .bot li:nth-of-type(2) span").eq(n).addClass("active");
      n++;
    }
  });

  $(".select_shape .sel-btn").click(function(){
    $(".select_shape div").css("height","")
    if($(this).siblings("div").hasClass("active")){
        $(".select_shape div").removeClass("active");
        $(".select_shape .sel-btn").removeClass("active");
    }else{
        $(".select_shape div").removeClass("active");
        $(".select_shape .sel-btn").removeClass("active");
        $(this).siblings("div").addClass("active");
        $(this).addClass("active");

        if(280 > $(this).siblings("div").find("li").outerHeight()* $(this).siblings("div").find("li").length){
          $(this).siblings("div").css("height",$(this).siblings("div").find("li").outerHeight()* $(this).siblings("div").find("li").length+2+"px");
        }
    }
    
  });
  $("html").on("click focusin",function(e){
    
    if($(e.target).parents(".select_shape").length < 1){
    $(".select_shape div").removeClass("active");
    $(".select_shape .sel-btn").removeClass("active");
    $(".select_shape div").css("height","");
    }
});
$(".select_shape ul li a").keyup(function(e){
    var key = e.keyCode;
    switch(key){
        case 38:
            if(!$(this).parent().index() <= 0){
                $(this).parents("ul").children("li").eq($(this).parent().index()-1).children("a").focus();
            }
            break;
        case 40:
            $(this).parents("ul").children("li").eq($(this).parent().index()+1).children("a").focus();
            break;
    }
});


});