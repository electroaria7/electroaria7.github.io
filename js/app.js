require(["jquery", "jquery.validate"], function($) {

	$.validator.setDefaults({
		submitHandler: function() { alert("submitted!"); }
	});

	// validate the comment form when it is submitted
	$("#form").validate();
});