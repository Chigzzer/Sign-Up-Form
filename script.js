let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');
let passwordMatching;
let passwordLength;
let passwordCharacter;
let passwordNumber;
let passwordCorrectValue;
let emailMatch;

document.querySelector('#confirm-email').addEventListener('input', emailMatchChecker);
document.querySelector('#email').addEventListener('input', emailMatchChecker);
confirmPasswordBox.addEventListener('input', checkPW);
passwordBox.addEventListener('input', checkPW);
passwordBox.addEventListener('focus', showPwRequirements);
passwordBox.addEventListener('blur', hidePwRequirements);
confirmPasswordBox.addEventListener('focus', showPwRequirements);
confirmPasswordBox.addEventListener('blur', hidePwRequirements);



function showPwRequirements(){
    pwRequirements.classList.remove('hidden');
}

function hidePwRequirements(){
    pwRequirements.classList.add('hidden');
}

function checkPW(){
    passwordMatch();
    pwLength();
    pwUppercase();
    pwNumber();
    passwordCorrect();
}

function passwordMatch(){
    if (confirmPasswordBox.value == passwordBox.value && confirmPasswordBox.value != ''){
        console.log('yes');
        document.querySelector('#pw-match-text').style.color = 'green';
        document.querySelector('#pw-match-text').innerHTML = 'Passwords match &#10004';
        passwordMatching = true;
    }
    else{
        document.querySelector('#pw-match-text').style.color = 'red';
        document.querySelector('#pw-match-text').innerHTML = 'Passwords do not match &#10005;';
        passwordMatching = false;
    }
}

function pwLength(){
    console.log(passwordBox.value.length)
    if (passwordBox.value.length < 8){
        document.querySelector('#pw-length-text').style.color = 'red';
        passwordLength = false;
        document.querySelector('#pw-length-text').innerHTML = '8 characters minimum &#10005';
    }
    else{
        document.querySelector('#pw-length-text').style.color = 'green';
        passwordLength = true;
        document.querySelector('#pw-length-text').innerHTML = '8 characters minimum &#10004';
    }
}

function pwUppercase(){
    let upper = /[A-Z]/.test(passwordBox.value);
    let lower = /[a-z]/.test(passwordBox.value);

    if (upper && lower){
        document.querySelector('#uppercase-text').style.color = 'green';
        passwordCharacter = true;
        document.querySelector('#uppercase-text').innerHTML = '1+ upper case characters and 1+ lower case characters &#10004';
    }
    else{
        document.querySelector('#uppercase-text').style.color = 'red';
        passwordCharacter = false;
        document.querySelector('#uppercase-text').innerHTML = '1+ upper case characters and 1+ lower case characters &#10005';
    }
}

function pwNumber(){
    if (/\d/.test(passwordBox.value)){
        document.querySelector('#number-text').style.color = 'green';
        passwordNumber = true;
        document.querySelector('#number-text').innerHTML = '1+ numerical value &#10004';
    }
    else{
        document.querySelector('#number-text').style.color = 'red';
        passwordNumber = false;
        document.querySelector('#number-text').innerHTML = '1+ numerical value &#x2715';
    }
}

function passwordCorrect(){
    if ( passwordMatching && passwordCharacter && passwordLength && passwordNumber){
        passwordBox.style.border = '1px solid green';
        confirmPasswordBox.style.border = '1px solid green';
        passwordCorrectValue = true;
    }
    else{
        passwordBox.style.border = '2px solid red';
        confirmPasswordBox.style.border = '2px solid red';
        passwordCorrectValue = false;
    }
}

function emailMatchChecker(){
    
    if (document.querySelector('#email').value == document.querySelector('#confirm-email').value){
        console.log('matching');
        emailMatch = true;
        document.querySelector('#email').style.border = '1px solid green';
        document.querySelector('#confirm-email').style.border = '1px solid green';
    }
    else{
        console.log('not matching');
        emailMatch = false;
        document.querySelector('#email').style.border = '1px solid red';
        document.querySelector('#confirm-email').style.border = '1px solid red';
    }
}

function formSubmit(){
    console.log('submitted');
    if (emailMatch == true && passwordCorrectValue == true){
        return true;
    }
    else{
        alert('Please double check your input');
        return false;
    }   
}