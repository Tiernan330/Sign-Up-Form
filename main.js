let wPassword = document.getElementById("wPassword");
let Password = document.getElementById("password");
let ConfirmPassword = document.getElementById("cPassword");
let submit = document.getElementById("submit");
wPassword.style.visibility='hidden';

function PasswordMatch(){
    console.log(Password.value);
    console.log(ConfirmPassword.value);
    return Password.value == ConfirmPassword.value;
}

function PasswordCheck(){
    let password = PasswordMatch();
    console.log(password);
    switch(password){
        case false:
            wPassword.style.visibility='visible';
            Password.classList.add("error")
            ConfirmPassword.classList.add("error")
            submit.disabled = true;
            break;
        
        default:
            wPassword.style.visibility='hidden';
            Password.classList.remove("error")
            ConfirmPassword.classList.remove("error")
            submit.disabled = false;
            break;
    }
}

ConfirmPassword.onchange = PasswordCheck;
Password.onchange = PasswordCheck;