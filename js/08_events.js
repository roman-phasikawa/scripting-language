// Element Selection
let btn = document.getElementById("btn");
let box = document.getElementById("box");
let inp = document.getElementById("inp");
let form = document.getElementById("myForm");
let out = document.getElementById("out");

// 1. Mouse Events
btn.addEventListener("click", () => (out.innerText = "Click"));
btn.addEventListener("dblclick", () => (out.innerText = "Double Click"));
box.addEventListener("mouseover", () => box.classList.add("active"));
box.addEventListener("mouseout", () => box.classList.remove("active"));
box.addEventListener("mousedown", () => (box.innerText = "Down"));
box.addEventListener("mouseup", () => (box.innerText = "Box"));

// 2. Keyboard Events
inp.addEventListener("keydown", (e) => console.log(`Down: ${e.key}`));
inp.addEventListener("keyup", (e) => (out.innerText = `Key: ${e.target.value}`));
inp.addEventListener("keypress", (e) => console.log(`Press: ${e.key}`));

// 3. Form Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  out.innerText = "Submitted";
});
inp.addEventListener("change", () => console.log("Changed"));
inp.addEventListener("focus", () => (inp.style.background = "#e0f7fa"));
inp.addEventListener("blur", () => (inp.style.background = ""));

// 4. Window Events
window.addEventListener("load", () => console.log("Loaded"));
window.addEventListener("resize", () => (out.innerText = `Size: ${window.innerWidth}px`));
window.addEventListener("scroll", () => console.log(`Scroll: ${window.scrollY}`));