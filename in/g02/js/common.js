
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
	
    if (windowWidth > 1024) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");

      // 2depth 열림
      $("header.pc .center .depth1").mouseover(function(){
        $(this).children("ul").stop().slideDown();
      });
      // 2depth 닫힘
      $("header.pc .center .depth1").mouseleave(function(){
        $(this).children("ul").css("display","none");
      });
      
    } else{
      //모바일
    $("header").removeClass("pc").addClass("mo");

    $(".mo_top .close").click(function(){
      $("header.mo .center").css("left","");
    })
    $("header.mo .right .mo_menu").click(function(){
      $("header.mo .center").css("left","0");
    })

    // 2depth
    $("header.mo .depth1").click(function(){
      $("header.mo .depth1").removeClass("current");
      $(this).addClass("current");
    });

    // 3depth 열림,닫힘
    $("header.mo .depth2.plus").click(function(){
      $("header.mo .depth2.plus").removeClass("minus");
      $("header.mo .depth2.plus>ul").stop().slideUp();
      $(this).addClass("minus");
      $(this).children("ul").stop().slideDown();
    });

    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();

    $("header>.right_search div").css({
      "width":$("header").outerWidth()+"px",
    });
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

//탭 나누기
  var tab_len = $(".com_tab>li").length;
  $(".com_tab>li").css("width","calc(100% / "+tab_len+")");

  // 맨위로 가기
  $(".top_btn").click(function () {
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

  $(".main1 .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    speed:500,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow : $('.main1 .btn .prev'), 
    nextArrow : $('.main1 .btn .next'),
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  });

  $(".main1 .slick-slider").on("afterChange", function(){
    var slide_ing = $(".main1 .slick-dots li.slick-active").index()+1;
    $(".main1 .btn span").text("0"+slide_ing)
  });
  var slide_all = $(".main1 .slick-dots li").length;
    $(".main1 .btn em").text("0"+slide_all);


   $('.main1 .btn .pause').click(function() {
    $('.main1 .slide').slick('slickPause');
    $(this).css("display","none");
    $('.main1 .btn .play').css("display","inline-block");
  });
  $('.main1 .btn .play').click(function() {
    $('.main1 .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.main1 .btn .pause').css("display","inline-block");
  });

  $(".noti .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    dots: false,
    prevArrow : $('.noti .btn .prev'), 
    nextArrow : $('.noti .btn .next'),
   });

  $(".main3 .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow : $('.main3 .btn .prev'), 
    nextArrow : $('.main3 .btn .next'),
    responsive:[
          {
              breakpoint:1601,
              settings :{
                slidesToShow: 3,
              }
            },{
              breakpoint:901,
              settings :{
                slidesToShow: 1,
                centerPadding: '15%',
              }
            }
          ]
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

  $("header>.right .search").click(function(){
      $("header>.right_search").css("width","100%");
  });
  $("header>.right_search .close").click(function(){
      $("header>.right_search").css("width","0");
  });

  $("header>.right_search div").css({
    "width":$("header").outerWidth()+"px",
  });

  $(window).load(function() {
    $(".side>p").css("background","#1f66be");
    $(".side").css("right","0");
    $(".cover").addClass("active");
  });
  

  $(document).ready(function() {
    
    var $slider = $('.main1 .slide');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );

    

    $(".progress").css("background-size",100 / $(".main1 .slick-dots li").length+"% 100%")

    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    
  });

  $(".side>p").click(function(){
    $(".side>p").css("background","#1f66be");
    $(".side").css("right","0");
    $(".cover").addClass("active");
  });
  $(".side .wrap .txt button").click(function(){
    $(".side").css("right","");
    $(".side>p").css("background","");
    $(".cover").removeClass("active");
  });



});