let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("#gradient");

function setGradient() {
  let colorValue = (body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")");
  css.textContent = colorValue + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
