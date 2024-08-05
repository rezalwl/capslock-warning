const passwordInput = document.querySelector("#password");
const warningElem = document.querySelector("#warning");

passwordInput.addEventListener("keyup", (e) => {
  if (e.getModifierState("CapsLock")) {
    warningElem.style.display = "block";
  } else {
    warningElem.style.display = "none";
  }
});
