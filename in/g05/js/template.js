function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
	
    if (windowWidth > 1200) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");
      $("header .wrap").removeClass("over");

      $("header.pc .menu .depth1>a").on("mouseover focusin",function(e){
        $("header.pc .menu .depth1>ul").removeClass("over");
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
      });
      $("header.pc .menu .depth1>a").on("mouseover focusin",function(e){
	    // 메뉴 배경 길이
	    $("header.pc .wrap.over").css("height",$(this).siblings("ul").outerHeight()+$("header").outerHeight()+"px");
	  });
      
      $("header .search input").on("focusin",function(e){
    	  $("header.pc .menu .depth1>ul").removeClass("over");
          $("header.pc .wrap").removeClass("over");
          $("header .wrap").css("height","");
          $("header.pc .menu .depth1>a").removeClass("over");
      });
    } else{
      //모바일
      $("header").removeClass("pc").addClass("mo");
	  $("header .wrap").removeClass("over");
	  $("header .wrap").css("height","");
	  
      $("header.mo .mo_open").click(function(){
        $("header.mo .top, header.mo .menu, header.mo .mid,header.mo .clear").addClass("on");
        $("header.mo .right").addClass("close");
        $("header.mo .mo_close").addClass("ani");
      });
      $("header.mo .mo_close").click(function(){
        $("header.mo .top, header.mo .menu, header.mo .mid,header.mo .clear").removeClass("on");
        $("header.mo .right").removeClass("close");
        $(this).removeClass("ani");
      });
	  $("header .menu .depth1>a").click(function () {
		$("header .menu .depth1").removeClass("current");
		$(this).parent("li").addClass("current");
	});
	$("header .menu .depth2>a").click(function () {
		$("header .menu .depth2").removeClass("current");
		$(this).parent("li").addClass("current");
	});
	$(".search_open").click(function(){
		$("header .search").css("display","flex");
	});
	$(".search_close").click(function(){
		$("header .search").css("display","");
	});
    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });
  
  $("header .right .search>button").click(function(){
    $("header .wrap").addClass("over");
    $("header .right .search>div").show();
  });
  $(".search_close").click(function(){
    $("header .wrap").removeClass("over");
    $("header .right .search>div").hide();
  });


  $("footer .slide").slick({
	infinite: true,
	autoplay: true,
	slidesToShow: 6,
	dots: true,
	prevArrow: $('footer .prev'),
	nextArrow: $('footer .next'),
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				infinite: true,
				autoplay: true,
			}
		}, {
			breakpoint: 700,
			settings: {
				infinite: true,
				variableWidth: true,
				autoplay: true,
			}
		}
	]
	}).on('afterChange', function () {
		$("footer .btn span").text($("footer .slick-dots .slick-active").index() + 1);
		$("footer .btn ul li").removeClass("active");
		$("footer .btn ul li").eq($("footer .slick-dots .slick-active").index()).addClass("active");
	});
	$("footer .btn p em").text($(".main1 .slick-dots li").length);
	$('footer .btn .pause').click(function () {
		$('footer .slide').slick('slickPause');
		$(this).css("display", "none");
		$('footer .btn .play').css("display", "inline-flex");
	});
	$('footer .btn .play').click(function () {
		$('footer .slide').slick('slickPlay');
		$(this).css("display", "none");
		$('footer .btn .pause').css("display", "inline-flex");
	});
	if($(".sub_content").find(".pd_none").length == 1){
		$(".sub_content").addClass("has_pd_none");
	}
	if(!$(".sub_content_wrap .depth3").length == 1){
		$(".sub_top .depth2").addClass("one");
	}
	if($(".sitemap_page").length == 1){
		$(".sub_top .depth2").addClass("one");
	}
	if($("header .clear").length == 1){
		$("header .wrap").addClass("has_clear");
	}

	$(".branch section button").click(function(){
		$(this).siblings(".map_pop").addClass("show");
	});
	$(".map_pop_close, .map_pop .bg_cover").click(function(){
		$(".map_pop").removeClass("show");
	});
	$("header .menu .depth2").each(function(){
		if($(this).find(".depth3").length < 1){
			$(this).addClass("not_depth3");
		}
	});
	
	$(".tm_btn.back").click(function(){
		window.history.back()
	});
	
});
//체킹
function check() {
	
	if ($(':radio[name="q1"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q2"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q3"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q4"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q5"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q6"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q7"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q8"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q9"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q10"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($(':radio[name="q11"]:checked').val() != "n") {
		alert("전체 아니오로 선택되어야 합니다.");
		return false;
	}
	
	if ($("#chk_agree").is(':checked') != true) {
		alert("이용약관에 동의해주셔야 합니다.");
		return false;
	}
	
	location.href = "/page/10156/10120.tc";
}

function NewWin2() {
	window.open('/page/10027/10121.tc?viewType=blank', 'win', 'width=760,height=530,top=100,left=200');
}
function NewWin3() {
	window.open('/page/10027/10122.tc?viewType=blank', 'win', 'width=760,height=530,top=100,left=200');
}
function NewWin4() {
	window.open('/page/10027/10123.tc?viewType=blank', 'win', 'width=760,height=530,top=100,left=200');
}

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


// $("header .top .orange").on("keydown", function (event) {
//   if(event.keyCode === 9) {
//     if(event.shiftKey){
//       // Shift + Tab 이벤트
//       event.preventDefault();
//         }else{
//           // Tab 이벤트
//           event.preventDefault();
//         }
//   }
// });