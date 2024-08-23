// Select our buttons and store them inside variables.
const button = document.querySelector("#button");
const heading = document.querySelector("#heading");
const body = document.querySelector("body");

const makeColor = () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
  changeColor = makeColor();
  heading.textContent = changeColor;
  body.style.backgroundColor = changeColor;
});

