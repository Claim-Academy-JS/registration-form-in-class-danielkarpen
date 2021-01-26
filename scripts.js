// TODO: when we click already thn all fields should be hidden except username and password
// 1. Grab a reference the other button that says 'already'

// when toggleBtn is clicked, hide all inputs except for username and password
const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");
const toggledInputs = Array.from(document.querySelectorAll("input")).slice(
  0,
  3
);

toggleBtn.addEventListener("click", function () {
  if (this.innerText === "Already have an account?") {
    for (let i = 0; i < toggledInputs.length; i += 1) {
      toggledInputs[i].classList.add("is-hidden");
    }
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    const hiddenInputs = document.querySelectorAll("input.is-hidden");
    for (let i = 0; i < hiddenInputs.length; i += 1) {
      hiddenInputs[i].classList.add("is-visible");
    }
    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});
