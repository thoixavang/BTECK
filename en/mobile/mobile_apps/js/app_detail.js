$(function() {
	
	$('#gallery_carousel').carouFredSel({
		prev: '#prev',
		next: '#next',
		width: '100%',
		scroll: {items :1},
		auto:false,
		responsive:true,
		pagination: "#pager",
		wipe:true,
		circular:true,
		items: {
			width: null,
			height:'auto',
			visible:"1+",
		}
	});
	
$("#gallery_carousel").parent().swipe({
swipeLeft : function() { $("#gallery_carousel").trigger("next");},
swipeRight: function() { $("#gallery_carousel").trigger("prev");}
});

	
});