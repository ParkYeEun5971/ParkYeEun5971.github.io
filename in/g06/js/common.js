
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
        $(this).parents(".wrap").addClass("over");
        $(this).siblings("ul").addClass("over");
      });
      $("header.pc .menu").mouseleave(function(){
        $("header.pc .menu .depth1>ul").removeClass("over");
        $("header.pc .wrap").removeClass("over");
        $("header .wrap").css("height","");
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
        $("header.mo .top").addClass("on");
        $("header.mo .wrap>.inner").addClass("on");
        $("header.mo .right").addClass("close");
        $("header.mo .mo_close").addClass("ani");
      });
      $("header.mo .mo_close").click(function(){
        $("header.mo .top").removeClass("on");
        $("header.mo .wrap>.inner").removeClass("on");
        $("header.mo .right").removeClass("close");
        $(this).removeClass("ani");
      })
    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
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

  $(window).load(function () {
    $("header .menu .depth2").each(function(){
      $(this).find("span").css("width",$(this).find("span").outerWidth()+1+"px")
    })
  });

  $("header .right .search>button").click(function(){
    $("header .wrap").addClass("over");
    $("header .right .search>div").show();
  });
  $(".search_close").click(function(){
    $("header .wrap").removeClass("over");
    $("header .right .search>div").hide();
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
    $("header .wrap.over").css("height",depth1_H+$("header").outerHeight()+"px");
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

  $(".b_slide .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: '.s_slide'
});
  $(".s_slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    arrows: false,
    dots: false,
    asNavFor: '.b_slide .slide',
    focusOnSelect: true,
    responsive:[
      {
          breakpoint:500,
          settings :{
            slidesToShow: 2,
            infinite:true,
          }
        }
    ]
});

$(".img_jb .slide").slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  arrows: true,
  dots: true,
  prevArrow : $(".img_jb .right .btn .prev"), 
  nextArrow : $(".img_jb .right .btn .next"), 
}).on('afterChange', function() {
  if($(".img_jb .slide .slick-dots li").length >= 10){
    if($(".img_jb .slide .slick-dots .slick-active").index() >= 9){
      $(".img_jb .btn span").text(($(".img_jb .slide .slick-dots .slick-active").index()+1));
    }else{
      $(".img_jb .btn span").text("0"+($(".img_jb .slide .slick-dots .slick-active").index()+1));
    }
  }else{
    $(".img_jb .btn span").text("0"+($(".img_jb .slide .slick-dots .slick-active").index()+1));
  }
});
if($(".img_jb .slide .slick-dots li").length >= 10){
  $(".img_jb .btn p em").text($(".img_jb .slide .slick-dots li").length);
}else{
  $(".img_jb .btn p em").text("0"+$(".img_jb .slide .slick-dots li").length);
};

$(".products .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
  dots: false,
});

$(".visual .slide").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  arrows: true,
  dots: true,
  asNavFor: '.slide_txt',
  fade:true,
  prevArrow : $(".visual .btn .prev"), 
  nextArrow : $(".visual .btn .next"), 
}).on('afterChange', function() {
  if($(".visual .slide .slick-dots li").length >= 10){
    if($(".visual .slide .slick-dots .slick-active").index() >= 9){
      $(".visual .bot .btn span").text(($(".visual .slide .slick-dots .slick-active").index()+1));
    }else{
      $(".visual .bot .btn span").text("0"+($(".visual .slide .slick-dots .slick-active").index()+1));
    }
  }else{
    $(".visual .bot .btn span").text("0"+($(".visual .slide .slick-dots .slick-active").index()+1));
  }
});
if($(".visual .slide .slick-dots li").length >= 10){
  $(".visual .bot .btn p em").text($(".visual .slide .slick-dots li").length);
}else{
  $(".visual .bot .btn p em").text("0"+$(".visual .slide .slick-dots li").length);
};
$(".slide_txt").slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  arrows: false,
  dots: false,
  asNavFor: '.visual .slide',
});
$('.visual .btn .pause').click(function() {
    $('.visual .slide').slick('slickPause');
    $(this).css("display","none");
    $('.visual .btn .play').css("display","inline-block");
  });
  $('.visual .btn .play').click(function() {
    $('.visual .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.visual .btn .pause').css("display","inline-block");
  });

  $(".service .slide").each(function() {
    $(this).slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        arrows: false,
        dots: false,
        responsive:[
          {
              breakpoint:1201,
              settings :{
                slidesToShow: 4,
                infinite:true,
              }
            },
            {
                breakpoint:851,
                settings :{
                  slidesToShow: 3,
                  infinite:true,
                }
              },
              {
                  breakpoint:651,
                  settings :{
                    slidesToShow: 2,
                    infinite:true,
                  }
                }
          ]
        });
  });

  $(".banner .slide").slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  });
  $('.banner .btn .pause').click(function() {
    $('.banner .slide').slick('slickPause');
    $(this).css("display","none");
    $('.banner .btn .play').css("display","inline-block");
  });
  $('.banner .btn .play').click(function() {
    $('.banner .slide').slick('slickPlay');
    $(this).css("display","none");
    $('.banner .btn .pause').css("display","inline-block");
  });

$(".satis .bot li:nth-of-type(2) span").click(function(){
  $(".satis .bot li:nth-of-type(2) span").removeClass("active");
  $(this).index()+1;
  var n = 0;
  while($(this).index() >= n){
    $(".satis .bot li:nth-of-type(2) span").eq(n).addClass("active");
    n++;
  }
});

$(".rental .right .time button").click(function(){
  $(this).toggleClass("active");
});
$(".products .right .products_list button").click(function(){
  $(this).toggleClass("active");
});
$(".sub_top .right_btn button").click(function(){
  $(".sub_top .right_btn div").toggleClass("active");
});
$("header .search_open").click(function(){
  $("header .top .search").toggleClass("active");
});

$(".map_txt button").click(function(){
  $(".map_txt button").css("color","");
  $(this).css("color","#fff");
  $(".map_img img").first().css("opacity","0");
  $(".map_img img").hide();
  $(".map_img").find("."+$(this).attr("class")).show();
});

$(".visual .box li:nth-of-type(2) button").click(function(){
  $(this).toggleClass("active");
});

$(".call_open").click(function(){
  $(".call_pop").show();
});
$(".call_pop .close").click(function(){
  $(".call_pop").hide();
});

});