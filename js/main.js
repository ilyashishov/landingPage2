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


var flag = true;
$(document).scroll(function(event) {
	console.log($(document).scrollTop())
	if($(document).scrollTop() > 3701 && flag){
		$('#number1').animateNumber({ number: 162 });
		$('#number2').animateNumber({ number: 487 });
		$('#number3').animateNumber({ number: 215 });
		$('#number4').animateNumber({ number: 12 });
		flag = false;
	}
});

var flag2 = true;
$(document).scroll(function(event) {
	if($(document).scrollTop() > 1100 && flag2){
		setTimeout(function(){
			$('.block3 .bl1').addClass('bounceIn');
		},300)
		setTimeout(function(){
			$('.block3 .bl2').addClass('bounceIn');
		},100)
		setTimeout(function(){
			$('.block3 .bl3').addClass('bounceIn');
		},200)
		setTimeout(function(){
			$('.block3 .bl4').addClass('bounceIn');
		},50)
		setTimeout(function(){
			$('.block3 .bl5').addClass('bounceIn');
		},150)
		flag2 = false;
	}
}); 
 $('form').submit(function() {
 	var name, phone, url, tema;
 	name = $(this).find('input[name=name]').val();
 	phone = $(this).find('input[name=phone]').val();
 	url = $(this).find('input[name=url]').val();
 	tema = $(this).attr('tema');
 	$.ajax({
 		url: './php/send.php',
 		type: 'POST',
 		dataType: 'html',
 		data: {name: name, phone: phone, url: url, tema: tema},
 		success: function(data){
 			if(true){
 				$('.windows, .thank').show().animate({
 					opacity: 1
 				},500);
 				setTimeout(function(){
 					$('.windows, .thank').animate({
 						opacity: 0
 					},
 					500, function() {
 						$(this).hide()
 					});
 				},1500)
 			}
 		}
 	})
 	console.log(name, tema)
 	return false;
 });

 $('.request').on('click', function(){
 	$('.form-buy-request form').attr('tema', $(this).attr('tema'));
 	$('.windows, .form-buy-request').show().animate({
 		opacity: 1
 	},500);
 	return false;
 })

 Inputmask({"mask": "+7 (999) 999-9999"}).mask($('input[name=phone]'));