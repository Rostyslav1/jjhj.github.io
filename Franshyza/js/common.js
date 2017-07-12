$(function() {

	// Custom JS
	setTimeout(function() {
 
           $(".preloader").fadeOut();
 
        }, 5000)

var tr = true;
	$(".toggle-title").click(function() {
		$(this).next().slideToggle();
		$(this).children(".title-button").toggleClass("title-btn-change");
	});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoPlay: true,
    items: 1,
    navText: ["<img src='img/left-arrow.png' alt=''>", "<img src='img/right-arrow.png' alt=''>"]
})
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

$(".select-one .ring").click(function(){
    $(".select-one .ring").removeClass("active");
    $(this).addClass("active");
});
$(".select-two .ring").click(function(){
    $(".select-two .ring").removeClass("active");
    $(this).addClass("active");
});
$(".select-three .ring").click(function(){
    $(".select-three .ring").removeClass("active");
    $(this).addClass("active");
});

});
