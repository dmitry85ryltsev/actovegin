
$(document).ready(function(){
	
	document.getElementById("source").addEventListener('click', function(event) {
		if( $(".refer_pane.coment").hasClass('active') ) {
			$(".refer_pane.source").css({'-webkit-transition-delay':'600ms'});
			$(".refer_pane.coment").removeClass('active');
		}else {
			$(".refer_pane.source").css({'-webkit-transition-delay':'0ms'});
			$(".over, header").addClass('refer-on'); 
		}; 
		$(".refer_pane.source").addClass('active');
		$("#coment").removeClass('active');
		$("#source").addClass('active');
	});
	
	document.getElementById("source_close").addEventListener('click', function(event) {
		$(".refer_pane.source").css({'-webkit-transition-delay':'0ms'});
		$(".refer_pane.source").removeClass('active');
		$(".over, header").removeClass('refer-on'); 
		$("header .btn").removeClass('active');
	});
	
}); 
