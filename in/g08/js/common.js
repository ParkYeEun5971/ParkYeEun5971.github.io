
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
	
    if (windowWidth > 1200) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");

      $("header.pc .menu .depth1>a").mouseover(function(){
        $("header.pc .menu .depth1>ul").removeClass("over");
        $("header.pc .right .search>div").hide();
        $(".menu_wrap").addClass("over");
        $(this).siblings("ul").addClass("over");
      });
      $("header.pc .menu").mouseleave(function(){
        $("header.pc .menu .depth1>ul").removeClass("over");
        $("header.pc .menu_wrap").removeClass("over");
        $("header .menu_wrap").css("height","");
      });
      $("header.pc .menu .depth1>ul").mouseover(function () {
        $(this).siblings("a").addClass("over");
      })
      $("header.pc .menu .depth1>ul").mouseleave(function () {
        $("header.pc .menu .depth1>a").removeClass("over");
      })

    } else{
      //모바일
      $("header").removeClass("pc").addClass("mo");
      $("header.mo .mo_open").click(function(){
        setTimeout(function(){
          $(".cover").show();
        }, 450);
        $("header.mo .mid .right").addClass("on");
        $("header.mo .menu").addClass("on");
        $("header.mo .ranking").addClass("on");
        $("header.mo .weather").addClass("on");
        $("header.mo .menu_wrap .right").addClass("close");
        $("header.mo .mo_close").addClass("ani");
        $(".mj").show();
      });
      $("header.mo .mo_close").click(function(){
        $(".cover").hide();
        $("header.mo .mid .right").removeClass("on");
        $("header.mo .menu").removeClass("on");
        $("header.mo .ranking").removeClass("on");
        $("header.mo .weather").removeClass("on");
        $("header.mo .menu_wrap .right").removeClass("close");
        $(this).removeClass("ani");
        $(".mj").hide();
      })
    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });

  $(window).load(function () {
      var $slider = $('.main1 .text_slide');
      var $progressBar = $('.main1 .progress');
      var $progressBarLabel = $( '.slider__label' );
  
      $(".main1 .progress").css("background-size",100 / $(".main1 .slick-dots li").length+"% 100%")
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
        
        $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel.text( calc + '% completed' );
      });

      var $slider2 = $('.main4 .right .slide');
      var $progressBar2 = $('.main4 .progress');
      var $progressBarLabel2 = $( '.slider__label' );
  
      $(".main4 .right .progress").css("background-size",100 / $(".main4 .right .slick-dots li").length+"% 100%")
      
      $slider2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
        
        $progressBar2
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel2.text( calc + '% completed' );
      });

      var $slider3 = $('.vod_hot .slide');
      var $progressBar3 = $('.vod_hot .progress');
      var $progressBarLabel3 = $( '.slider__label' );
  
      $(".vod_hot .progress").css("background-size",100 / $(".vod_hot .slick-dots li").length+"% 100%")
      
      $slider3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
        
        $progressBar3
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel3.text( calc + '% completed' );
      });

      $("html").css("opacity","1");
  });
  
  var depth1_H = 0
  $("header .menu .depth1").each(function(){
    if($(this).children("ul").outerHeight() > depth1_H){
      depth1_H = $(this).children("ul").outerHeight()
    }
  });
  $("header .menu .depth1>ul").css("height",depth1_H+"px");
  $("header.pc .menu .depth1>a").mouseover(function(){
    // 메뉴 배경 길이
    $("header .menu_wrap.over").css("height",$(this).outerHeight()+$("header .menu .depth1>ul").outerHeight()+"px");
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
  $(".btn-gototop").click(function () {
    $('body,html').animate({
      'scrollTop': 0
    }, 300, 'swing', function () {});
  });

  $(".select_shape .sel-btn").click(function(){
    $(".select_shape div").css("height","")
    if($(this).siblings("div").hasClass("active")){
        $(".select_shape div").removeClass("active");
    }else{
        $(".select_shape div").removeClass("active");
        $(this).siblings("div").addClass("active");

        if(500 > $(this).siblings("div").find("li").outerHeight()* $(this).siblings("div").find("li").length){
          $(this).siblings("div").css("height",$(this).siblings("div").find("li").outerHeight()* $(this).siblings("div").find("li").length+4+"px")
        }
    }
    
  });
  $("html").on("click focusin",function(e){
    
      if($(e.target).parents(".select_shape").length < 1){
      $(".select_shape div").removeClass("active");
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
  $(".line_depth .right button").click(function(){
    $(this).siblings("div").toggleClass("active");
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

  $("header .noti .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    vertical:true,
});

  $("header .ranking .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    vertical:true,
});

$(".main1 .text_slide").slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  arrows: true,
  prevArrow : $('.visual .btn .prev'), 
  nextArrow : $('.visual .btn .next'),
  asNavFor: '.main1 .img_slide',
  dots:true,
  fade:true
});
$(".main1 .img_slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
  variableWidth: true,
  asNavFor: '.main1 .text_slide',
  responsive:[
        {
            breakpoint:1451,
            settings :{
              autoplay:false,
              variableWidth: false,
            }
          },{
            breakpoint:1025,
            settings :{
              slidesToShow: 1,
              centerMode:true,
              variableWidth: false,
              centerPadding: '100px',
            }
          },{
            breakpoint:501,
            settings :{
              slidesToShow: 1,
              centerMode:true,
              variableWidth: false,
              centerPadding: '50px',
            }
          }
        ]
});
$('.visual .btn .pause').click(function() {
  $('.main1 .img_slide').slick('slickPause');
  $(this).css("display","none");
  $('.visual .btn .play').css("display","inline-block");
});
$('.visual .btn .play').click(function() {
  $('.main1 .img_slide').slick('slickPlay');
  $(this).css("display","none");
  $('.visual .btn .pause').css("display","inline-block");
});
$(".main1 .text_slide").on("afterChange", function(){
  var slide_ing = $(".main1 .text_slide .slick-dots li.slick-active").index()+1;
  $(".main1 .visual .btn span").text("0"+slide_ing)
});
var slide_all = $(".main1 .text_slide .slick-dots li").length;
  $(".main1 .visual .btn em").text("0"+slide_all);

$(".support .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  arrows: true,
  prevArrow : $('.support .btn .prev'), 
  nextArrow : $('.support .btn .next'),
  responsive:[
        {
            breakpoint:1201,
            settings :{
              slidesToShow: 3,
              infinite:true,
            }
          },{
            breakpoint:501,
            settings :{
              slidesToShow: 1,
              infinite:true,
            }
          }
        ]
});

$('.support .btn .pause').click(function() {
  $('.support .slide').slick('slickPause');
  $(this).css("display","none");
  $('.support .btn .play').css("display","inline-block");
});
$('.support .btn .play').click(function() {
  $('.support .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.support .btn .pause').css("display","inline-block");
});

$(".main2 .noti ul").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
  vertical:true,
});

