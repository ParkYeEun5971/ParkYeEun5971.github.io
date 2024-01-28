$(function () {
	//콤마 찍기
	function commaN(str) {
		str = String(str);
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}

	// 콤마 제거
	function uncommaN(str) {
		str = String(str);
		return str.replace(/[^\d]+/g, '');
	}

	// 사업계획체험하기---------------------------------

	$(".calculation").on("keyup", "input:text", function (e) {

		if ($(this).attr("id") == "otherFundRate1" || $(this).attr("id") == "otherFundRate2") {

			$(this).val($(this).val().replace(/[^0-9 .]/gi, ""));

		} else {
			$(this).val($(this).val().replace(/(^0+)/, ""));
			$(this).val($(this).val().replace(/[^0-9]/gi, ""));
			if ($(this).val() != null && $(this).val() != '') {
				$(this).val(commaN($(this).val()));
			}

			if ($(this).attr("id") == "workDay") {
				if ($('#workDay').val() > 31) {
					$('#workDay').val('');
					alert('월평균 근무 일수를 초과 하셨습니다');
					$('#workDay').focus();
				} else {
					var _workDay = parseInt($('#workDay').val());
					_workDay = isNaN(_workDay) ? 0 : _workDay;
					$('#workDay').val(_workDay);
				}
			}
		}

		if ($(this).attr("id") == "othersFundsRate1" || $(this).attr("id") == "othesrFundsRate2") {

			var _pattern = /^(\d{1,3}([.]\d{0,2})?)?$/;
			var _value = event.srcElement.value;
			if (!_pattern.test(_value)) {
				alert("1000 이하의 숫자만 입력가능하며,\n소수점 둘째자리까지만 허용됩니다.");
				event.srcElement.value = event.srcElement.value.substring(0, event.srcElement.value.length - 1);
				event.srcElement.focus();
			}
		}

		//tabindex 엔터키
		if (event.keyCode == 13) {
			var nextTabIndex = parseInt($(this).attr("tabindex")) + 1;
			$('[tabindex=' + nextTabIndex + ']').focus();
		}

	}); //end_keyup


	// 투자 합계
	$('#imcha, #premium, #equipment, #item, #funds').focusout(function () {

		var _imcha = uncommaN($('#imcha').val()) * 1; //임차보증금
		var _premium = uncommaN($('#premium').val()) * 1; //권리금
		var _equipment = uncommaN($('#equipment').val()) * 1; //시설비
		var _item = uncommaN($('#item').val()) * 1; //초도물품 구입비
		var _funds = uncommaN($('#funds').val()) * 1; //초기 운전자금
		var _sum1 = _imcha + _premium + _equipment + _item + _funds;
		$("#sum1").val(commaN(_sum1));
	});


	// 자금조달계획 합계
	$('#equity, #othersFunds1, #othersFunds2').focusout(function () {

		var _equity = uncommaN($('#equity').val()) * 1;
		var _othersFunds1 = uncommaN($('#othersFunds1').val()) * 1;
		var _othersFunds2 = uncommaN($('#othersFunds2').val()) * 1;
		var _sum2 = _equity + _othersFunds1 + _othersFunds2;

		$("#sum2").val(commaN(_sum2));
	});

	// 결과보기 클릭
	$('#result').click(function (event) {

		event.preventDefault();

		if (isNaN($('#othersFundsRate1').val()) || isNaN($('#othersFundsRate2').val())) {
			alert('이자율을 정확히 입력해 주십시오');
			return false;
		}

		if ($('#dailyMonth').val() == '') {
			alert('일 매출액을 정확히 입력해 주십시오');
			$('#dailyMonth').focus();
			return false;
		} else if ($('#workDay').val() == '' || $('#workDay').val() == '0') {
			alert('월평균 근무 일수를 정확히 입력해 주십시오');
			$('#workDay').focus();
			return false;
		} else if ($('#imcha').val() == '' || $('#imcha').val() == '0') {
			alert('임차보증금을 정확히 입력해 주십시오');
			$('#imcha').focus();
			return false;
		} else if ($('#premium').val() == '' || $('#premium').val() == '0') {
			alert('권리금을 정확히 입력해 주십시오');
			$('#premium').focus();
			return false;
		} else if ($('#equipment').val() == '' || $('#equipment').val() == '0') {
			alert('시설비를 정확히 입력해 주십시오');
			$('#equipment').focus();
			return false;
		} else if ($('#item').val() == '' || $('#item').val() == '0') {
			alert('초도물품 구입비를 정확히 입력해 주십시오');
			$('#item').focus();
			return false;
		} else if ($('#equity').val() == '' || $('#equity').val() == '0') {
			alert('자기자본을 정확히 입력해 주십시오');
			$('#equity').focus();
			return false;
		}else if ($('#othersFunds1').val() == '' || $('#othersFunds1').val() == '0') {
			alert('타인자금1을 정확히 입력해 주십시오');
			$('#othersFunds1').focus();
			return false;
		}else if ($('#othersFunds2').val() == '' || $('#othersFunds2').val() == '0') {
			alert('타인자금2을 정확히 입력해 주십시오');
			$('#othersFunds2').focus();
			return false;
		}else if ($('#dailyMoney').val() == '' || $('#dailyMoney').val() == '0') {
			alert('일매출을 정확히 입력해 주십시오');
			$('#dailyMoney').focus();
			return false;
		}
		

		//연간금액(N) = 월금액(M) * 12
		//월추정 매출(A) = 일 매출액(가) * 월근무일수(나)
		var dailyMoney = uncommaN($("#dailyMoney").val());
		var workDay = $("#workDay").val();
		if (dailyMoney == '' || isNaN(dailyMoney)) dailyMoney = 0;
		var _estimatedSalesMonth = parseInt(dailyMoney) * parseInt(workDay);
		var _estimatedSalesYear = parseInt(_estimatedSalesMonth * 12);
		$('#estimatedSalesMonth').text(commaN(_estimatedSalesMonth));
		$('#estimatedSalesYear').text(commaN(_estimatedSalesYear));

		//감가상각비(B) = sum( 금액(다) / (감가상각기간(라) * 12))
		var imcha = uncommaN($('#imcha').val());
		var premium = uncommaN($('#premium').val());
		var equipment = uncommaN($('#equipment').val());
		var item = uncommaN($('#item').val());
		var funds = uncommaN($('#funds').val());

		if (imcha == '' || isNaN(imcha)) imcha = 0;
		if (premium == '' || isNaN(premium)) premium = 0;
		if (equipment == '' || isNaN(equipment)) equipment = 0;
		if (item == '' || isNaN(item)) item = 0;
		if (funds == '' || isNaN(funds)) funds = 0;

		var imchaTerm = 0;
		var premiumTerm = 0;
		var equipmentTerm = 5;
		var itemTerm = 0;
		var fundsTerm = 0;

		if (equipmentTerm == '' || isNaN(equipmentTerm)) equipmentTerm = 0;

		// var _imchaCal = parseFloat( parseFloat(imcha) / parseFloat( imchaTerm * 12));
		// var _premiumCal = parseFloat( parseFloat(premium) / parseFloat( premiumTerm * 12));
		// var _equipmentCal = parseFloat( parseFloat(equipment) / parseFloat( equipmentTerm * 12));
		// var _itemCal = parseFloat( parseFloat(item) / parseFloat(  itemTerm * 12));
		// var _fundsCal = parseFloat( parseFloat(funds) / parseFloat(fundsTerm  * 12));
		var _equipmentCalYear = parseFloat(parseFloat(equipment) / parseFloat(equipmentTerm));
		var _depreciationCostMonth = parseInt(_equipmentCalYear / 12);
		var _depreciationCostYear = _equipmentCalYear;
		$('#depreciationCostMonth').text(commaN(_depreciationCostMonth));
		$('#depreciationCostYear').text(commaN(_depreciationCostYear));

		//지급이자(C) = sum(금액(마) * 이자율(바) / 12)
		//	var equity = uncommaN( $('#equity').val());
		var othersFunds1 = uncommaN($('#othersFunds1').val());
		var othersFunds2 = uncommaN($('#othersFunds2').val());
		//var equityRate = $('#equityRate').val();
		var othersFundsRate1 = $('#othersFundsRate1').val();
		var othersFundsRate2 = $('#othersFundsRate2').val();

		if (equity == '' || isNaN(equity)) equity = 0;
		if (othersFunds1 == '' || isNaN(othersFunds1)) othersFunds1 = 0;
		if (othersFunds2 == '' || isNaN(othersFunds2)) othersFunds2 = 0;

		//  if(equityRate=='' || isNaN(equityRate)) equityRate=0;
		if (othersFundsRate1 == '' || isNaN(othersFundsRate1)) othersFundsRate1 = 0;
		if (othersFundsRate2 == '' || isNaN(othersFundsRate2)) othersFundsRate2 = 0;

		//		var _equityCal = parseFloat( (parseFloat(equity) * parseFloat(equityRate)/100) / 12 );
		var _othersFundsCal1 = parseFloat((parseFloat(othersFunds1) * parseFloat(othersFundsRate1) / 100));
		var _othersFundsCal2 = parseFloat((parseFloat(othersFunds2) * parseFloat(othersFundsRate2) / 100));

		var _paidInterestYear = parseInt(_othersFundsCal1 + _othersFundsCal2);
		var _paidInterestMonth = parseInt(_paidInterestYear / 12);
		$('#paidInterestMonth').text(commaN(_paidInterestMonth));
		$('#paidInterestYear').text(commaN(_paidInterestYear));

		//월추정 비용(D) = sum(비용계획(사)) + 감가상각비(B) + 지급이자(C)
		var materialCost = uncommaN($('#materialCost').val());
		var laborCost = uncommaN($('#laborCost').val());
		var rentCost = uncommaN($('#rentCost').val());
		var etcCost = uncommaN($('#etcCost').val());

		if (laborCost == '' || isNaN(laborCost)) laborCost = 0;
		if (materialCost == '' || isNaN(materialCost)) materialCost = 0;
		if (rentCost == '' || isNaN(rentCost)) rentCost = 0;
		if (etcCost == '' || isNaN(etcCost)) etcCost = 0;

		var sum_Cost = parseInt(materialCost) + parseInt(laborCost) + parseInt(rentCost) + parseInt(etcCost);
		var sum_CostYear = sum_Cost * 12;

		$('#costSumMonth').text(commaN(sum_Cost));
		$('#costSumYear').text(commaN(sum_CostYear));

		var _estimatedCostMonth = parseInt(sum_Cost + _depreciationCostMonth + _paidInterestMonth);
		//var _estimatedCostYear = parseInt(_estimatedCostMonth * 12 );
		var _estimatedCostYear = parseInt(sum_CostYear + _depreciationCostYear + _paidInterestYear);

		$('#estimatedCostMonth').text(commaN(_estimatedCostMonth));
		$('#estimatedCostYear').text(commaN(_estimatedCostYear));

		//월추정 수익(E) = 월 추정매출(A) - 월 추정비용(D)
		var _estimatedProfitMonth = _estimatedSalesMonth - _estimatedCostMonth;
		var _estimatedProfitYear = _estimatedSalesYear - _estimatedCostYear;
		$('#estimatedProfitMonth').text(commaN(_estimatedProfitMonth));
		$('#estimatedProfitYear').text(commaN(_estimatedProfitYear));

		//차입금 상환시(F) := ( 타인자금1(아) + 타인자금2(자) ) / 월추정 수익(E)
		var _repaymentPeriod = parseFloat((parseFloat(othersFunds1) + parseFloat(othersFunds2)) / _estimatedProfitMonth);
		$('#repaymentPeriod').text(_repaymentPeriod.toFixed(1));

		//투자자금 회수 기간(G) := 금액합계(카) / 월추정 수익(E)
		var _s1 = parseFloat(uncommaN($('#sum1').val()));
		var _paybackPeriod = parseFloat(_s1 / _estimatedProfitMonth);
		$('#paybackPeriod').text(_paybackPeriod.toFixed(1));
		
		
		if ($("body").outerWidth() >= 800) {
			$('body,html').animate({
				'scrollTop': $(".sub_content_wrap").offset().top
			}, 300, 'swing', function () { });
		}

	});

	// 경영성과체험하기---------------------------------

	$(".calculation").on("keyup", "input:text", function (e) {

		if ($(this).attr("id") == "costRate") {

			$(this).val($(this).val().replace(/[^0-9 .]/gi, ""));

		} else {

			$(this).val($(this).val().replace(/(^0+)/, ""));
			$(this).val($(this).val().replace(/[^0-9]/gi, ""));
			if ($(this).val() != null && $(this).val() != '') {

				$(this).val(commaN($(this).val()));
			}

			if ($(this).attr("id") == "workDay") {

				if ($('#workDay').val() > 31) {
					$('#workDay').val('');
					alert('월평균 근무 일수를 초과 하셨습니다');
					$('#workDay').focus();
				} else {
					var _workDay = parseInt($('#workDay').val());
					_workDay = isNaN(_workDay) ? 0 : _workDay;
					$('#workDay').val(_workDay);
				}
			}
		}

		if ($(this).attr("id") == "costRate") {

			var _pattern = /^(\d{1,3}([.]\d{0,2})?)?$/;
			var _value = event.srcElement.value;
			if (!_pattern.test(_value)) {
				alert("1000 이하의 숫자만 입력가능하며,\n소수점 둘째자리까지만 허용됩니다.");
				event.srcElement.value = event.srcElement.value.substring(0, event.srcElement.value.length - 1);
				event.srcElement.focus();
			}
		}
		//tabindex 엔터키
		if (event.keyCode == 13) {
			var nextTabIndex = parseInt($(this).attr("tabindex")) + 1;
			$('[tabindex=' + nextTabIndex + ']').focus();
		}

	}); //end_keyup


	// 결과보기 클릭
	$('#result2').click(function (event) {

		event.preventDefault();

		if (isNaN($('#costRate').val())) {
			alert('원가비율을 정확히 입력해 주십시오');
			return false;
		}

		if ($('#dailyMoney').val() == '' || $('#dailyMoney').val() == '0') {
			alert('일 매출액을 정확히 입력해 주십시오');
			$('#dailyMoney').focus();
			return false;
		} else if ($('#workDay').val() == '' || $('#workDay').val() == '0') {
			alert('월평균 근무 일수를 정확히 입력해 주십시오');
			$('#workDay').focus();
			return false;
		}

		var _costRate = uncommaN($("#costRate").val()); //월원가비율(다)
		if (_costRate == '' || isNaN(_costRate)) _costRate = 0;

		var _laborCost = uncommaN($("#laborCost").val()); //인건비
		if (_laborCost == '' || isNaN(_laborCost)) _laborCost = 0;

		var _rentCost = uncommaN($("#rentCost").val()); //임차료
		if (_rentCost == '' || isNaN(_rentCost)) _rentCost = 0;

		var _etcCost = uncommaN($("#etcCost").val()); //기타경비
		if (_etcCost == '' || isNaN(_etcCost)) _etcCost = 0;

		var _depreciationCost = uncommaN($("#depreciationCost").val()); //감가상각비
		if (_depreciationCost == '' || isNaN(_depreciationCost)) _depreciationCost = 0;

		var _interestCost = uncommaN($("#interestCost").val());			//이자비용
		if (_interestCost == '' || isNaN(_interestCost)) _interestCost = 0;

		//연간금액(N) = 월금액(M) * 12
		//월매출액(A) = 일매출액(가) * 근무일수(나)
		var dailyMoney = uncommaN($("#dailyMoney").val());
		var workDay = $("#workDay").val();
		if (dailyMoney == '' || isNaN(dailyMoney)) dailyMoney = 0;

		var _salesMonth = parseInt(dailyMoney) * parseInt(workDay);
		var _salesYear = parseFloat(_salesMonth * 12);
		$('#salesMonth').text(commaN(_salesMonth));
		$('#salesYear').text(commaN(_salesYear));


		//월매출원가(B) = 월매출액(A) * 월원가비율(다)
		var _salesCostMonth = _salesMonth * parseFloat(_costRate) / 100;
		var _salesCostYear = parseFloat(_salesCostMonth * 12);
		$('#salesCostMonth').text(commaN(_salesCostMonth));
		$('#salesCostYear').text(commaN(_salesCostYear));

		//매출총이익(C)  = 매출액(A) - 매출원가(B)
		var _priceMarginMonth = _salesMonth - _salesCostMonth;
		var _priceMarginYear = parseFloat(_priceMarginMonth * 12);
		$('#priceMarginMonth').text(commaN(_priceMarginMonth));
		$('#priceMarginYear').text(commaN(_priceMarginYear));

		//판매관리비(D)  = 인건비(E)  +  임차료(F) + 기타경비(G)
		var _salesManageCostMonth = parseFloat(_laborCost) + parseFloat(_rentCost) + parseFloat(_etcCost);
		var _salesManageCostYear = parseFloat(_salesManageCostMonth * 12);
		$('#salesManageCostMonth').text(commaN(_salesManageCostMonth));
		$('#salesManageCostYear').text(commaN(_salesManageCostYear));

		//E=라
		var _laborCostMonth = _laborCost;
		var _laborCostYear = parseFloat(_laborCostMonth) * 12;
		$('#laborCostMonth').text(commaN(_laborCostMonth));
		$('#laborCostYear').text(commaN(_laborCostYear));

		//F=마
		var _rentCostMonth = _rentCost;
		var _rentCostYear = parseFloat(_rentCostMonth) * 12;
		$('#rentCostMonth').text(commaN(_rentCostMonth));
		$('#rentCostYear').text(commaN(_rentCostYear));

		//G=바
		var _etcCostMonth = _etcCost;
		var _etcCostYear = parseFloat(_etcCostMonth) * 12;
		$('#etcCostMonth').text(commaN(_etcCostMonth));
		$('#etcCostYear').text(commaN(_etcCostYear));

		//영업이익(H) = 매출총이익(C) - 판매관리비(D)
		var _salesProfitsMonth = _priceMarginMonth - _salesManageCostMonth;
		var _salesProfitsYear = parseFloat(_salesProfitsMonth) * 12;
		$('#salesProfitsMonth').text(commaN(_salesProfitsMonth));
		$('#salesProfitsYear').text(commaN(_salesProfitsYear));

		//	영업외손익(I) = 감가상각비(J) +이자비용(K)
		var _salesProfitLossMonth = parseFloat(_depreciationCost) + parseFloat(_interestCost);
		var _salesProfitLossYear = parseFloat(_salesProfitLossMonth) * 12;
		$('#salesProfitLossMonth').text(commaN(_salesProfitLossMonth));
		$('#salesProfitLossYear').text(commaN(_salesProfitLossYear));

		//	F=사, G=아
		var _depreciationCostYear = parseFloat(_depreciationCost) * 12;
		$('#depreciationCostMonth').text(commaN(_depreciationCost));
		$('#depreciationCostYear').text(commaN(_depreciationCostYear));

		var _interestCostYear = parseFloat(_interestCost) * 12;
		$('#interestCostMonth').text(commaN(_interestCost));
		$('#interestCostYear').text(commaN(_interestCostYear));

		//	경상이익(L) = 영업이익(E)  - 영업외 손익(I)
		var _ordinaryIncomeMonth = _salesProfitsMonth - _salesProfitLossMonth;
		var _ordinaryIncomeYear = parseFloat(_ordinaryIncomeMonth) * 12;
		$('#ordinaryIncomeMonth').text(commaN(_ordinaryIncomeMonth));
		$('#ordinaryIncomeYear').text(commaN(_ordinaryIncomeYear));
		
		if ($("body").outerWidth() >= 800) {
			$('body,html').animate({
				'scrollTop': $(".sub_content_wrap").offset().top
			}, 300, 'swing', function () { });
		}

	});

	// 이자계산기
	$(".calculation").on("keyup", "input:text", function () {

		if ($(this).attr("id") == "imchaRate" || $(this).attr("id") == "premiumRate" || $(this).attr("id") == "equipmentRate" || $(this).attr("id") == "etcRate") {

			$(this).val($(this).val().replace(/[^0-9 .]/gi, ""));

			var _pattern = /^(\d{1,3}([.]\d{0,2})?)?$/;
			var _value = event.srcElement.value;
			if (!_pattern.test(_value)) {
				alert("1000 이하의 숫자만 입력가능하며,\n소수점 둘째자리까지만 허용됩니다.");
				event.srcElement.value = event.srcElement.value.substring(0, event.srcElement.value.length - 1);
				event.srcElement.focus();
			}

		} else {

			$(this).val($(this).val().replace(/[^0-9]/gi, ""));
			if ($(this).val() != null && $(this).val() != '') {
				$(this).val(commaN($(this).val()));
			}
		}
	});

	// 투자내역 입력시 이자비용 합계
	$('.interest input[type=text]').focusout(function () {

		/*	if(isNaN($('#imchaRate').val()) 	|| isNaN($('#inputDepositRate').val())	 || isNaN($('#premiumRate').val())	|| isNaN($('#equipmentRate').val())		|| isNaN($('#etcRate').val()) ){
				   alert('이자율을 정확히 입력해 주십시오');
				   return false;
			}
	
			 */

		var _imchaRate = uncommaN($("#imchaRate").val());
		if (_imchaRate == '' || isNaN(_imchaRate)) _imchaRate = 0;

		var _inputDepositRate = uncommaN($("#inputDepositRate").val());
		if (_inputDepositRate == '' || isNaN(_inputDepositRate)) _inputDepositRate = 0;

		var _imchaRate = uncommaN($("#imchaRate").val());
		if (_imchaRate == '' || isNaN(_imchaRate)) _imchaRate = 0;

		var _imchaRate = uncommaN($("#imchaRate").val());
		if (_imchaRate == '' || isNaN(_imchaRate)) _imchaRate = 0;

		var _imchaCost = uncommaN($('#imchaCost').val()) * 1; //임차보증금
		var _premiumCost = uncommaN($('#premiumCost').val()) * 1; //권리금
		var _equipmentCost = uncommaN($('#equipmentCost').val()) * 1; //시설비용
		var _etcCost = uncommaN($('#etcCost').val()) * 1; //기타비용

		var imchaRate = $('#imchaRate').val() * 1;
		var premiumRate = $('#premiumRate').val() * 1;
		var equipmentRate = $('#equipmentRate').val() * 1;
		var etcRate = $('#etcRate').val() * 1;

		var _imchaCostMonth = _imchaCost * imchaRate / (100 * 12);
		var _premiumCostMonth = _premiumCost * premiumRate / (100 * 12);
		var _equipmentCostMonth = _equipmentCost * equipmentRate / (100 * 12);
		var _etcCostMonth = _etcCost * etcRate / (100 * 12);

		$("#imchaCostMonth").text(commaN(parseInt(_imchaCostMonth)));
		$("#premiumCostMonth").text(commaN(parseInt(_premiumCostMonth)));
		$("#equipmentCostMonth").text(commaN(parseInt(_equipmentCostMonth)));
		$("#etcCostMonth").text(commaN(parseInt(_etcCostMonth)));
		var _sum = parseInt(_imchaCost) + parseInt(_premiumCost) + parseInt(_equipmentCost) + parseInt(_etcCost);
		$("#sum").text(commaN(parseInt(_sum)));

		var _sumMonth = parseInt(_imchaCostMonth) + parseInt(_premiumCostMonth) + parseInt(_equipmentCostMonth) + parseInt(_etcCostMonth);
		$("#sumMonth").text(commaN(parseInt(_sumMonth)));

	});

	//적용버튼 클릭
	$('#btnResult').click(function (e) {

		e.preventDefault();
		//부모창에 이자비용 적용
		$("#interestCost", opener.document).val($("#sumMonth").text());
		self.close();
	});

	// 손익분기점
	$(".calculation").on("keyup", "input:text", function (e) {

		if ($(this).attr("id") == "marginRage") {

			$(this).val($(this).val().replace(/[^0-9 .]/gi, ""));

		} else {

			$(this).val($(this).val().replace(/(^0+)/, ""));
			$(this).val($(this).val().replace(/[^0-9]/gi, ""));
			if ($(this).val() != null && $(this).val() != '') {

				$(this).val(commaN($(this).val()));
			}

			if ($(this).attr("id") == "workDay") {

				if ($('#workDay').val() > 31) {
					$('#workDay').val('');
					alert('월평균 근무 일수를 초과 하셨습니다');
					$('#workDay').focus();
				} else {
					var _workDay = parseInt($('#workDay').val());
					_workDay = isNaN(_workDay) ? 0 : _workDay;
					$('#workDay').val(_workDay);
				}
			}
		}

		if ($(this).attr("id") == "marginRage") {

			var _pattern = /^(\d{1,3}([.]\d{0,2})?)?$/;
			var _value = event.srcElement.value;
			if (!_pattern.test(_value)) {
				alert("1000 이하의 숫자만 입력가능하며,\n소수점 둘째자리까지만 허용됩니다.");
				event.srcElement.value = event.srcElement.value.substring(0, event.srcElement.value.length - 1);
				event.srcElement.focus();
			}
		}

		//tabindex 엔터키
		if (event.keyCode == 13) {
			var nextTabIndex = parseInt($(this).attr("tabindex")) + 1;
			$('[tabindex=' + nextTabIndex + ']').focus();
		}

	}); //end_keyup


	// 결과보기 클릭
	$('#result3').click(function (event) {

		event.preventDefault();

		if (isNaN($('#marginRate').val())) {
			alert('마진율을 정확히 입력해 주십시오');
			return false;
		}

		if ($('#workDay').val() == '' || $('#workDay').val() == '0') {

			alert('근무 일수를 정확히 입력해 주십시오');
			$('#workDay').focus();
			return false;
		}else if ($('#marginRate').val() == '' || $('#marginRate').val() == '0') {
			alert('마진율을 정확히 입력해 주십시오');
			$('#marginRate').focus();
			return false;
		}else if ($('#laborCost').val() == '' || $('#laborCost').val() == '0') {
			alert('인건비를 정확히 입력해 주십시오');
			$('#laborCost').focus();
			return false;
		}else if ($('#etcCost').val() == '' || $('#etcCost').val() == '0') {
			alert('기타 경비를 정확히 입력해 주십시오');
			$('#etcCost').focus();
			return false;
		}else if ($('#depreciationCost').val() == '' || $('#depreciationCost').val() == '0') {
			alert('감가상각비를 정확히 입력해 주십시오');
			$('#depreciationCost').focus();
			return false;
		}else if ($('#marginRate').val() == '' || $('#dailyMoney').val() == '0') {
			alert('일매출을 정확히 입력해 주십시오');
			$('#dailyMoney').focus();
			return false;
		}

		var _workDay = parseInt($("#workDay").val());
		var _marginRate = $('#marginRate').val(); //마진율
		if (_marginRate == '' || isNaN(_marginRate)) _marginRate = 0;

		var _laborCost = uncommaN($("#laborCost").val()); //인건비
		if (_laborCost == '' || isNaN(_laborCost)) _laborCost = 0;

		var _rentCost = uncommaN($("#rentCost").val()); //임차료
		if (_rentCost == '' || isNaN(_rentCost)) _rentCost = 0;

		var _depreciationCost = uncommaN($("#depreciationCost").val()); //감가상각비
		if (_depreciationCost == '' || isNaN(_depreciationCost)) _depreciationCost = 0;

		var _interestCost = uncommaN($("#interestCost").val());  //이자비용
		if (_interestCost == '' || isNaN(_interestCost)) _interestCost = 0;

		var _etcCost = uncommaN($("#etcCost").val());   //기타비용 
		if (_etcCost == '' || isNaN(_etcCost)) _etcCost = 0;

		var _targetProfit = uncommaN($("#targetProfit").val());  //목표이익
		if (_targetProfit == '' || isNaN(_targetProfit)) _targetProfit = 0;


		//공헌이익율(A) =  마진율(가)
		$('#contributeProfitRate').text(_marginRate);

		//고정비계(B) : 판매관리비(인건비+임차료+기타경비)+감가상각비(마)+이자비용(바) 
		//  * 이자비용(바) 은 직접입력하거나 이자계산기의 결과값을 입력받는다.          
		var _fixedCostSum = parseFloat(_laborCost) + parseFloat(_rentCost) + parseFloat(_etcCost) + parseFloat(_depreciationCost) + parseFloat(_interestCost);
		$('#fixedCostSum').text(commaN(_fixedCostSum));

		//손익분기점(C) = (100/마진율입력값*고정비계)
		var _breakEvenPoint = parseFloat(100 / parseFloat(_marginRate) * _fixedCostSum);
		$('#breakEvenPoint').text(commaN(_breakEvenPoint.toFixed(1)));

		//목표매출액(D) = (목표이익 + 고정비계)*100 / 마진율 
		var _targetSales = parseFloat((parseFloat(_targetProfit) + _fixedCostSum) * 100 / parseFloat(_marginRate));
		$('#targetSales').text(commaN(_targetSales.toFixed(1)));

		//E = 손익분기점(C)
		$('#breakEvenPointResult').text(commaN(_breakEvenPoint.toFixed(1)));

		//일손익분기점 매출(F) = 손익분기점(C) / 근무일수(사) 
		var _dayWorkAvg = parseFloat(_breakEvenPoint / _workDay);
		$('#dayWorkAvg').text(commaN(_dayWorkAvg.toFixed(1)));

		//일목표매출액(G) = 목표매출액(E) / 근무일수(사)   
		var _dayProfitAvg = parseFloat(_targetSales / _workDay);
		$('#dayProfitAvg').text(commaN(_dayProfitAvg.toFixed(1)));
		
		if ($("body").outerWidth() >= 800) {
			$('body,html').animate({
				'scrollTop': $(".sub_content_wrap").offset().top
			}, 300, 'swing', function () { });
		}
	});
});

// 이자계산기 새창
function interestWin() {
	window.open('/page/10027/10074.tc?viewType=blank', 'win', 'width=760,height=530,top=100,left=200, scrollbars=no,status=no,toolbar=no,resizable=0,location=no,menu=no');
}