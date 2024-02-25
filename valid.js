// Assuming your form has an id="form", and your HTML elements have correct ids
var user = document.forms['form']['username'];
var password = document.forms['form']['password'];

var NewUser = document.forms['form']['NewUsername'];
var NewPassword = document.forms['form']['NewPassword'];

var user_error = document.getElementById('user_error'); // Assuming you have elements with these ids
var pass_error = document.getElementById('pass_error');

user.addEventListener('input', userVerify);
password.addEventListener('input', passVerify);
NewUser.addEventListener('input', userVerify); // Assuming you want live verification for account creation as well
NewPassword.addEventListener('input', passVerify);


function validated() {
    if (user.value != "Admin") {
        user.style.border = "1px solid red";
        user_error.style.display = "block";
        user.focus();
        return false;
    } else {
        user.style.border = "1px solid green";
        user_error.style.display = "none";
    }

    if (password.value != "Password") {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    } else {
        password.style.border = "1px solid green";
        pass_error.style.display = "none";
    }

    // If both checks pass, redirect to home.html
    window.location.href = 'home.html';
    return true;
}

function user_Verify(){
	if (user.value.length >= 8) {
		user.style.border = "1px solid silver";
		user_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 8) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

function AccountCreation(){
	if (NewUser.value.length < 9) {
		NewUser.style.border = "1px solid red";
		user_error.style.display = "block";
		NewUser.focus();
		return false;
	}
	if (NewPassword.value.length < 6) {
		NewPassword.style.border = "1px solid red";
		pass_error.style.display = "block";
		NewPassword.focus();
		return false;
	}

	window.location.href = 'home.html';
    return true;

}
function user_Verify(){
	if (NewUser.value.length >= 8) {
		NewUser.style.border = "1px solid silver";
		user_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (NewPassword.value.length >= 8) {
		NewPassword.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}