$(".main3 #tab-panel2_1 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow : $('.main3 #tab2_1 .btn .prev'), 
  nextArrow : $('.main3 #tab2_1 .btn .next'),
});
$('.main3 #tab2_1 .btn .pause').click(function() {
  $('.main3 #tab-panel2_1 .slide').slick('slickPause');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .play').css("display","inline-block");
});
$('.main3 #tab2_1 .btn .play').click(function() {
  $('.main3 #tab-panel2_1 .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .pause').css("display","inline-block");
});
$(".main3 #tab-panel2_2 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow : $('.main3 #tab2_2 .btn .prev'), 
  nextArrow : $('.main3 #tab2_2 .btn .next'),
});
$('.main3 #panel2_2 .btn .pause').click(function() {
  $('.main3 #tab-tab2_2 .slide').slick('slickPause');
  $(this).css("display","none");
  $('.main3 #panel2_2 .btn .play').css("display","inline-block");
});
$('.main3 #panel2_2 .btn .play').click(function() {
  $('.main3 #tab-tab2_2 .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.main3 #panel2_2 .btn .pause').css("display","inline-block");
});
$(".main3 #tab-panel2_3 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow : $('.main3 #tab2_3 .btn .prev'), 
  nextArrow : $('.main3 #tab2_3 .btn .next'),
});
$('.main3 #tab2_1 .btn .pause').click(function() {
  $('.main3 #tab-panel2_3 .slide').slick('slickPause');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .play').css("display","inline-block");
});
$('.main3 #tab2_1 .btn .play').click(function() {
  $('.main3 #tab-panel2_3 .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .pause').css("display","inline-block");
});
$(".main3 #tab-panel2_4 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow : $('.main3 #tab2_4 .btn .prev'), 
  nextArrow : $('.main3 #tab2_4 .btn .next'),
});
$('.main3 #tab2_1 .btn .pause').click(function() {
  $('.main3 #tab-panel2_4 .slide').slick('slickPause');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .play').css("display","inline-block");
});
$('.main3 #tab2_1 .btn .play').click(function() {
  $('.main3 #tab-panel2_4 .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .pause').css("display","inline-block");
});
$(".main3 #tab-panel2_5 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow : $('.main3 #tab2_5 .btn .prev'), 
  nextArrow : $('.main3 #tab2_5 .btn .next'),
});
$('.main3 #tab2_1 .btn .pause').click(function() {
  $('.main3 #tab-panel2_5 .slide').slick('slickPause');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .play').css("display","inline-block");
});
$('.main3 #tab2_1 .btn .play').click(function() {
  $('.main3 #tab-panel2_5 .slide').slick('slickPlay');
  $(this).css("display","none");
  $('.main3 #tab2_1 .btn .pause').css("display","inline-block");
});

