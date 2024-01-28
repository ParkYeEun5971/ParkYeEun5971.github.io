function responsivePage() {
	var windowWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	if (windowWidth > 1200) {
		//피시 메뉴
		$("header").removeClass("mo").addClass("pc");

	} else {
		//모바일
		$("header").removeClass("pc").addClass("mo");
		$("header.mo .mo_open").click(function () {
			$(".cover").addClass("active");
			$("header").addClass("active");
			$("header.mo .top").addClass("on");
			$("header.mo .menu").addClass("on");
			$("header.mo .right").addClass("close");
			$("header.mo .mo_close").addClass("ani");
		});
		$("header.mo .mo_close").click(function () {
			$(".cover").removeClass("active");
			$("header").removeClass("active");
			$("header.mo .top").removeClass("on");
			$("header.mo .menu").removeClass("on");
			$("header.mo .right").removeClass("close");
			$(this).removeClass("ani");
		});
		$("header .menu .depth1>a").click(function () {
			$("header .menu .depth1>ul").stop().slideUp();
			$(this).siblings("ul").stop().slideDown();
		})
	}
}
$(function () {
	responsivePage();
	$(window).resize(function () {
		responsivePage();
	});

	$("header .right .search>button").click(function () {
		$("header .wrap").addClass("over");
		$("header .right .search>div").show();
	});
	$(".search_close").click(function () {
		$("header .wrap").removeClass("over");
		$("header .right .search>div").hide();
	});


	$(window).on('load', function () {
		var state = $(".state").offset().top;
		// var course = $(".introduction .com_tab").offset().top - 200;

		$(window).scroll(function () {
			$(window).scrollTop();
			console.log(state)
			if ($(window).scrollTop() >= state) {
				$(".state,.btn_goto,.btn_state").addClass("fixed");
			} else {
				$(".state,.btn_goto,.btn_state").removeClass("fixed");
			}


			// if ($(window).scrollTop() >= course) {
			// 	$(".course section>img").css("left", "100%");
			// 	$(".course ul li span").addClass("up");
			// 	$(".course ul li p").addClass("big");
			// }
		});

		setTimeout(function () {
			$(".state .right .percent .user").css("left", $(".state .right .percent .user").attr("data-percent"));
		}, 150);
	});

	$(".sitemap_close").click(function () {
		$(".sitemap_wrap").hide();
	});
	$(".site_map").click(function () {
		$(".sitemap_wrap").show();
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


});




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