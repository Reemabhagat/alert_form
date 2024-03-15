$(document).ready(function(){
$('.registration').validate({
    rules: {
        firstname: { 
            required: true,
            minlength:1
        },
        lastname: {
            required: true,
            minlength:1
        },
        email: {
            required: true,
            email: true,
            minlength:1
        },
        password: {
            required: true,
            minlength:8
        },
       checkbox: { 
            required: true,
            minlength:3,
        },
    },
    messages: {
        firstname: 'This field is required',
        lastname: 'This field is required',
        email: 'Enter Valid Email',
        password: 'Password must be at least 8 characters',
        checkbox: "You must check at least 3 box"
    },
    submitHandler: function(form){
        form.submit();
        alert("submitted successfully")
        } 
});
$(function () {
    $('.registration').attr('disabled', true);
    $('.registration').change(function () {
        if ($('firstname').val() != '' && $('lastname').val() != '' && $('email').val() != '' && $('password').val() != '' && $('checkbox').val() != '' ) {
            $('.registration').attr('disabled', false);
        } else {
            $('.registration').attr('disabled', true);
        }
    });
 });
 
//checkbox
$check = $('.checkbox').on('change',function(){
if(this.checked){
    $check = $check.not(this);
    Array.prototype.push.call($check,this);
    check(this);
}
});
function check(e){
    $check.filter(':checked').map(function(i, ele){
        if($('.checkbox:checked').length >=4){
            ele.checked = false;
        }
    }).get();

}
});