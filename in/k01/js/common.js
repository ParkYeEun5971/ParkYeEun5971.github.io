
$(function () {
  // 탭 설정
  $(".com_tab>li").click(function(){
    $(this).siblings("li").removeClass("active");
    $(this).parents(".wrap").siblings(".tabpanel_wrap").find("div").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".wrap").siblings(".tabpanel_wrap").find(".tabpanel").eq($(this).index()).addClass("active");
  })

  $('.main7 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    centerMode:true,
    centerPadding:'12%',
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      /* 자바스크립트
      if (currentSlide !== nextSlide) {
          document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
              // timeout required or Slick will overwrite the classes
              setTimeout(() => next.classList.add('slick-current', 'slick-center'));
          });
      }
      */
      // IE 호환성을 고려한 제이쿼리
      if (currentSlide !== nextSlide) {
          $('.slick-center + .slick-cloned').each(function(index, node) {
              var $node = $(node);
              
              setTimeout(function() {
                  $node.addClass('slick-current');
                  $node.addClass('slick-center');
              });
          });
      }
  });
  $('.main10 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    centerMode:true,
    centerPadding:'22%',
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
});
  $('.main15 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main15 .prev'), 
    nextArrow : $('.main15 .next'),
  })
  $('.main8 #tab-panel1 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main8 #tab-panel1 .prev'), 
    nextArrow : $('.main8 #tab-panel1 .next'),
  });
  $('.main8 #tab-panel2 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main8 #tab-panel2 .prev'), 
    nextArrow : $('.main8 #tab-panel2 .next'),
  });
  $('.main8 #tab-panel4 .slide.mo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main8 #tab-panel4 .mo .prev'), 
    nextArrow : $('.main8 #tab-panel4 .mo .next'),
  });
  $('.main8 #tab-panel4 .slide.pc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main8 #tab-panel4 .pc .prev'), 
    nextArrow : $('.main8 #tab-panel4 .pc .next'),
  });
  $('.main12 .slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    prevArrow : $('.main12 .prev'), 
    nextArrow : $('.main12 .next'),
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
        });
  
    }
  }
  $(function(){
      if($('.ani').length>0){
          section_active.init();
      }
  });
  
$(window).resize(function () {
  $(".footer").css("margin-bottom",$(".fixed").outerHeight()+"px");
  $(".talk").css("bottom",$(".fixed").outerHeight()+20+"px")
});
$(window).load(function(){
  $(".footer").css("margin-bottom",$(".fixed").outerHeight()+"px");
  $(".talk").css("bottom",$(".fixed").outerHeight()+20+"px");
  //금가루
  $(".gold").snowfall({
    minSize: 3,
    maxSize:6,
    round : false,
    maxSpeed:2,
    minSpeed:2,
    flakeCount:300 ,
 });
  $(".gold2").snowfall({
    minSize: 2,
    maxSize:4,
    round : false,
    maxSpeed:2,
    minSpeed:2,
    flakeCount:200 ,
 });
});
  
  $(".pop h1 button").click(function(){
    $(".pop").css("display","none");
  });
  $(".checkbox1 span").click(function(){
    $(".pop").css("display","block");
  });

  $(".main7 div.box").mouseover(function(){
    $(".main7 div.box").addClass("over");
    $(this).removeClass("over");
  });
  $(".main7 div.box").mouseleave(function(){
    $(".main7 div.box").removeClass("over");
  });


$(document).ready(function(){
	var moveType = 0; 
	var moveSpeed = 1500; /*슬라이드 속도*/
	var moveWork = false; 
	var movePause = false; 

	function tkSlide(){		
		var $tkSlide = $('.banner_wraper'),
			$tkSlidePos = $('.banner_wraper').css('left').replace(/[^-\d\.]/g, ''),
			$tkWidth = $('.banner_wraper').width(),
			$tklength = $('.banner_wraper li').length,
			$tkSlideW = $tkWidth,
			$tkitemW = $('.banner_wraper li').width(),
			$tkitemFirst = $('.banner_wraper li:first-child');

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
					$tkSlide.append("<li>" + $('.banner_wraper li:first-child').html() + "</li>");
					$('.banner_wraper li:first-child').remove(); 
					$tkSlide.css('left' ,'0');
					tkSlide();
			  }});
			}
		}
	}
	tkSlide();
});

    var win_set = function(){
      document_height = $(document).height(); // 문서 전체 높이
      document_scrollTop = $(document).scrollTop(); // 문서 전체 높이 중 스크롤 위치
      window_height = $(window).height(); // 창 높이
      footer_height = $(".fixed").height();
      gap = document_height - footer_height - window_height;
      bottom = document_scrollTop - gap ;
  
      if(document_scrollTop > gap){
          $(".talk").css("bottom",$(".fixed").outerHeight()+$(".footer").outerHeight()+20+"px")
      }else{
         $(".talk").css("bottom",$(".fixed").outerHeight()+20+"px")
      }
  };
  
  $(document).ready(function(){
      win_set();
  });
  $(window).resize(function(){
      win_set();
  });
  $(window).scroll(function (){
      win_set();
  });

$(".m_menu .open").click(function(){
  $(".m_menu").addClass("active");
})
$(".m_menu .close,.m_menu a").click(function(){
  $(".m_menu").removeClass("active");

})

});