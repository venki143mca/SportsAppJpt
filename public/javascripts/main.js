$(document).ready(function() {
    //register();
   $("#logout").click(function () { 
       $("#logregbuttons").show();
       $("#welcomeMsgdiv").hide();
       $("#personal").hide();
   });
    
});

function openRegister() {
    $("#loginModel").modal("hide");
     $("#registerModel").modal("show");
}

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
         if( data.status == "success"){
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
         }
         if(data.status == "failure") {
             $("#logregbuttons").show();
              $("#welcomeMsgdiv").hide();
              $("#personal").hide();
         }
         
                }).fail( function( jqXHR, textStatus ) {
                    $("#logregbuttons").show();
                    $("#welcomeMsgdiv").hide();
                    $("#personal").hide();
                    console.log("Request failed: " + textStatus);
                });
}

function login() {
     $.ajax({
                url : '/users/login',
                type : 'POST',
                contentType : 'application/json',

                data : JSON.stringify({
                    "username" : $('#user').val(),
                    "password": $('#loginpwd').val()
                    })

                }).done( function( data ) {
        console.log(data.status);
         console.log(data.status == "failure");
         console.log(data.status === "failure");
            if( data.status == "success"){
                    $('#formLogin')[0].reset();
                    $("#loginModel").modal("hide");
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
                //log in status msg.
                 $("#failure").html("");
            }
             if(data.status == "failure") {
                 $("#logregbuttons").show();
                  $("#welcomeMsgdiv").hide();
                  $("#personal").hide();
                 $("#failure").html("Please check the credentials.");
             }
         
                }).fail( function( jqXHR, textStatus ) {
                    console.log("Request failed: " + textStatus);
                });
}
