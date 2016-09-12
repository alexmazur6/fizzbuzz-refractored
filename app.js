$(document).ready(function() {
	var userNumber;
	$("form").submit(function(event) {
		event.preventDefault();
		$("p").remove();
		userNumber = $("input").val();
		userNumber = parseInt(userNumber);
		fizzbuzz(userNumber);
		$(this)[0].reset();
	});

	function fizzbuzz( numberTo ) {
		for (var i = 1; i < numberTo + 1; i++) {
			if ( i % 3 == 0 && i % 5 == 0) {
				$(".container").append("<p>fizzbuzz</p>");
			}
			else if ( i % 3 == 0 ) {
				$(".container").append("<p>fizz</p>");
			}
			else if ( i % 5 == 0 ) {
				$(".container").append("<p>buzz</p>");
			}
			else {
				$(".container").append("<p>" + i + "</p>");
			}
		}
	}
});