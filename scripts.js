// TODO: when we click already thn all fields should be hidden except username and password
// 1. Grab a reference the other button that says 'already'

// when toggleBtn is clicked, hide all inputs except for username and password
const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");
const toggledInputs = document.querySelectorAll("input:not(#uname, #password)");

toggleBtn.addEventListener("click", function () {
  for (let i = 0; i < toggledInputs.length; i += 1) {
    toggledInputs[i].classList.add("is-hidden");
  }
  if (this.innerText === "Already have an account?") {
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});
