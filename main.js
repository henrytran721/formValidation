const email = document.getElementById('email');
const emailConfirm = document.getElementById('emailConfirm');
const submitBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.error');
const errorConfirm = document.querySelector('.errorConfirm');
const zipCode = document.getElementById('zipCode');
const zip = document.querySelector('.zip');
const errorConfirmEmail = document.querySelector('.errorConfirmEmail');
const password = document.getElementById('password');
const passwordConfirm = document.querySelector('.passwordConfirm');
const country = document.querySelector('.countryValue');

email.addEventListener('input', function(){
  if(email.validity.valid){
    error.innerHTML = '';
    error.className = 'error';
  } else {
    error.innerHTML = 'Please enter a valid email';
  }
});

emailConfirm.addEventListener('input', function(){
  if(emailConfirm.validity.valid){
    errorConfirm.innerHTML = '';
    errorConfirm.className = 'error';
  } else {
    errorConfirm.innerHTML = 'Please enter a valid email';
  }
  if(email.value !== emailConfirm.value){
    errorConfirmEmail.innerHTML = "Emails do not match, please enter the correct email.";
    errorConfirmEmail.classList.add('error');
  } else {
    errorConfirmEmail.innerHTML = '';
  }
});

let numbers = /^[0-9]+$/
zipCode.addEventListener('input', function(){
  if(!zipCode.value.match(numbers)){
    zip.innerHTML = "Please enter a valid Zip Code";
    zip.classList.add('error');
  } else {
    zip.innerHTML = '';
  }
});

let match = /[a-z]+[A-Z]*[0-9]+/
password.addEventListener('input', function(){
  let passwordValue = password.value;
  if(!passwordValue.match(match)){
    passwordConfirm.innerHTML = 'Please enter a password with at least one uppercase letter and number.'
    passwordConfirm.classList.add('error');
  } else {
    passwordConfirm.innerHTML = '';
  }
});

let review = document.querySelector('.review');
let reviewText = document.createElement('h3');
let emailReview = document.createElement('p');
let countryReview = document.createElement('p');
let zipCodeReview = document.createElement('p');
let passwordReview = document.createElement('p');
submitBtn.addEventListener('click', function(){
  emailReview.textContent = 'Email: ' + email.value;
  countryReview.textContent = 'Country: ' + country.value;
  zipCodeReview.textContent = 'Zip Code: ' + zipCode.value;
  passwordReview.textContent = 'Password: ' + password.value;
  reviewText.innerHTML = "Please review the following information is correct.";
  review.append(reviewText, emailReview, countryReview, zipCodeReview, passwordReview);
});
