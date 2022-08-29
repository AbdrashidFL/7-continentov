$(function(){
	$('.vouchers-button__russian').on("click", function(){
	 $('.vouchers-russian').css('display', 'flex');
	 $('.vouchers-arkhangelsk').css('display', 'none');
	 $('.vouchers-abroad').css('display', 'none');
	 $('.vouchers-button__russian').css('background-color', '#FFAF02');
	 $('.vouchers-button__abroad').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelsk').css('background-color', '#d8f0f0');
	 $('.vouchers-button__russian').css('color', '#ffffff');
	 $('.vouchers-button__abroad').css('color', '#001e28');
	 $('.vouchers-button__arkhangelsk').css('color', '#001e28');
	});
	$('.vouchers-button__abroad').on("click", function(){
	 $('.vouchers-abroad').css('display', 'flex');
	 $('.vouchers-arkhangelsk').css('display', 'none');
	 $('.vouchers-russian').css('display', 'none');
	 $('.vouchers-button__abroad').css('background-color', '#FFAF02');
	 $('.vouchers-button__russian').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelsk').css('background-color', '#d8f0f0');
	 $('.vouchers-button__abroad').css('color', '#ffffff');
	 $('.vouchers-button__russian').css('color', '#001e28');
	 $('.vouchers-button__arkhangelsk').css('color', '#001e28');
	});
	$('.vouchers-button__arkhangelsk').on("click", function(){
	 $('.vouchers-arkhangelsk').css('display', 'flex');
	 $('.vouchers-russian').css('display', 'none');
	 $('.vouchers-abroad').css('display', 'none');
	 $('.vouchers-button__arkhangelsk').css('background-color', '#FFAF02');
	 $('.vouchers-button__russian').css('background-color', '#d8f0f0');
	 $('.vouchers-button__abroad').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelsk').css('color', '#ffffff');
	 $('.vouchers-button__russian').css('color', '#001e28');
	 $('.vouchers-button__abroad').css('color', '#001e28');
	});
});
// vouchers
$(function(){
	$('.vouchers-button__russianmobile').on("click", function(){
	 $('.vouchers-russian').css('display', 'block');
	 $('.vouchers-arkhangelsk').css('display', 'none');
	 $('.vouchers-abroad').css('display', 'none');
	 $('.vouchers-button__russianmobile').css('background-color', '#FFAF02');
	 $('.vouchers-button__abroadmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelskmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__russianmobile').css('color', '#ffffff');
	 $('.vouchers-button__abroadmobile').css('color', '#001e28');
	 $('.vouchers-button__arkhangelskmobile').css('color', '#001e28');
	});
	$('.vouchers-button__abroadmobile').on("click", function(){
	 $('.vouchers-abroad').css('display', 'block');
	 $('.vouchers-arkhangelsk').css('display', 'none');
	 $('.vouchers-russian').css('display', 'none');
	 $('.vouchers-button__abroadmobile').css('background-color', '#FFAF02');
	 $('.vouchers-button__russianmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelskmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__abroadmobile').css('color', '#ffffff');
	 $('.vouchers-button__russianmobile').css('color', '#001e28');
	 $('.vouchers-button__arkhangelskmobile').css('color', '#001e28');
	});
	$('.vouchers-button__arkhangelskmobile').on("click", function(){
	 $('.vouchers-arkhangelsk').css('display', 'block');
	 $('.vouchers-russian').css('display', 'none');
	 $('.vouchers-abroad').css('display', 'none');
	 $('.vouchers-button__arkhangelskmobile').css('background-color', '#FFAF02');
	 $('.vouchers-button__russianmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__abroadmobile').css('background-color', '#d8f0f0');
	 $('.vouchers-button__arkhangelskmobile').css('color', '#ffffff');
	 $('.vouchers-button__russianmobile').css('color', '#001e28');
	 $('.vouchers-button__abroadmobile').css('color', '#001e28');
	});
});
// vouchers-mobile
$(function(){
		$('.stock-slider').slick({
	  slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: "<div class='stock-next'><img src='img/stock/right.png' alt='направо'></div>",
			prevArrow: "<div class='stock-prev'><img src='img/stock/left.png' alt='налево'></div>",
			centerPadding: '50px',
	  responsive: [
	      {
	        breakpoint: 576,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      }
	    ]
	});
});
$(function(){
		$('.awords-slider').slick({
	  slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: "<div class='awords-next'><img src='img/awords/right.png' alt='направо'></div>",
			prevArrow: "<div class='awords-prev'><img src='img/awords/left.png' alt='налево'></div>",
	  responsive: [
	      {
	        breakpoint: 576,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      }
	    ]
	});
});
// stock-slider
$('.header-contact__button').on("click", function(){
		$(".popup").css('display','flex');
		document.body.style.overflow = 'hidden';
});
$('.popup-before').on("click", function(){
		$(".popup").css('display','none');
		document.body.style.overflow = 'visible';
})
$('.rest-block__link').on("click", function(){
		$(".popup").css('display','flex');
		document.body.style.overflow = 'hidden';
});
$('.popup-before').on("click", function(){
		$(".popup").css('display','none');
		document.body.style.overflow = 'visible';
});
$('.popup-btn').on("click", function(){
		$(".popup").css('display','none');
		document.body.style.overflow = 'visible';
	});
// popup

$('.mask').mask("+7 (999) 999 - 99 - 99");
// mask

