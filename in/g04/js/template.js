function responsivePage() {
	var windowWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	if (windowWidth > 1200) {
		//피시 메뉴
		$("header").removeClass("mo").addClass("pc");

		$("header.pc .menu .depth1>a").mouseover(function () {
			$("header.pc .menu .depth1>ul").removeClass("over");
			$("header.pc .right .search>div").hide();
			$(this).parents(".wrap").addClass("over");
			$(this).siblings("ul").addClass("over");
		});
		$("header.pc .menu").mouseleave(function () {
			$("header.pc .menu .depth1>ul").removeClass("over");
			$("header.pc .wrap").removeClass("over");
			$("header .wrap").css("height", "");
		});
		$("header.pc .menu .depth1>ul").mouseover(function () {
			$(this).siblings("a").addClass("over");
		})
		$("header.pc .menu .depth1>ul").mouseleave(function () {
			$("header.pc .menu .depth1>a").removeClass("over");
		})

	} else {
		//모바일
		$("header").removeClass("pc").addClass("mo");
		$("header.mo .mo_open").click(function () {
			$(".cover").addClass("active");
			$("header.mo .top").addClass("on");
			$("header.mo .menu").addClass("on");
			$("header.mo .right").addClass("close");
			$("header.mo .mo_close").addClass("ani");
		});
		$("header.mo .mo_close").click(function () {
			$(".cover").removeClass("active");
			$("header.mo .top").removeClass("on");
			$("header.mo .menu").removeClass("on");
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
	}
}
$(function () {
	responsivePage();
	$(window).on('resize', function () {
		responsivePage();
	});

	var depth1_H = 0
	$("header.pc .menu .depth1").each(function () {
		if ($(this).children("ul").outerHeight() > depth1_H) {
			depth1_H = $(this).children("ul").outerHeight()
		}
	});
	$("header.pc .menu .depth1>ul").css("height", depth1_H + "px");
	$("header.pc .menu .depth1>a").mouseover(function () {
		// 메뉴 배경 길이
		$("header.pc .wrap.over").css("height", depth1_H + $("header").outerHeight() + "px");
	});

	$(".quick_open").click(function () {
		$("aside>*:not(.quick_open)").show();
		$("aside .quick_open").hide();
	});
	$(".quick_close").click(function () {
		$("aside>*").hide();
		$("aside .quick_open").show();
	});

	$(window).scroll(function () {

		$(window).scrollTop();
		if ($(window).scrollTop() >= 1) {
			$(".mo_aside").addClass("fixed");
		} else {
			$(".mo_aside").removeClass("fixed");
		}
	});

	if ($("header .menu .depth2").children("ul").length != 0) {
		$("header .menu .depth2").addClass("has_depth2");
	}
	if ($(".sub_content_wrap").find(".summary").length != 0) {
		$(".sub_content_wrap").addClass("has_summary");
	}
	if ($(".sub_content_inner").find(".summary").length != 0) {
		$(".sub_content_inner").addClass("has_summary");
	}
	if ($(".sub_content_inner").find(".notice").length != 0) {
		$(".sub_content_inner").addClass("has_notice");
	}
	if ($(".sub_content_inner").find(".board_view").length != 0) {
		$(".sub_content_inner").addClass("has_board_view");
	}
	if ($(".sub_content_inner").find(".road").length != 0) {
		$(".sub_content_inner").addClass("has_road");
	}
	if ($(".sub_content_wrap").find(".road").length != 0) {
		$(".sub_content_wrap").addClass("has_road");
	}
	if ($(".sub_content_inner").find(".greeting").length != 0) {
		$(".sub_content_inner").addClass("has_greeting");
	}
	if ($(".sub_content_wrap").find(".greeting").length != 0) {
		$(".sub_content_wrap").addClass("has_greeting");
	}



});


