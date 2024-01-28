$(function () {
	var _this;
	var _fullpage;
	var _pageIdx = 1;
	var _maxPageIdx = 1;
	var _scrAble = true;
	var _scrAnimSpeed = 600;
	var _scrAnimEasing = "easeInOutCubic";
	var _scrDiff = $(document).outerHeight();
	var _paddingTop = 0;

	window.fullpage = {
		// 전체높이 설정
		setFullheight: function () {
			_fullpage.find(".page.fullpage").each(function () {
				if ($(this).outerWidth() <= 1200 || $(window).outerHeight() <= 800) {
					$(this).css({ "height": "auto" });
					$(".fullpage.page").css("padding-top", "");
					$("#fullpageWrap").removeClass("fullpageWrap");
				} else {
					$("#fullpageWrap").addClass("fullpageWrap");
					var fullheight = $(window).outerHeight();
					$(this).css({ "height": fullheight });
					$(".fullpage.page").css("padding-top", _paddingTop + "px");
					if ($(this).hasClass("main_visual")) {
						$(this).css({ "height": fullheight });
					}
					
				}
			});
		},
		moveFullPage: function (pageIdx) {
			_scrAble = false;
			_pageIdx = pageIdx;
			$("html,body").animate({ "scrollTop": $("[data-pageIdx=" + _pageIdx + "]").offset().top - _paddingTop }, _scrAnimSpeed, _scrAnimEasing, function () {
				_scrAble = true;
			});
		},
		scrollEvent: function (window, e) {
			if (!($(window).outerWidth() <= 1200 || $(window).outerHeight() <= 800)) {
				e.preventDefault();
				e.stopPropagation();
				e.delta = null;
				if (e.originalEvent) {
					if (e.originalEvent.wheelDelta) e.delta = e.originalEvent.wheelDelta / -40;
					if (e.originalEvent.deltaY) e.delta = e.originalEvent.deltaY;
					if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
				} else {
					if (e.wheelDelta) e.delta = e.wheelDelta / -40;
					if (e.deltaY) e.delta = e.deltaY;
					if (e.detail) e.delta = e.detail;
				}

				if (_scrAble) {
					_scrAble = false;
					if (e.delta < 0) {
						if (_pageIdx == 1 || _pageIdx == 0) {
							$("html,body").animate({ "scrollTop": "0" }, _scrAnimSpeed, _scrAnimEasing, function () {
								_scrAble = true;
							});
						} else {
							_pageIdx--;
							$("html,body").animate({ "scrollTop": _fullpage.find("[data-pageIdx=" + _pageIdx + "]").offset().top }, _scrAnimSpeed, _scrAnimEasing, function () {
								_scrAble = true;
							});
						}
					} else {
						if (_pageIdx < _maxPageIdx) {
							_pageIdx++;
							$("html,body").animate({ "scrollTop": $("[data-pageIdx=" + _pageIdx + "]").offset().top }, _scrAnimSpeed, _scrAnimEasing, function () {
								_scrAble = true;
							});
						} else {
							if (_pageIdx == _maxPageIdx) {
								_pageIdx++;
							}
							$("html,body").animate({ "scrollTop": $(document).height() }, _scrAnimSpeed, _scrAnimEasing, function () {
								_scrAble = true;
							});
						}
					}
				}
				if (_pageIdx == 1) {
					// $("#page_navi a").removeClass("active");
					// $("#page_navi a").eq(0).addClass("active");
				} else if (_pageIdx == 2) {
					$(".main2 .pc_slide").addClass("active");
				}
				else if (_pageIdx == 3) {
				}
				else if (_pageIdx == 4) {
				}
				else if (_pageIdx == 5) {
				}
			};
		},
		initFullpage: function (fullpage) {
			_this = this;
			_fullpage = fullpage;
			if ($("header").length == 0) {
				_paddingTop = 0;
			} else {
				_paddingTop = $("header").outerHeight();
			}

			_this.setFullheight();

			var index = 1;
			_fullpage.children("div").each(function () {
				$(this).attr("data-pageIdx", index++);
				$(this).addClass("page");
			});
			_maxPageIdx = index - 1;

			// 현재페이지 인덱스로 설정
			_fullpage.find(".page").each(function () {
				var diff = Math.abs($(this).offset().top - $(document).scrollTop());
				if (_scrDiff > diff) {
					_scrDiff = diff;
					_pageIdx = $(this).attr("data-pageIdx");
				}
			});
			// _pageIdx = 1;

			// 윈도우 크기 재설정시
			$(window).resize(function () {
				_this.setFullheight();
			});

			// 마우스 휠 이벤트 처리
			/*$(document).on("mousewheel DOMMouseScroll", function(e) {
				_this.scrollEvent($(this), e);
			});*/

			window.addEventListener("DOMMouseScroll", function (e, delta) {
				_this.scrollEvent($(this), e);
			}, { passive: false });
			window.addEventListener("mousewheel", function (e, delta) {
				_this.scrollEvent($(this), e);
			}, { passive: false });
		}
	}
	
})