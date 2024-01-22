`use strict`
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const name = input.value.trim() || "Anonymous";
  output.textContent = name;
});

const elements = document.querySelectorAll("#name-input");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.display = "inline-flex";
  elements[i].style.padding = "24px";
  elements[i].style.flexDirection = "column";
  elements[i].style.alignItems = "flex-start";
  elements[i].style.gap = "16px";
  elements[i].style.borderRadius = "8px";
  elements[i].style.background = "#FFF";
  elements[i].style.width = "360px";
  elements[i].style.height = "40px";
  elements[i].style.color = "#2E2F42";
  elements[i].style.fontFamily = "Montserrat";
  elements[i].style.fontSize = "16px";
  elements[i].style.fontStyle = "normal";
  elements[i].style.fontWeight = "400";
  elements[i].style.lineHeight = "24px";
  elements[i].style.letterSpacing = "0.64px";
}