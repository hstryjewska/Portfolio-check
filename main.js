function validateForm() {
    var error = 0;
    var a = document.forms["contact-form"]["name"].value;
    document.getElementById('name_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('name_error').innerHTML = 'Name must be filled out';
    }

    var b = document.forms["contact-form"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('email_error').innerHTML = 'Email must be filled out';
    }



    var e = document.forms["contact-form"]["message"].value;
    document.getElementById('message_error').innerHTML = '';
    if (e == null || e == "") {
        error++;
        document.getElementById('message_error').innerHTML = 'Oh no! Please ... write something :)';
    }

    if (error > 0) {
        return false;

    }
    document.querySelector('.status').innerHTML = "Sending...";
}