$(".main3 .right .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 2,
  arrows:false,
  dots:true,
  responsive:[
        {
            breakpoint:501,
            settings :{
              slidesToShow: 1,
            }
          }
        ]
});

$(".main4 .left .slide").slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  arrows:false,
  dots:true
});

$(".main4 .right .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  variableWidth: true,
  dots:true,
  prevArrow : $('.main4 .right .btn .prev'), 
  nextArrow : $('.main4 .right .btn .next'),
});
$(".main4 .right .slide").on("afterChange", function(){
  var slide_ing2 = $(".main4 .right .slide .slick-dots li.slick-active").index()+1;
  $(".main4 .right .btn span").text("0"+slide_ing2)
});
var slide_all2 = $(".main4 .right .slide .slick-dots li").length;
  $(".main4 .right .btn em").text("0"+slide_all2);
  $('.main4 .right .btn .pause').click(function() {
    $('.main4 .right .slide').slick('slickPause');
    $(this).css("display","none");
    $('.main4 .right .btn .play').css("display","inline-block");
  });
  $('.main4 .right .btn .play').click(function() {
    $('.main4 .right .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.main4 .right .btn .pause').css("display","inline-block");
  });


  $(".pop_wrap .left .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows:false,
    dots:true
  }).on('afterChange', function() {
    if($(".pop_wrap .left .slick-dots li").length >= 10){
      if($(".pop_wrap .left .slick-dots .slick-active").index() >= 9){
        $(".pop_wrap .left .btn span").text(($(".pop_wrap .left .slick-dots .slick-active").index()+1));
      }else{
        $(".pop_wrap .left .btn span").text("0"+($(".pop_wrap .left .slick-dots .slick-active").index()+1));
      }
    }else{
      $(".pop_wrap .left .btn span").text("0"+($(".pop_wrap .left .slick-dots .slick-active").index()+1));
    }
  });
  if($(".pop_wrap .left .slick-dots li").length >= 10){
    $(".pop_wrap .left .btn p em").text($(".pop_wrap .left .slick-dots li").length);
  }else{
    $(".pop_wrap .left .btn p em").text("0"+$(".pop_wrap .left .slick-dots li").length);
  }
    $('.pop_wrap .left .pause').click(function() {
    $('.pop_wrap .left .slide').slick('slickPause');
    $(this).css("display","none");
    $('.pop_wrap .left .play').css("display","inline-block");
  });
  $('.pop_wrap .left .play').click(function() {
    $('.pop_wrap .left .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.pop_wrap .left .pause').css("display","inline-block");
  });

  $(".pop_wrap .right .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    arrows:false,
    dots:true,
    prevArrow : $('.pop_wrap .right .btn .prev'), 
    nextArrow : $('.pop_wrap .right .btn .next'),
    responsive:[
      {
          breakpoint:1025,
          settings :{
            slidesToShow: 2,
          }
        },
        {
            breakpoint:801,
            settings :{
              slidesToShow: 1,
            }
          }
      ]
  }).on('afterChange', function() {
    if($(".pop_wrap .right .slick-dots li").length >= 10){
      if($(".pop_wrap .right .slick-dots .slick-active").index() >= 9){
        $(".pop_wrap .right .btn span").text(($(".pop_wrap .right .slick-dots .slick-active").index()+1));
      }else{
        $(".pop_wrap .right .btn span").text("0"+($(".pop_wrap .right .slick-dots .slick-active").index()+1));
      }
    }else{
      $(".pop_wrap .right .btn span").text("0"+($(".pop_wrap .right .slick-dots .slick-active").index()+1));
    }
  });
  if($(".pop_wrap .right .slick-dots li").length >= 10){
    $(".btn p em").text($(".pop_wrap .right .slick-dots li").length);
  }else{
    $(".btn p em").text("0"+$(".pop_wrap .right .slick-dots li").length);
  }
  $('.pop_wrap .right .pause').click(function() {
    $('.pop_wrap .right .slide').slick('slickPause');
    $(this).css("display","none");
    $('.pop_wrap .right .play').css("display","inline-block");
  });
  $('.pop_wrap .right .play').click(function() {
    $('.pop_wrap .right .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.pop_wrap .right .pause').css("display","inline-block");
  });

  $(".portal .right").slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    dots:false,
    prevArrow : $('.portal .left .btn .prev'), 
    nextArrow : $('.portal .left .btn .next'),
    responsive:[
          {
              breakpoint:1201,
              settings :{
                slidesToShow: 4,
              }
            },
            {
                breakpoint:501,
                settings :{
                  slidesToShow: 2,
                  infinite:true,
                }
              }
          ]
  });

  $(".youth_pop .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
  });

  $(".detail_top .slide_b").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows:false,
    asNavFor: '.detail_top .slide_s',
  });
  $(".detail_top .slide_s").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    arrows:false,
    asNavFor: '.detail_top .slide_b',
    focusOnSelect: true,
      responsive:[
    {
        breakpoint:1025,
        settings :{
          slidesToShow: 3,
          infinite:true,
        }
      }
    ]
  });
  
  $(".pf_slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    arrows:true,
    responsive:[
      {
          breakpoint:1025,
          settings :{
            slidesToShow: 3,
            infinite:true,
          }
        }
      ]
  });
  
