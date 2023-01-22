const password = document.querySelector("#password");
const repeated_password = document.querySelector("#rpassword");
const text = document.getElementById('pwmatch');
let message;
let borderColor;
repeated_password.addEventListener('input', checkPW);
let error = '\u{026A0}'; 


function checkPW(){
    if (document.getElementById('rpassword').value == document.getElementById('password').value){
        message = "Your passwords match";
        borderColor = '3px solid green';
    }
    else{
        message = error + "Your passwords do not match";
        borderColor = '1px solid red';
    }
    if (!document.getElementById('rpassword').value.length){
        text.classList.add('hidden');
    }
    else{
        text.innerText = message;
        text.classList.remove('hidden');
        document.getElementById('password').style.border = borderColor;
        document.getElementById('rpassword').style.border = borderColor;
    }
}