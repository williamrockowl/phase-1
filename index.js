// Eventlistener if button was clicked
document
  .querySelector("#reset")
  .addEventListener("click", () => (document.body.style.color = "black"));

// Eventlistener to change Background color
const btn = document.getElementById("btn");
btn.addEventListener('mouseover', () => (document.body.style.color = "red"));
