const password = document.querySelector("#password");
const repeated_password = document.querySelector("#rpassword");
const text = document.getElementById('pwmatch');
let message;
let borderColor;
repeated_password.addEventListener('input', checkPW);
password.addEventListener('input', checkPW);
let error = '\u{026A0}'; 


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