let holidaySection = document.querySelector('#holiday-section');
let passwordBox = document.querySelector('#password');
let confirmPasswordBox = document.querySelector('#confirm-password');
let pwRequirements = document.querySelector('#pwd-requirements');


passwordBox.addEventListener('focus', showPwRequirements);
passwordBox.addEventListener('blur', hidePwRequirements);

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