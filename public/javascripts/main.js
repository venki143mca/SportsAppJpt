function register() {

	$.ajax({
		url : '/register',
		type : 'POST',
		contentType : 'application/json',
		
		data : JSON.stringify({
            "fname":
            "lname":
            "email":
            "email":
            "password":
            "mob":
			})
		
	}).done( function( data ) {
		console.log("Sample of data:", data);
	}).fail( function( jqXHR, textStatus ) {
		console.log("Request failed: " + textStatus);
	});
}
