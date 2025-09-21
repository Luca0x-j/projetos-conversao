const sliderElement = document.getElementById("slider");
const buttonElement = document.getElementById("button");

const sizePassword = document.getElementById("character-value");
const password = document.getElementById("password");

const containerPassword = document.getElementById("container-password");
// let copyChecker = document.getElementsByClassName(".tooltip");

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function passwordGenerator () {
    let pass = "";
    for(let i = 0, n = charSet.length; i < sliderElement.value; ++i) {
        pass += charSet.charAt(Math.floor(Math.random() * n));
    };

    containerPassword.classList.remove("hide");
    password.innerHTML  = pass;
    newPassword = pass;
};

function copyPassword (){
    alert("Password Copied with Sucess");
    // copyChecker.innerText = "Password Copied with Sucess ✅";
    navigator.clipboard.writeText(newPassword);
};

