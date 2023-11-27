const inputField = document.querySelector(".inputField");
const keyboardButtons = document.querySelectorAll(".keyboard li");

let capsLockActive = false;

window.addEventListener("keydown", function (e) {
  const keyPressed = e.key;
  keyboardButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === keyPressed.toLowerCase()) {

      button.classList.add("press");
      if (keyPressed === "Enter") {

        completeAction();
      } else if (keyPressed === " ") {
    console.log(button.innerText);

        console.log("space");
        inputField.textContent += " ";
      } else if (keyPressed === "Backspace") {
        console.log("backspace");
        inputField.innerText = inputField.innerText.slice(0, -1);
      } else {
        inputField.innerHTML += capsLockActive
          ? keyPressed.toUpperCase()
          : keyPressed.toLowerCase();
      }
    } else if (keyPressed === "CapsLock") {
      capsLockActive = !capsLockActive;
    }
  });
});

function completeAction() {
  inputField.innerHTML += "<br>";
}

window.addEventListener("keyup", function (e) {
  const keyPressed = e.key;
  keyboardButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === keyPressed.toLowerCase()) {
      button.classList.remove("press");
    }
  });
});
