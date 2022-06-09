import {parameters} from "./Parameters.js";
import {spam_protection} from "./client.js";


const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  const arr = spam_protection(parameters, event.target.textField.value);
  alert(`Сообщение отправлено ${arr[0]} раз(а) из ${arr[1]} возможных за ${parameters.nonce} секунд(ы)`);
}

form.addEventListener('submit', submitForm);