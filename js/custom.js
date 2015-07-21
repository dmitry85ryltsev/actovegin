
$(document).ready(function(){
	
	document.getElementById("source").addEventListener('click', function(event) {
		if( $(".refer_pane.coment").hasClass('active') ) {
			$(".refer_pane.source").css({'-webkit-transition-delay':'600ms'});
			$(".refer_pane.coment").removeClass('active');
		}else {
			$(".refer_pane.source").css({'-webkit-transition-delay':'0ms'});
			$(".over").addClass('refer-on'); 
		}; 
		$(".refer_pane.source").addClass('active');
		$("#coment").removeClass('active');
		$("#source").addClass('active');
	});
	
	document.getElementById("coment").addEventListener('click', function(event) {
		if( $(".refer_pane.source").hasClass('active') ) {
			$(".refer_pane.coment").css({'-webkit-transition-delay':'600ms'});
			$(".refer_pane.source").removeClass('active');
		}else {
			$(".refer_pane.coment").css({'-webkit-transition-delay':'0ms'});
			$(".over").addClass('refer-on'); 
		}; 
		$(".refer_pane.coment").addClass('active');
		$("#source").removeClass('active');
		$("#coment").addClass('active');
	});

	document.getElementById("coment_close").addEventListener('click', function(event) {
		$(".refer_pane.coment").css({'-webkit-transition-delay':'0ms'});
		$(".refer_pane.coment").removeClass('active');
		$(".over").removeClass('refer-on'); 
		$("header .btn").removeClass('active');
	});
	document.getElementById("source_close").addEventListener('click', function(event) {
		$(".refer_pane.source").css({'-webkit-transition-delay':'0ms'});
		$(".refer_pane.source").removeClass('active');
		$(".over").removeClass('refer-on'); 
		$("header .btn").removeClass('active');
	});
	
}); 
