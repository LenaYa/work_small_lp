$(document).ready(function(){
	$('.iframe-wrapper').html('')
	$('.popup-wrapper').removeClass('open')

	$('.youtube-btn').on('click', function() {
		$('.popup-wrapper').addClass('open').animate({opacity: 1}, 600)
		$('.iframe-wrapper').html('<iframe src="https://www.youtube.com/embed/CKYU_bcf_VA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>')
		$('.video-wrapper .topVideo')[0].pause()

	})
	$('.popup-wrapper').on('click', function() {
		$('.popup-wrapper').animate({opacity: 0}, 600)
		setTimeout(function() {
			$('.popup-wrapper').removeClass('open')
			$('.iframe-wrapper').html('')
			$('.video-wrapper .topVideo')[0].play()
		}, 800);
	})

	var resize = function() {
		if(window.innerHeight < window.innerWidth & window.innerWidth < 1024){
		    $('body').addClass('landscape')
		    
		} else {
			$('body').removeClass('landscape')
		}
	}

	resize()

	$(window).on('resize', function() {
		resize()

	})

	$(document).keyup(function(e){

	    if(e.keyCode === 27) {
	    	$('.popup-wrapper').animate({opacity: 0}, 600)
			setTimeout(function() {
				$('.popup-wrapper').removeClass('open')
				$('.iframe-wrapper').html('')
				$('.video-wrapper .topVideo')[0].play()
			}, 800);
	    }
	        

	});
});
