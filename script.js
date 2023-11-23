let holidaySection = document.querySelector('#holiday-section');
let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');



confirmPasswordBox.addEventListener('input', checkPW);
passwordBox.addEventListener('input', checkPW);
passwordBox.addEventListener('focus', showPwRequirements);
passwordBox.addEventListener('blur', hidePwRequirements);
confirmPasswordBox.addEventListener('focus', showPwRequirements);
confirmPasswordBox.addEventListener('blur', hidePwRequirements);

function holidaySelector(){
    console.log('running');
    let holidayKnown = document.querySelector('input[name="holidayQuery"]:checked').value;
    console.log(holidayKnown);
    if (holidayKnown == 'yes'){
        console.log('YES');
        holidaySection.classList.remove('hidden');
    }
    else{
        console.log('NO');
        document.querySelector('#location-text').value = '';
        document.querySelector('#yearOfTravel').value = '';
        holidaySection.classList.add('hidden');

    }
}


function showPwRequirements(){
    pwRequirements.classList.remove('none');
}

function hidePwRequirements(){
    pwRequirements.classList.add('none');
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