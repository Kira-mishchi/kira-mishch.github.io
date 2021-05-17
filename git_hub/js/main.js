$(function(){

	$('.load-more').on('click', function(){
		const btn = $(this);
		const loader = btn.find('span');
		$.ajax({
			url: "data.html",
			type: 'GET',
			beforeSend: function(){
				btn.attr('disabled', true);
				loader.addClass('d-inline-block');
			},
			success: function(responce){
				setTimeout(function(){
					loader.removeClass('d-inline-block');
					btn.attr('disabled', false);
					$('.after-posts').before(responce);
				}, 1000);
			},
			error: function(){
				alert('Error!');
				loader.removeClass('d-inline-block');
				btn.attr('disabled', false);
			}
		});
	});

});

window.onload = function() {
  gridify.init();
};
gridGallery({

 // gallery selector
 selector: "#mSelector",

 // enable dark mode
 darkMode: true,

 // or "horizontal"
 layout: "square",

 // space between images
 gapLength: 10,

 // row height
 rowHeight: 180,

 // column width
 columnWidth: 200
 
});

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.element', options);

$(document).ready(function() {
  // SideNav Button Initialization
  $(".button-collapse").sideNav2();
    // SideNav Scrollbar Initialization
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(sideNavScrollbar);
});
