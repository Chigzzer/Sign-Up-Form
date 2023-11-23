let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');



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
}

function passwordMatch(){
    if (confirmPasswordBox.value == passwordBox.value){
        console.log('yes');
        document.querySelector('#pw-match-text').style.color = 'green';
    }
    else{
        document.querySelector('#pw-match-text').style.color = 'red';
    }
}

function pwLength(){
    console.log(passwordBox.value.length)
    if (passwordBox.value.length < 8){
        document.querySelector('#pw-length-text').style.color = 'red';
    }
    else{
        document.querySelector('#pw-length-text').style.color = 'green';
    }
}

function pwUppercase(){
    let upper = /[A-Z]/.test(passwordBox.value);
    let lower = /[a-z]/.test(passwordBox.value);

    if (upper && lower){
        document.querySelector('#uppercase-text').style.color = 'green';
    }
    else{
        document.querySelector('#uppercase-text').style.color = 'red';
    }
}

function pwNumber(){
    if (/\d/.test(passwordBox.value)){
        document.querySelector('#number-text').style.color = 'green';
    }
    else{
        document.querySelector('#number-text').style.color = 'red';
    }
}