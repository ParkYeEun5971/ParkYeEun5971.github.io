
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
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });

  // 맨위로 가기
  $(".btn-gototop").click(function () {
    $('body,html').animate({
      'scrollTop': 0
    }, 300, 'swing', function () {});
  });

  $(".main3 .left .slide").slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    dots: false,
  });

  $(".main3 .right .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    asNavFor: '.slider-nav'
  });
  $(".main8 .slide").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  });
$(window).scroll(function(){
  $(".main7 .doc1_pop, .main7 .doc2_pop, .main7 .doc3_pop").css("display","none");
  var height = $(".footer").innerHeight();
 var scr = $(this).scrollTop();
 var main1 = $(".main1").innerHeight();
 console.log(scr)
 if(scr >= main1){
   $(".footer").addClass("fixed")
   $(".main").css({
     "padding-bottom":"0",
     "padding-top":height+"px"
   })
 }
 else{
  $(".footer").removeClass("fixed")
  $(".main").css({
    "padding-top":"0",
    "padding-bottom":height+"px"
  })
 }
})
$(".main7 .bot .doc .doc1").click(function(){
  $(".main7 .doc1_pop").css("display","block");
});
$(".main7 .doc1_pop .close").click(function(){
  $(".main7 .doc1_pop").css("display","");
});
$(".main7 .bot .doc .doc2").click(function(){
  $(".main7 .doc2_pop").css("display","block");
});
$(".main7 .doc2_pop .close").click(function(){
  $(".main7 .doc2_pop").css("display","");
});
$(".main7 .bot .doc .doc3").click(function(){
  $(".main7 .doc3_pop").css("display","block");
});
$(".main7 .doc3_pop .close").click(function(){
  $(".main7 .doc3_pop").css("display","");
});
});