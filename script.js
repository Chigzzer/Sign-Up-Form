let holidaySection = document.querySelector('#holiday-section');
let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');



confirmPasswordBox.addEventListener('input', checkPW);
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