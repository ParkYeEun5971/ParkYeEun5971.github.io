
$(function () {

  // 탭 설정
  $(".com_tab>li").click(function(){
    $(this).siblings("li").removeClass("active");
    $(this).parent().siblings(".tabpanel_wrap").find("div").removeClass("active");
    $(this).addClass("active");
    $(this).parent().siblings(".tabpanel_wrap").find(".tabpanel").eq($(this).index()).addClass("active");
  })

  $('.slide_b').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slide_s'
  });
  $('.slide_s').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide_b',
    dots: false,
    centerMode: true,
    centerPadding:0,
    prevArrow : $('.main10 .prev'), 
    nextArrow : $('.main10 .next'),
  });
  $('.main3 .slide').slick({
      infinite: true,
      autoplay: false,
      slidesToShow: 1,
      arrows: false,
      dots: true,
  });
  
  section_active = {
    'init' : function(){
      this.action();
    },
    'action' : function(){
      var $ele = {
        'win' : $(window),
      }
  
          $ele.win.on('load scroll', function(){
          $('.ani').each(function(i){
            if( ( $ele.win.scrollTop() + ($ele.win.height() / 1.2) ) > $('.ani').eq(i).offset().top ){
              $(this).addClass('now');
            }else{
              $(this).removeClass('now');
            }
          });
          if( ( $ele.win.scrollTop() + ($ele.win.height() / 1.2) ) > $(".main9 .tabpanel_wrap .tabpanel .tab01_1").offset().top){
            setTimeout(function(){
              $(".main9 .tabpanel_wrap .tabpanel .tab01_1,.main9 .tabpanel_wrap .tabpanel .tab01_2,.main9 .tabpanel_wrap .tabpanel .tab01_3").addClass("noti")
            }, 900);
          }else{
            $(".main9 .tabpanel_wrap .tabpanel .tab01_1,.main9 .tabpanel_wrap .tabpanel .tab01_2,.main9 .tabpanel_wrap .tabpanel .tab01_3").removeClass("noti")
          }
          
        });
  
    }
  }
  $(function(){
      if($('.ani').length>0){
          section_active.init();
      }
  });

  $(function UD(){
    $('.move_UD').animate({'top' : '28%'}, 450);
    $('.move_UD').animate({'top' : '31%'}, 200,UD);
});
$(window).resize(function () {
  $(".main8 .pc_div").css("height",$(".main8 .gtp4.pc").outerHeight()+"px");
  $(".main8 .mo_div").css("height",$(".main8 .gtp4.mo").outerHeight()+"px");
});
$(window).load(function(){
  $(".main8 .pc_div").css("height",$(".main8 .gtp4.pc").outerHeight()+"px");
  $(".main8 .mo_div").css("height",$(".main8 .gtp4.mo").outerHeight()+"px");
});
  
  $(".pop h1 button").click(function(){
    $(".pop").css("display","none");
  });
  $(".checkbox1>div").click(function(){
    $(".pop").css("display","block");
  });
});