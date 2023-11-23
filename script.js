let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');
let passwordMatching;
let passwordLength;
let passwordCharacter;
let passwordNumber;
let passwordCorrect;


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
        document.querySelector('#pw-match-text').innerHTML = 'Passwords match';
        passwordMatching = true;
    }
    else{
        document.querySelector('#pw-match-text').style.color = 'red';
        document.querySelector('#pw-match-text').innerHTML = 'Passwords do not match';
        passwordMatching = false;
    }
}

function pwLength(){
    console.log(passwordBox.value.length)
    if (passwordBox.value.length < 8){
        document.querySelector('#pw-length-text').style.color = 'red';
        passwordLength = false;
    }
    else{
        document.querySelector('#pw-length-text').style.color = 'green';
        passwordLength = true;
    }
}

function pwUppercase(){
    let upper = /[A-Z]/.test(passwordBox.value);
    let lower = /[a-z]/.test(passwordBox.value);

    if (upper && lower){
        document.querySelector('#uppercase-text').style.color = 'green';
        passwordCharacter = true;
    }
    else{
        document.querySelector('#uppercase-text').style.color = 'red';
        passwordCharacter = false;
    }
}

function pwNumber(){
    if (/\d/.test(passwordBox.value)){
        document.querySelector('#number-text').style.color = 'green';
        passwordNumber = true;
    }
    else{
        document.querySelector('#number-text').style.color = 'red';
        passwordNumber = false;
    }
}

function passwordCorrect(){
    if ( passwordMatching && passwordCharacter && passwordLength && passwordNumber){
        passwordBox.style.border = '1px solid green';
        confirmedPasswordBox.style.border = '1px solid green';
        passwordCorrect = true;
    }
    else{
        passwordBox.style.border = '2px solid red';
        confirmedPasswordBox.style.border = '2px solid red';
        passwordCorrect = false;
    }
}