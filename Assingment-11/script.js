const name = document.getElementById("name");
const pwd = document.getElementById("pass");
const remember = document.querySelector("input[type='checkbox']");
const member = document.getElementById("member");
const login = document.getElementById("login");
const visibility = document.querySelector(".visibility");

visibility.addEventListener("click", () => {
  if (pwd.type === "password") {
    pwd.type = "text";
    visibility.innerText = "visibility";
  } else {
    pwd.type = "password";
    visibility.innerText = "visibility_off";
  }
});

login.addEventListener("click", function () {
  if (remember.checked) {
    document.cookie = `name = ${name.value};expires=15 May 2024 12:00:00 UTC`;
    document.cookie = `pass = ${pwd.value};expires=15 May 2024 12:00:00 UTC`;
  }
  console.log(document.cookie);
});
member.onclick = function () {
  name.value = document.cookie.split(";")[0].split("=")[1];
  pwd.value = document.cookie.split(";")[1].split("=")[1];
};
