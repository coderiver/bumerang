head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		
	});

	console.log($('body').html());
	
	$(document).click(function() {
		$(".js-popup-field").hide();
		$(".js-btn-sbm").parent().addClass("is-active");
	});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
		$(".js-popup-close").on("click", function(event){
				$(".js-popup-field").hide();
				event.stopPropagation();
		});
		$('.js-btn').click(function() {
				$(".js-popup-field").show();
				return false;
		});
});