$(".vod_detail .list .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  arrows: true,
  dots:true,
  prevArrow : $('.vod_detail .list .btn .prev'), 
  nextArrow : $('.vod_detail .list .btn .next'),
}).on('afterChange', function() {
  if($(".vod_detail .slick-dots li").length >= 10){
    if($(".vod_detail .slick-dots .slick-active").index() >= 9){
      $(".vod_detail .btn span").text(($(".vod_detail .slick-dots .slick-active").index()+1));
    }else{
      $(".vod_detail .btn span").text("0"+($(".vod_detail .slick-dots .slick-active").index()+1));
    }
  }else{
    $(".vod_detail .btn span").text("0"+($(".vod_detail .slick-dots .slick-active").index()+1));
  }
});
if($(".vod_detail .slick-dots li").length >= 10){
  $(".vod_detail .btn p em").text($(".vod_detail .slick-dots li").length);
}else{
  $(".vod_detail .btn p em").text("0"+$(".vod_detail .slick-dots li").length);
}

$(".vod_list .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  arrows: true,
  prevArrow : $('.vod_list .btn .prev'), 
  nextArrow : $('.vod_list .btn .next'),
  responsive:[
    {
        breakpoint:1025,
        settings :{
          slidesToShow: 4,
          infinite:true,
        }
      },{
        breakpoint:601,
        settings :{
          slidesToShow: 2,
          infinite:true,
        }
      }
    ]
});

$(".vod_list2 .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 6,
  arrows: true,
  prevArrow : $('.vod_list2 .btn .prev'), 
  nextArrow : $('.vod_list2 .btn .next'),
  responsive:[
    {
        breakpoint:1025,
        settings :{
          slidesToShow: 3,
          infinite:true,
        }
      },
      {
        breakpoint:601,
        settings :{
          slidesToShow: 2,
          infinite:true,
        }
      }
    ]
});

