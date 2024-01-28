
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
$(function () {
  $(document).ready(function(){
    setTimeout(function(){
    $('html, body').scrollTop(0);
    }, 500);
    });

  responsivePage();
  $(window).resize(function () {
    responsivePage();
    $(".main2").css("margin-top",$(".main1 img").height()+"px");
  });

  // 맨위로 가기
  $(".btn-gototop").click(function () {
    $('body,html').animate({
      'scrollTop': 0
    }, 300, 'swing', function () {});
  });

  $(window).scroll(function () {
    var Top = $(document).scrollTop();
    if(Top >= $(".main3").offset().top - $("header").height()){
      $("header").removeClass("black");
      $("header a").removeClass("active");
      $("header a:nth-of-type(3)").addClass("active");
    }
    else if(Top >= $(".main2").offset().top - $("header").height()){
      $("header").addClass("black");
      $("header a").removeClass("active");
      $("header a:nth-of-type(2)").addClass("active");
    }
    else{
      $("header").removeClass("black");
      $("header a").removeClass("active");
      $("header a:nth-of-type(1)").addClass("active");
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
  $(window).load(function(){
    $(".main2").css("margin-top",$(".main1 img").height()+"px");

    $(".main1 .inner p").textillate({
        in  : {
            effect: "flipInX",
            delay: 10,
            callback: function () {
              $(".main1 .inner>span").css({opacity:"1",transform:"translateY(0)"})
          }
        }
    });
  });

  $(".main3 .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    asNavFor: $('.main3 .opacity_slide'),
    prevArrow: $('.main3 .btn .prev'),
    nextArrow: $('.main3 .btn .next'),
    fade:true,
    autoplaySpeed : 7000,
  });

  $(".main3 .opacity_slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: $('.main3 .slide'),
    centerMode:true,
    centerPadding: '22%',
    autoplaySpeed : 7000,
    responsive:[
        {
          breakpoint:1600,
          settings :{
            centerPadding: '17%',
          }
        }
    ]
  });

  $("header a").click(function(){
    $("header a").removeClass("active");
    $(this).addClass("active");
    if($("header a:first-child")){
      $(window).scrollTop(0);
    }
  });
  
});