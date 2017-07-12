   var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('ytplayer', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady() {
    		player.mute();
        player.playVideo();
        // Mute!
        
    }


$(document).ready(function(){

	$(".toggle-table li").click(function() {
		$(this).toggleClass("rotate");
		$(this).next().stop(true, true).slideToggle();
	});

	$(".drop-line").click(function(){
		$(this).prev(".question").slideDown();
		$(".top", this).addClass("hire");
		$(".bott", this).removeClass("hire");

		$(".arroww").addClass("rotate");

		$(this).prev(".question").children(".arroww").fadeIn();
	
	});


	$(".question").click(function(){
		$(this).slideUp();
		$(this).next().children(".top").removeClass("hire");
		$(this).next().children(".bott").addClass("hire");

		$(".arroww", this).fadeOut();

		$(this).next(".question").children(".arroww").removeClass("rotate");

	});

	var index;
	$(".tabs a").click(function() {

		$(".tabs a").removeClass("active");
		$(this).addClass("active");
		index = $(this).index() + 1;

		$(".tabs-content > div").removeClass("display");
		$(".tabs-content > div:nth-child(" + index + ")").addClass("display");

	});

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$(".preloader").hide();
	$("header, section, footer, #to-top, #test-modal").css("opacity", "1");

});

$(function() {

		$(".post .tabs-cont-btn").click(function() {

			$("#post").load('../comment.html .post-item');
			$(this).hide();
			
		});

		$(".video-post .tabs-cont-btn").click(function() {

			$("#video-post").load('../comment.html .video-p-item');
			$(this).hide();

		});

	$(".footer-height").css("height", $(".footer").height());
	$(".footer-content").css("height", $(".footer").height());
	$("body").css("min-height", $(window).height());


	$('#owl-one').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		// video:true,
		// videoHeight: true,
		autoHeight:true,
		// autoplayHoverPause: true,
		// autoplay: true,
		startPosition: 1,
		video:true,
    lazyLoad:true,
		items: 1,
		videoHeight: 500,
		smartSpeed: 1100,
		margin: 0,
		navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>']
	})
	$('.owl-carousel').on('translate.owl.carousel', function(event) {
		$(".top-description").hide();
	})
	$('.owl-carousel').on(' translated.owl.carousel', function(event) {
		$(".top-description").fadeIn("slow");
	})


	$("#ggg").owlCarousel({
		loop: true,
		nav: false,
		autoplayHoverPause: true,
		autoplay: false,
		smartSpeed: 1100,
		margin: 29,
		responsiveClass: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2,
				margin: 30
			},
			768:{
				items:2,
				margin: 50
			},
			992:{
				items:3,
				margin: 80
			},
			1200:{
				items:4,
				margin: 40
			},
			1600:{
				items:5
			}

		}
	});

	$('#owl-two').owlCarousel({
		loop: true,
		nav: false,
		autoplayHoverPause: true,
		smartSpeed: 1100,
		margin: 29,
		responsiveClass: true,
		responsive:{
			0:{
				items:1,
				autoHeight:true
			},
			580:{
				items:2,
				margin: 25
			},
			768:{
				items:2,
				margin: 80
			},
			992:{
				items:3,
				margin: 80
			},
			1200:{
				items:4
			},
			1600:{
				items:5
			}

		}
	});


	$('#owl-three').owlCarousel({
		loop: true,
		nav: false,
		autoplayHoverPause: true,
		autoplay: false,
		smartSpeed: 1100,
		margin: 29,
		responsiveClass: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2,
				margin: 30
			},
			768:{
				items:2,
				margin: 50
			},
			992:{
				items:3,
				margin: 80
			},
			1200:{
				items:4,
				margin: 40
			},
			1600:{
				items:5
			}

		}
	});

	var left = false;
	$(".hamb-1").click(function() {
		$(".hamb-2 #nav-icon3").removeClass("open");
		if($(".left-menu").hasClass("menu-to-right"))
		{
			$(".left-menu").removeClass("menu-to-right");

			$(".hamb-2 .fa, .hamb-2 .img").toggleClass("hide");

			$("section").removeClass("to-right-relative");
			$("header, footer").toggleClass("to-right-absolute");


			$("html,body").removeClass("fixed-content");
		}

		var offset =  $(window).scrollTop();

		$(".mobile-nav").css("left", "-240pxpx");

		$(".mobile-nav").toggleClass("menu-to-right");

		$(".hamb-1 .fa, .hamb-1 .img").toggleClass("hide");

		$("section").toggleClass("to-right-relative");
		$("header, footer").toggleClass("to-right-absolute");


		$("html,body").toggleClass("fixed-content");

		if($(window).scrollTop() > 125 && $(window).width() > 575)
		{
			$(".navigation").toggleClass("to-right-nav");
		}
		else

			if($(window).scrollTop() > 207 && $(window).width() <= 575)
			{
				$(".navigation").toggleClass("to-right-nav");
			}

		});



	$(".hamb-2").click(function() {

		if($(".mobile-nav").hasClass("menu-to-right"))
		{
			$(".hamb-1 #nav-icon3").removeClass("open");
			$(".mobile-nav").removeClass("menu-to-right");

			$(".hamb-2 .fa, .hamb-2 .img").toggleClass("hide");

			$("section").removeClass("to-right-relative");
			$("header, footer").toggleClass("to-right-absolute");


			$("html,body").removeClass("fixed-content");
		}

		var offset =  $(window).scrollTop();

	// $(".left-menu").css("left", "-240pxpx");

	$(".left-menu").toggleClass("menu-to-right");

	$(".hamb-2 .fa, .hamb-2 .img").toggleClass("hide");

	$("section").toggleClass("to-right-relative");
	$("header, footer").toggleClass("to-right-absolute");


	$("html,body").toggleClass("fixed-content");

	if($(window).scrollTop() > 125 && $(window).width() > 575)
	{
		$(".navigation").toggleClass("to-right-nav");
	}
	else

		if($(window).scrollTop() > 207 && $(window).width() <= 575)
		{
			$(".navigation").toggleClass("to-right-nav");
		}

	});




	$(".close-menu").click(function() {
		$(".mobile-nav").fadeOut();
	});


	var click = false;
	var paddingbottom;
	$(".body-point").hover(function() {
		click = true;
	});

	
	function wResize(){


var maxHeight = 0;
	 
		$(".department-item").each(function(){
	  if ( $(this).height() > maxHeight ) 
	  {
	    maxHeight = $(this).height();
	  }
	});
		if($(window).width()>480)
	 {
		$(".department-item").height(maxHeight);
	} else {
		$(".department-item").height("auto");
	}


		if($(window).width()>579)
	 {
		$("#owl-two .department-item").height(maxHeight);
	} else {
		$("#owl-two .department-item").height("auto");
	}


		$(".footer-height").css("height", $(".footer").height());
		$(".footer-content").css("height", $(".footer").height());
		$("body").css("min-height", $(window).height());


		if(click == true && $(window).width()<768){
			$(".for-bg h2").css("padding-bottom", paddingbottom);
		}
		if($(window).width()<768){
			// $(".mobile-nav").hide();
		}
		if($(window).width()>768){
			$(".for-bg h2").css("padding-bottom","0");
			if($(this).scrollTop() > 125)
			{
				$(".navigation").addClass("fixed");
			}
		}

		$(".navigation").removeClass("fixed");
		$(window).scroll(function(){


			if($(this).scrollTop() > 125 && $(window).width() > 575)
			{
				$(".navigation").addClass("fixed");
		}
		else
		{
			$(".navigation").removeClass("fixed");
			$(".navigation").removeClass("to-right-nav");
		}

		if($(this).scrollTop() > 207 && $(window).width() <= 575)
		{
			$(".navigation").addClass("fixed");
		}

	});

	};
	wResize();
	$(window).resize(function(){
		wResize();
	});

	$(".body-point").hover(function() {
		$(this).css("opacity", "1");


		/* $(".body-point").children("img").removeClass("active-img");
		$(this).children("img").addClass("active-img");*/

		var index = $(this).index() + 1;

		$(".description-item").hide();
		$(".description-item:nth-child("+ index +")").show();

		$(".people").css({
			"background":"url('img/body/human2.png')",
			"background-size":"998px"});

		paddingbottom = $(".description-item:nth-child("+ index +")").height();
		if($(window).width()<768){
			$(".for-bg h2").css("padding-bottom", paddingbottom);
		}

		if(index==11 || index==17){
			$(".people").css("background-position-x","0px");
		}

		if(index==1 || index==2 || index==8 || index==28){
			$(".people").css("background-position-x","-168px");
		}

		if(index==3 || index==25 || index==24 || index==7){
			$(".people").css("background-position-x","-336px");
		}

		if(index==9 || index==7 || index==12 || index==23 || index==13 || index==4 || index==10 || index==26){
			$(".people").css("background-position-x","-499px");
		}

		if(index==18 || index==19 || index==5 || index==15 || index==20 || index==6 || index==22  || index==25 || index==14 || index==27 || index==30){
			$(".people").css("background-position-x","-668px");
		}
		if(index==21 || index==16 || index==29){
			$(".people").css("background-position-x","-843px");
		}


	});


});

$("#to-top").mPageScroll2id();

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

