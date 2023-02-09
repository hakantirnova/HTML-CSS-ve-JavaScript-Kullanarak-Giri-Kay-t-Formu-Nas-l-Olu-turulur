let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let nameField = document.querySelector("#nameField");
let title = document.querySelector("#title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0"; // name inputu kaybolur
  title.innerHTML = "Sign In"; // Başlığın adı değişir
  signupBtn.classList.add("disable"); //signup butonu disable özelliklerini alıyor.
  signinBtn.classList.remove("disable"); // signin butonu disable özelliklerini kaldırıyor
}

signupBtn.onclick = function () {
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
}