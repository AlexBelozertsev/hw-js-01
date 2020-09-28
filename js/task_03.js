let userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

// userPassword = prompt("Введите пароль", "");

// if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword.toLowerCase() === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword.toLowerCase() !== ADMIN_PASSWORD) {
//   message = ACCESS_DENIED;
// }

// console.log(message);

// experiment
const userPasswordRef = document.querySelector('input[name="userPassword"]');
const enterRef = document.querySelector(".enter");

enterRef.addEventListener("click", function () {
  if (userPasswordRef.value === null) {
    message = CANCELED_BY_USER;
  } else if (userPasswordRef.value === ADMIN_PASSWORD) {
    message = ACCESS_IS_ALLOWED;
  } else {
    message = ACCESS_DENIED;
  }

  alert(message);
});
