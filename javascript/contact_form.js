$(document).ready(function() {
	$("#submit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#comments").val();
		$("#returnmessage").empty(); // To empty previous error/success message.
		$("#returnname").empty();
		$("#returnemail").empty();
		$("#returncomment").empty();
		$("#returnmessages").empty();
		// Checking for blank fields.
		if (name == '' && email == '' && message == '') {
			$("#returnmessages").append("Please Fill All Fields"); 
			$("#returnmessage").empty();
		}
		else if (name == ''){
			$("#returnname").append("Please Enter Your Name");
		}
		else if (email == ''){
			$("#returnemail").append("Please Enter Your Email");
		}
		else if (message == ''){
			$("#returnemail").append("Please Enter A Message");
		}
		 else {
		}
		// Returns successful data submission message.
		$.post("contactform.php", {
			name1: name,
			email1: email,
			message1: message,
			}, function(data) {
			$("#returnmessage").append(data); // Append returned message to message paragraph.
			if (data == "Your Query has been received, We will contact you soon.") {
			$("#form")[0].reset(); // To reset form fields on success.
			}
		});
	});
});

$(".gohome").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$(".goabout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".goresume").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 1000);
});

$(".goskills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});

$(".gowork_process").click(function() {
    $('html, body').animate({
        scrollTop: $("#work_process").offset().top
    }, 1000);
});

$(".gocontact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});