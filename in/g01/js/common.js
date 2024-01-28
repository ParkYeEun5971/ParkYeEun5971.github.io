
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var menuFirst = false;
	
    if (windowWidth > 1024) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");
      $("header.pc .menu .depth1>li>a").mouseover(function(){
        var max_h = 0;
        if(menuFirst == false){
          $("header.pc .menu .depth1>li").each(function(){
            var depth2H = $(this).find(".depth2").outerHeight();
            if(max_h<depth2H){max_h=depth2H}
          });
          $("header.pc .menu .depth1 .depth2").each(function(){
            $(this).css("height",max_h+"px")
              });
        }
        $("header.pc .menu .depth2").stop().slideDown();
        $("header.pc .menu ul.depth1").addClass("bf_b");
        
      });

      $("header.pc .menu .depth1").mouseleave(function(){
        $("header.pc .menu .depth2").stop().slideUp();
        $("header.pc .menu .yellow").stop().slideUp();
        $("header.pc .menu ul.depth1").removeClass("bf_b");
      });
      $(".sub_depth2").css("width","")
    } else{
      //모바일
    $("header").removeClass("pc").addClass("mo");
    $("header.mo .open").click(function(){
      $("header.mo .menu").css("left","0")
    }); 
    $("header.mo .mo_top .close").click(function(){
      $("header.mo .menu").css("left","")
    });

    }
    // if(windowWidth <= 500){
    //   $(".sub_depth2").css("width",$(".sub_depth2 li").outerWidth()*$(".sub_depth2 li").length+"px")
    // }
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

//탭 나누기
  var tab_len = $(".com_tab>li").length;
  $(".com_tab>li").css("width","calc(100% / "+tab_len+")");

  var sub_depth2 = $(".sub_depth2>li").length;
  $(".sub_depth2>li").css("width","calc(100% / "+sub_depth2+")");

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

   $("footer .slide").slick({
     infinite: true,
     autoplay: true,
     slidesToShow: 3,
     arrows: true,
     dots: false,
     prevArrow : $('.footer_bn .btn .prev'), 
     nextArrow : $('.footer_bn .btn .next'),
     responsive:[
         {
             breakpoint:1390,
             settings :{
               slidesToShow: 5,
               infinite:true,
             }
           },
           {
            breakpoint:550,
            settings :{
              slidesToShow: 4,
              infinite:true,
            }
          },
          {
            breakpoint:400,
            settings :{
              slidesToShow: 3,
              infinite:true,
            }
          }
       ]
   });

   $('footer .btn .pause').click(function() {
     $('footer .slide').slick('slickPause');
   });
   $('footer .btn .play').click(function() {
     $('footer .slide').slick('slickPlay');
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

  $(".main_top .right ul li button").click(function(){
    $(".main_top .right ul li button").parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".main_top .left>div").css("display","none");
    $(".main_top .left>div").eq($(this).parent().index()).css("display","block");
  });

  $(".sub_map .wrap ul li").mouseover(function(){
    $(this).attr("class")
    $(this).parent().siblings(".map").find("div>img").css("display","none")
    $(this).parent().siblings(".map").find("."+$(this).attr("class")).css("display","block")
  });
  $(".sub_map .wrap ul li").mouseleave(function(){
    $(this).parent().siblings(".map").find("div>img").css("display","none")
  });
  
  


});