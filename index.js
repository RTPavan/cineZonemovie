$('#submit').click(function(event) {
    event.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let massage = $('#massage').val();

    if(name == ''){
        $('#successSubmit').html('Enter a name');
        $('#successSubmit').css('color', 'red');
    }
    else if(email == ''){
        $('#successSubmit').html('Enter a email');
        $('#successSubmit').css('color' , 'red');
    }
    else if(massage == ''){
        $('#successSubmit').html('Enter a massage');
        $('#successSubmit').css('color' , 'red');
    }
    else{
        $('#successSubmit').html('Thank you ' + name + ', your message was successfully sent.');
        $('#successSubmit').css('color', 'green');

        $('#name').val('');
        $('#email').val('');
        $('#massage').val('');
    }

});

