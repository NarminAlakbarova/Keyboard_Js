const inputField = document.querySelector(".inputField");
const keyboardButtons = document.querySelectorAll(".keyboard li");

let capsLockActive = false;

window.addEventListener("keydown", function (e) {
  const keyPressed = e.key;

  if (keyPressed === " ") {
    inputField.textContent += " ";
  } else {
    keyboardButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === keyPressed.toLowerCase()) {
        button.classList.add("press");

        if (keyPressed === "Enter") {
          inputField.innerHTML += "<br>";
        } else if (keyPressed === "Backspace") {
          inputField.textContent = inputField.textContent.slice(0, -1);
        } else {
          inputField.textContent += capsLockActive
            ? keyPressed.toUpperCase()
            : keyPressed.toLowerCase();
        }
      } else if (keyPressed === "CapsLock") {
        capsLockActive = !capsLockActive;
      }
    });
  }
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
