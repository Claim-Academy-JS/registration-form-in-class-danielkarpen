// 'querySelectors' use a string that corresponds with a CSS selector
const usernameInput = document.querySelector("#uname");
usernameInput.addEventListener(
  // what do i listen for
  "input",
  // what action do i perform when this event occurs ('change' event)?
  // wow we can pass a function into another function/object this is known as a callback function
  () => {
    console.log("hello! I was changed!");
  }
);

// document is the object provided by DOM API
//  querySelector is a method it takes a string argument ""
// that string argument can be any CSS selector
document.querySelector("#fname");
