// Eventlistener if button was clicked
document
  .querySelector("#alert")
  .addEventListener("click", () => alert("Alert!!"));

// Eventlistener to change Background color
const btn = document.getElementById("btn");
btn.addEventListener("click", () => (document.body.style.color = "red"));
