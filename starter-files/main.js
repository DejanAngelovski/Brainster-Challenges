const AllLetters = document.querySelectorAll("button");

const paragraph = document.querySelector("p");

AllLetters.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === "SPACE") {
      paragraph.innerHTML += "&nbsp";
    } else {
      paragraph.innerText += event.currentTarget.innerText;
    }
  });
});
