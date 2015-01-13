;(function($){
	
	var w_h = $(window).height();
	$(".content-row").each(function(){
		var o = $(this);
		o.css("min-height", w_h + "px");
		
	});
	
	//intro top positioning
	$(".intro").css("margin-top", (w_h / 2 - 200) + "px");
	
	//add top-bar-active on scroll
	$(window).bind("scroll",function() {

		var topBar = $(".top-bar");
		var scrollOff  = $(".scroll").offset().top - 50;
		if ($(window).scrollTop() > scrollOff  ) {
			topBar.addClass("top-bar-active");
		}else{
			
			topBar.removeClass("top-bar-active");
		}
	});

	//menu action slide in
	$(".bi_list").bind("click", function(e){
		$(".right-bar").animate({
			right: 0
		}, "fast", "easeOutQuart");
		
		$(".content-row,  .content-footer").animate({ left: -220 },"fast", "easeOutQuart");  
		e.preventDefault();
	});
	//menu close action slide out
	$(".close-it").bind("click", function(e){
		$(".right-bar").animate({
			right: -220
		}, "fast", "easeOutQuart");
		
		$('.content-row, .content-footer').animate({ left: 0 },"fast", "easeOutQuart");  
		e.preventDefault();
	});

//paralex movment
$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('.parallax-1').css('background-position', '0% ' + parseInt(-x / 5) + 'px');
});

//mouse easing... chrome
jQuery.extend(jQuery.easing, {
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});

var wheel = false,
    $docH = $(document).height() ,
    $scrollTop = $(window).scrollTop();

$(window).bind('scroll', function() {
    if (wheel === false) {
        $scrollTop = $(this).scrollTop();
    }
});

if (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15){

	$(document).bind('DOMMouseScroll mousewheel', function(e, delta) {
    delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 60;
    wheel = true;

    $scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 60)));
    $('body', 'html').stop().animate({
        scrollTop: $scrollTop + 'px'
    }, 1000, 'easeOutQuint', function() {
        wheel = false;
    });
    return false;
});

}  //endif 


})(jQuery);