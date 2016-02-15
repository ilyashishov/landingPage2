$('.reviews').each(function(index) {
	if ($('.reviews').length > 1) {
		if(index == 0){
			$('.pagination').append('<div class="active"></div>');
		}else{
			$('.pagination').append('<div></div>');
		}
		
	}else{
		$('.block5 .back, .block5 .next').hide();
	}
})
var reviewsPoint = 1;
$('.block5 .next').on('click', function(){
	if($('.reviews').length >= reviewsPoint + 1){
		reviewsPoint++;
		$('.pagination div').removeClass('active');
		$('.pagination div').each(function(index, el) {
			if(index + 1 == reviewsPoint){
				$(this).addClass('active');
			}
		});
		$('.reviews').removeClass('fadeInLeft fadeInRight show');
		$('.reviews').each(function(index, el) {
			if(index + 1 == reviewsPoint){
				$(this).addClass('fadeInLeft show');
			}
		});
	}
	return false;
});

$('.block5 .back').on('click', function(){
	if(reviewsPoint - 1 > 0){
		reviewsPoint--;
		$('.pagination div').removeClass('active');
		$('.pagination div').each(function(index, el) {
			if(index + 1 == reviewsPoint){
				$(this).addClass('active');
			}
		});
		$('.reviews').removeClass('fadeInLeft fadeInRight show');
		$('.reviews').each(function(index, el) {
			if(index + 1 == reviewsPoint){
				$(this).addClass('fadeInRight show');
			}
		});
	}
	return false;
});
$('.close').on('click', function(){
	$('.windows, .window').animate({
		opacity: 0
	},
		500, function() {
		$(this).hide()
	});
})

$('.call-open').on('click', function(){
	$('.windows, .call-order-form').show().animate({
		opacity: 1
	},500);
	return false;
})



$(document).scroll(function(event) {
	var flag = true;
	console.log($(document).scrollTop());
	if($(document).scrollTop() > 3701 && flag){
		$('#number1').animateNumber({ number: 162 });
		$('#number2').animateNumber({ number: 487 });
		$('#number3').animateNumber({ number: 215 });
		$('#number4').animateNumber({ number: 12 });
		flag = false;
	}
});