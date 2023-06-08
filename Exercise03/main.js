let inputForm = document.querySelector("#From");
let inputTo = document.querySelector("#To");
let inputSubject = document.querySelector("#Subject");
let inputMessage = document.querySelector("#Message");

let firstInput = prompt("The message is from");
let SecondInput = prompt("The message is to");
let ThirdInput = prompt("The subject is ");
let ForthInput = prompt("Write your message");

alert(
  `The message is from: ${firstInput}, To: ${SecondInput}, The subject is: ${ThirdInput}, The message is: ${ForthInput}`
);

class Email {
  constructor(_form, _to, _subject, _message) {
    this.form = _form;
    this.to = _to;
    this.subject = _subject;
    this.message = _message;
    this.fullInput = function () {
      inputForm.value = firstInput;
      inputTo.value = SecondInput;
      inputSubject.value = ThirdInput;
      inputMessage.value = ForthInput;
    };
  }
}

const myEmail = new Email();
myEmail.fullInput();
