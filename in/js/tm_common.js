
function responsivePage() {
	var windowWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	if (windowWidth > 1024) {
		//피시 메뉴
		$("header").removeClass("mo").addClass("pc");

	} else {
		//모바일
		$("header").removeClass("pc").addClass("mo");

	}
}

// 스와이퍼 공통 접근성
var slideSetting = {
	slideChange: function () {
		$(".swiper-slide").find("a, button").attr("tabindex", "-1");
		$(".swiper-slide-visible,.swiper-slide-active").find("a, button").attr("tabindex", "");
	},
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


	// 맨위로 가기
	$(".btn_gototop").click(function () {
		$('body,html').scrollTop(0);
	});

	// 탭 설정및 웹접근성반영
	$(".com_tab>li.active button").attr("title", "선택됨");

	$(".com_tab>li button").on("keydown", function (event) {
		event = event || window.event;
		var keycode = event.keyCode || event.which;
		switch (keycode) {
			case 13: // Enter
				// 선택된 탭 활성화
				$(this).attr("title", "선택됨").parent().addClass("active")
					// 기존 탭 비활성화
					.siblings().removeClass("active").children().removeAttr("title");
				// 연관된 탭 패널 활성화
				$("#" + $(this).parent().attr("id") + "_panel")
					.addClass("active")
					// 기존 탭 패널 비활성화
					.siblings(".tabpanel").removeClass("active");

				$("#" + $(this).parent().attr("id") + "_panel").find(".slick-slider").slick("refresh")
				break;
		}
	});

	$(".com_tab>li button").on("mousedown", function () {
		// 선택된 탭 활성화
		$(this).attr("title", "선택됨").parent().addClass("active")
			// 기존 탭 비활성화
			.siblings().removeClass("active").children().removeAttr("title");
		// 연관된 탭 패널 활성화
		$("#" + $(this).parent().attr("id") + "_panel")
			.addClass("active")
			// 기존 탭 패널 비활성화
			.siblings(".tabpanel").removeClass("active");

		$("#" + $(this).parent().attr("id") + "_panel").find(".slick-slider").slick("refresh")

	});

	// 커스텀 셀렉트
	$(".select_shape .sel-btn").click(function () {
		$(".select_shape div").css("height", "")
		if ($(this).closest(".select_shape").hasClass("active")) {
			$(".select_shape").removeClass("active");
		} else {
			$(".select_shape").removeClass("active");
			$(this).closest(".select_shape").addClass("active");

			if (200 > $(this).siblings("div").find("ul").outerHeight(true)) {
				$(this).siblings("div").css("height", $(this).siblings("div").find("ul").outerHeight(true) + 3 + "px")
			}
		}

	});
	$("html").on("click focusin", function (e) {

		if ($(e.target).parents(".select_shape").length < 1) {
			$(".select_shape").removeClass("active");
			$(".select_shape div").css("height", "");
		}
	});
	$(".select_shape ul li a").keyup(function (e) {
		var key = e.keyCode;
		switch (key) {
			case 38:
				if (!$(this).parent().index() <= 0) {
					$(this).parents("ul").children("li").eq($(this).parent().index() - 1).children("a").focus();
				}
				break;
			case 40:
				$(this).parents("ul").children("li").eq($(this).parent().index() + 1).children("a").focus();
				break;
		}
	});

	// 서브 글 크기 +-
	var st = 0;
	$(".font_control .plus").click(function () {
		var temp = $(".sub_content");
		for (var i = 0; i < temp.length; i++) {
			temp[i].style.setProperty("font-size", Number(getComputedStyle(temp[i]).getPropertyValue("font-size").replace(/[^0-9]/g, '')) + "px");
		}
		if (st < 20) {
			for (var i = 0; i < temp.length; i++) {
				temp[i].style.setProperty("font-size", Number(getComputedStyle(temp[i]).getPropertyValue("font-size").replace(/[^0-9]/g, '')) + 1 + "px");
			}
			st++;
		} else {
			alert("더 이상 확대 할 수 없습니다.");
		}
	});

	$(".font_control .minus").click(function () {
		var temp = $(".sub_content");
		for (var i = 0; i < temp.length; i++) {
			temp[i].style.setProperty("font-size", Number(getComputedStyle(temp[i]).getPropertyValue("font-size").replace(/[^0-9]/g, '')) + "px");
		}
		if (st > -6) {
			for (var i = 0; i < temp.length; i++) {
				temp[i].style.setProperty("font-size", Number(getComputedStyle(temp[i]).getPropertyValue("font-size").replace(/[^0-9]/g, '')) - 1 + "px");
			}
			st--;
		} else {
			alert("더 이상 축소 할 수 없습니다.");
		}
	});

	// reset 추가
	$(".font_control .reset").click(function () {
		var temp = $(".sub_content");
		for (var i = 0; i < temp.length; i++) {
			temp[i].style.setProperty("font-size", "16px");
		}
	});


	// 팝업
	if ($(".slide_pop").length >= 1) {
		$(".slide_pop .slide").slick({
			infinite: true,
			autoplay: true,
			slidesToShow: 1,
			dots: true,
			prevArrow: $('.slide_pop .btn .prev'),
			nextArrow: $('.slide_pop .btn .next'),
		}).on('afterChange', function () {
			$(".slide_pop .btn span").text(($(".slide_pop .slick-dots .slick-active").index() + 1));
		});
		if ($(".slide_pop .slick-dots li").length <= 1) {
			$(".slide_pop .btn p em").text(1);
		} else {
			$(".slide_pop .btn p em").text($(".slide_pop .slick-dots li").length);
		}

		$('.slide_pop .btn .pause').click(function () {
			$('.slide_pop .slide').slick('slickPause');
			$(this).css("display", "none");
			$('.slide_pop .btn .play').css("display", "inline-block");
		});
		$('.slide_pop .btn .play').click(function () {
			$('.slide_pop .slide').slick('slickPlay');
			$(this).css("display", "none");
			$('.slide_pop .btn .pause').css("display", "inline-block");
		});
	}

	$(".pop_open").click(function () {
		if ($(".layer_pop").length == 1 || $(".slide_pop").length == 1) {
			$(".pop_cover").show();
			$(".layer_pop").show();
			$(".slide_pop").show();
			$(".slide_pop .slide").slick('setPosition');
		}
		else {
			alert("등록된 팝업이 없습니다.")
		}
	});
	$(".layer_pop_close").click(function () {
		$(this).parents(".layer_pop").hide();
	});
	$(".slide_pop_close").click(function () {
		$(this).parents(".slide_pop").hide();
		$(".pop_cover").hide();
	});

	$(".tm_calendar").each(function () {
		if ($(this).find(".calendar_list").length != 0) {
			$(this).addClass("has_grid");
		}
	});

	$(".tm_calendar table td").click(function () {
		$(".tm_calendar table td").removeClass("outline");
		$(this).addClass("outline");
	});

	//faq
	$(".faq ul button").click(function () {
		if ($(this).parent("li").hasClass("show")) {
			$(this).parent("li").removeClass("show")
			$(this).siblings("div").stop().slideUp();
		} else {
			$(this).parent("li").addClass("show")
			$(this).siblings("div").stop().slideDown();
		}
	});

	// 검색창 enter 이벤트 처리
	$(".search_form_top").find("input").keyup(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			$(".search_form_top").find("button").trigger("click");
		}
	});

	// 공통팝업 닫기
	$(".com_pop .close").click(function () {
		$(this).closest(".com_pop").hide();
	});

});

