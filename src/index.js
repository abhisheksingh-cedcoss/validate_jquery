$(document).ready(function(){
    $('#reset').click(function(){
        $('#name').val("");
        $('#dob').val("");
        $('input:radio[name=gender]:checked').val("");
        $('#email').val("");
        $('#address').val("");
        $('#school').val("");
        $('#department').val("");
        $('#mobile').val("");
        $('#course').val("");

    })
});

$('#submit').click(function(){
    var name = $('#name').val();
    var dob = $('#dob').val();
    var gender = $('input:radio[name=gender]:checked').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var school = $('#school').val();
    var department = $('#department').val();
    var course = $('#course').val();
    var mobile = $('#mobile').val();

    var name_pattern = '^[a-zA-Z]+$';
    var emali_pattern = '^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]{2,3}';


    if(name ==''){
        alert("please enter your name");
    }
    else if(!name.match(name_pattern)){
        alert("please enter valid name");
    }
    else if(dob == ''){
        alert("please enter the date of birtth");
    }
    else if(gender == ''){
        alert("please choose the gender");
    }
    else if(email == ''){
        alert("please enter the email");
    }
    else if(!email.match(emali_pattern)){
        alert("please enter the valid email address");
    }
    else if(address ==''){
        alert("please enter the address");
    }
    else if(school== '..'){
        alert("please choose the school");
    }
    else if(department=='..'){
        alert("please choose the department");
    }
    else if(course=='..'){
        alert("please choose the course");
    }
    else if(mobile==''){
        alert("please enter the mobile number")
    }
    else if(isNaN(mobile)){
        alert("please enter the number only")
    }
    else{
        alert("the form submitted successfully")
    }














})