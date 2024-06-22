export function test() {
  const element = document.createElement("div");

  element.textContent = "sup hoes, from test.js";

  element.classList.add("welcome");

  return element;
}
