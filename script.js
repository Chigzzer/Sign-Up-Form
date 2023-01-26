const password = document.querySelector("#password");
const repeated_password = document.querySelector("#rpassword");
const text = document.getElementById('pwmatch');
const root = document.querySelector(':root');
const mode = document.querySelector('#mode');
const submit = document.querySelector('#submit'); 
let message;
let borderColor;
repeated_password.addEventListener('input', checkPW);
password.addEventListener('input', checkPW);
mode.addEventListener('click', changeTheme);
let error = '\u{026A0}'; 


function submitform(){
    let pw = document.querySelector('#password');
    let rpw = document.querySelector('#rpassword');
    let matchingNodes = document.getElementsByClassName('matching');
    if (pw.value != rpw.value){
        return;
    }
    else{
        while (matchingNodes[0]){
            text.removeChild(matchingNodes[0]);
        }
        pw.style.border = "1px solid black"; 
        rpw.style.border = "1px solid black"; 
        document.querySelector('#register').reset();
        const confirm = document.createElement('div');
        confirm.innerText = "Thank you for registering, you can sign in now!";
        confirm.classList.add('registered-text');
        document.querySelector('#register-form').appendChild(confirm);
        passwordLength();

    }
}

function changeTheme(){
    if (!mode.classList.contains('dark')){
        console.log('Working');
        mode.classList.add('dark');
        mode.classList.remove('light');
        root.style.setProperty('--color-background', 'grey');
        root.style.setProperty('--color-form', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--color-right', 'rgba(0, 0, 0, 0.8)');
        root.style.setProperty('--right-text', 'rgba(255,255,255');
        root.style.setProperty('--form-text', 'rgba(0,0,0)');
        mode.textContent = 'Dark Mode';
    }
    else{
        mode.classList.add('light');
        mode.classList.remove('dark');
        root.style.setProperty('--color-background', 'grey');
        root.style.setProperty('--color-right', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--color-form', 'rgba(0, 0, 0, 0.8)');
        root.style.setProperty('--right-text', 'rgba(0,0,0)');
        root.style.setProperty('--form-text', 'rgba(255,255,255');
        mode.textContent = 'Light Mode';
    }
}

function checkPW(){
    passwordMatch();
    passwordLength();
}

function passwordLength(){
    let nodeLength = document.querySelector('.requirements');
    console.log(document.getElementById('password').value.length)
    if (document.getElementById('password').value.length < 8){
        nodeLength.classList.remove('lengthcorrect');
        nodeLength.classList.add('lengthwrong');
    }
    else{
        nodeLength.classList.remove('lengthwrong');
        nodeLength.classList.add('lengthcorrect');
    }

}

function passwordMatch(){
    let matchingNodes = document.getElementsByClassName('matching');
    if (document.getElementById('rpassword').value == document.getElementById('password').value){
        while (matchingNodes[0]){
            text.removeChild(matchingNodes[0]);
        }
        message = "Your passwords match \n";
        borderColor = '3px solid green';
    }
    else{
        while (matchingNodes[0]){
            text.removeChild(matchingNodes[0]);
        }
        message = error + "Your passwords do not match";
        borderColor = '3px solid red';
    }

    if (!document.getElementById('rpassword').value){
        text.classList.add('hidden');
    }
    else{
        let matchText = document.createElement('div');
        matchText.innerText = message;
        matchText.classList.add('matching');
        text.appendChild(matchText);
        text.classList.remove('hidden');
        document.getElementById('password').style.border = borderColor;
        document.getElementById('rpassword').style.border = borderColor;
    }
}