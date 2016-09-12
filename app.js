$(document).ready(function() {
	var userNumber;
	$("form").submit(function(event) {
		event.preventDefault();
		userNumber = $("input").val();
		userNumber = parseInt(userNumber);

		for(var i = 1; i < (userNumber + 1); i++) {
			console.log(i);
		}

		$(this)[0].reset();
	});
});