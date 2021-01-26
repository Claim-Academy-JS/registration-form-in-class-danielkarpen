// TODO: when we click already thn all fields should be hidden except username and password
// 1. Grab a reference the other button that says 'already'

// when toggleBtn is clicked, hide all inputs except for username and password
const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", function () {
  this.textContent = "Need to create an account?";
});
