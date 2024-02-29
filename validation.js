document.getElementById('fullNameError').textContent = '';
document.getElementById('emailError').textContent = '';
document.getElementById('passwordError').textContent = '';
document.getElementById('agreeTermsError').style.display = 'none';
document.getElementById('fullName').classList.remove('is-invalid');
document.getElementById('email').classList.remove('is-invalid');
document.getElementById('password').classList.remove('is-invalid');
document.getElementById('agreeTerms').classList.remove('is-invalid');

// var fullName = document.getElementById('fullName').value.trim();
// var email = document.getElementById('email').value.trim();
// var password = document.getElementById('password').value.trim();
// var agreeTerms = document.getElementById('agreeTerms').checked;
// var confirmPassword = document.getElementById('confirmPassword').value.trim();

function validateFullName(){
    var fullName = document.getElementById('fullName').value.trim();
    let fullNameError = document.getElementById('fullNameError');
    let fullNameEle =  document.getElementById('fullName');
     if(fullName.length < 6){
        fullNameError.textContent = 'Length should be more than 6 letters';
        fullNameEle.classList.add('is-invalid')
        return;
      }
       if(!/^[a-zA-Z]+$/.test(fullName)){
        fullNameError.textContent = 'Only alphabets are allowed';
        fullNameEle.classList.add('is-invalid')
        return;
      }

      fullNameError.textContent = '';
      fullNameEle.classList.remove('is-invalid');

}

function validateEmail(){
    var email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('email').classList.add('is-invalid');
        return;
      } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        document.getElementById('email').classList.add('is-invalid');
        return;
      }

      document.getElementById('emailError').textContent = '';
      document.getElementById('email').classList.remove('is-invalid');
}

function validatePassword(){
    var password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('password').classList.add('is-invalid');
        return;
      } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('password').classList.add('is-invalid');
        return;
      }

      document.getElementById('passwordError').textContent = '';
      document.getElementById('password').classList.remove('is-invalid');

}


function validateConfirmPassword(){
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    if(confirmPassword != password){
        document.getElementById('confirmPassword').classList.add('is-invalid');
        document.getElementById('confirmPasswordError').textContent = "Does not match with password"
        return;
    }
    document.getElementById('confirmPassword').classList.remove('is-invalid');
    document.getElementById('confirmPasswordError').textContent = ""
}

function validateTerms(){
    var agreeTerms = document.getElementById('agreeTerms').checked;
    if (!agreeTerms) {
        document.getElementById('agreeTermsError').style.display = 'block';
        document.getElementById('agreeTerms').classList.add('is-invalid');
        return;
      }
      document.getElementById('agreeTermsError').style.display = 'none';
      document.getElementById('agreeTerms').classList.remove('is-invalid');
}
  

function isValidEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);

}