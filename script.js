const password = document.querySelector("#password");
const repeated_password = document.querySelector("#rpassword");
const text = document.getElementById('pwmatch');
let message;
repeated_password.addEventListener('input', checkPW);



function checkPW(){
    if (document.getElementById('rpassword').value == document.getElementById('password').value){
        message = "Your passwords match";
    }
    else{
        message = "Your passwords do not match";
    }
    if (!document.getElementById('rpassword').value.length){
        text.classList.add('hidden');
    }
    else{
        text.innerText = message;
        text.classList.remove('hidden');
    }
}