$(".vod_hot .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  arrows:true,
  dots:true,
  prevArrow : $('.vod_hot .btn .prev'), 
  nextArrow : $('.vod_hot .btn .next'),
  responsive:[
    {
        breakpoint:1201,
        settings :{
          slidesToShow: 4,
          infinite:true,
        }
      },{
        breakpoint:601,
        settings :{
          slidesToShow: 3,
          infinite:true,
        }
      }
    ]
}).on('afterChange', function() {
  if($(".vod_hot .slick-dots li").length >= 10){
    if($(".vod_hot .slick-dots .slick-active").index() >= 9){
      $(".vod_hot .btn span").text(($(".vod_hot .slick-dots .slick-active").index()+1));
    }else{
      $(".vod_hot .btn span").text("0"+($(".vod_hot .slick-dots .slick-active").index()+1));
    }
  }else{
    $(".vod_hot .btn span").text("0"+($(".vod_hot .slick-dots .slick-active").index()+1));
  }
});
if($(".vod_hot .slick-dots li").length >= 10){
  $(".vod_hot .btn em").text($(".vod_hot .slick-dots li").length);
}else{
  $(".vod_hot .btn em").text("0"+$(".vod_hot .slick-dots li").length);
};

// $("header .noti .slide").slick({
//   infinite: true,
//   autoplay: true,
//   slidesToShow: 5,
//   arrows: false,
//   dots: true,
//       prevArrow : $('.banner .btn .prev'), 
//       nextArrow : $('.banner .btn .next'),
//   responsive:[
//     {
//         breakpoint:1100,
//         settings :{
//           slidesToShow: 4,
//           infinite:true,
//         }
//       },
//       {
//           breakpoint:501,
//           settings :{
//             slidesToShow: 2,
//             infinite:true,
//           }
//         }
//     ]
// }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//   if (currentSlide !== nextSlide) {
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

  $(".ranking>button").click(function(){
    if($(".ranking .list").hasClass("active")){
      $(".ranking .list").stop().slideUp();
      $(".ranking .list").removeClass("active");
    }else{
      $(".ranking .list").stop().slideDown();
      $(".ranking .list").addClass("active");
    }
  });
  $("header .mid .right .search").click(function(){
    $("header.mo .menu_wrap .right").css("z-index","-1");
    $(this).addClass("active");
    $(".search_wrap").show();
  });
  $(".search_wrap .close").click(function(){
    $("header.mo .menu_wrap .right").css("z-index","");
    $("header .mid .right .search").removeClass("active");
    $(".search_wrap").hide();
  });

  $("#page_navi .page_a").click(function(){
    $("#page_navi .page_a").removeClass("active");
    $(this).addClass("active");
  });

  $(".pop_wrap div.close button.close").click(function(){
    $(".pop_wrap").hide();
  });

  $(".main2 .tabpanel_wrap ul button").click(function(){
    $(this).toggleClass("active");
  });
  
  $(".mj").mouseover(function(){
    $(".mj .txt").show();
  });
  $(".mj .txt").click(function(){
    $(this).hide();
  });
  $(".mj>button").click(function(){
    $(".mj>div").show();
  });
  $(".mj div button.close").click(function(){
    $(".mj>div").hide();
    $(".mj .txt").hide();
  });

  $(".page_n").click(function(){
    if($(this).parents().hasClass("main1")){
      $("#page_navi a").removeClass("active");
      $("#page_navi a").eq(1).addClass("active");
    }else if($(this).parents().hasClass("main2")){
      $("#page_navi a").removeClass("active");
      $("#page_navi a").eq(2).addClass("active");
    }else if($(this).parents().hasClass("main3")){
      $("#page_navi a").removeClass("active");
      $("#page_navi a").eq(3).addClass("active");
    }else if($(this).parents().hasClass("main4")){
      $("#page_navi a").removeClass("active");
      $("#page_navi a").eq(0).addClass("active");
    }
  });

  $(".input_wrap input").focus(function(){
    $(this).parent().css("border-color","#0072BC");
  });
  $(".input_wrap input").focusout(function(){
    $(this).parent().css("border-color","");
  });
  
  $(".choice_form .grid .right ul button").click(function(){
    $(this).toggleClass("active");
  });
  $(".youth_pop .wrap .tit button").click(function(){
    $(".youth_pop").hide();
  });

  $(".detail_tab li").click(function(){
    $(window).scrollTop($(".tabpanel_wrap .text_wrap").eq($(this).index()).offset().top-$("header").outerHeight()-50)
  });

  $(".step_con .use button").click(function(){
    $(this).toggleClass("active");
  });

  $(".vod_share").click(function(){
    $(this).toggleClass("active");
    $(this).siblings("ul").toggleClass("active");
  });
  $(".like").click(function(){
    $(this).toggleClass("active");
  });


});