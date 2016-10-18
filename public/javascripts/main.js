$(document).ready(function() {
    //register();
   $("#logout").click(function () { 
       $("#logregbuttons").show();
       $("#welcomeMsgdiv").hide();
       $("#personal").hide();
   });
    
});



function register() {
     $.ajax({
                    url : '/users/register',
                    type : 'POST',
                    contentType : 'application/json',

                    data : JSON.stringify({
                        "fname": $('#fname').val(),
                        "lname": $('#lname').val(),
                        "email": $('#email').val(),
                        "password": $('#password').val(),
                        "mob": $("#mob").val()
                        })

                }).done( function( data ) {
                    console.log("Sample of data:", data);
                    $('#formregister')[0].reset();
                    $("#registerModel").modal("hide");
                    $("#logregbuttons").hide();
                    $("#welcomeMsgdiv").show();
                    $('#welcomeMsg').html('Welcome, '+data.output.fname);   
         
                //personal div setting
                    $("#personal").show();
                    $("#fnamediv").html(data.output.fname);
                    $("#lnamediv").html(data.output.lname);
                    $("#emaildiv").html(data.output.email);
                    $("#mobdiv").html(data.output.mob);
                    $("#startdatediv").html(data.output.startDate);
         
         
                }).fail( function( jqXHR, textStatus ) {
                    console.log("Request failed: " + textStatus);
                });
}
