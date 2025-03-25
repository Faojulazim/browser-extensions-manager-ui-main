const toggleDiv = document.querySelectorAll("[data-toggleDiv]");
const toggleCircle = document.querySelectorAll("[data-toggleCircle]");

function moonChange() {
  moon.classList.add("hidden");
  sun.classList.remove("hidden");
  document.body.classList.remove("bg-DarkGradient");
  document.body.classList.add("bg-LightGradient");
  document.querySelector("#changeFirst").classList.remove("fill-[#fff]");
  document.querySelector("#changeFirst").classList.add("fill-[hsl(3_77%_44%)]");
  document.querySelector("#changeSecond").classList.remove("fill-[#fff]");
  document.querySelector("#changeSecond").classList.add("fill-Neutral800");
  document.querySelector("#navColor").classList.remove("bg-Neutral800");
  document.querySelector("#navColor").classList.add("bg-Neutral0");
  sun.parentElement.classList.add("bg-Neutral0");
}
function sunChange() {
  moon.classList.remove("hidden");
  sun.classList.add("hidden");
  document.body.classList.add("bg-DarkGradient");
  document.body.classList.remove("bg-LightGradient");
  document.querySelector("#changeFirst").classList.add("fill-[#fff]");
  document
    .querySelector("#changeFirst")
    .classList.remove("fill-[hsl(3_77%_44%)]");
  document.querySelector("#changeSecond").classList.add("fill-[#fff]");
  document.querySelector("#changeSecond").classList.remove("fill-Neutral800");
  document.querySelector("#navColor").classList.add("bg-Neutral800");
  document.querySelector("#navColor").classList.remove("bg-Neutral0");
}

moon.addEventListener("click", (e) => {
  localStorage.setItem("theme", "white");
  moonChange();
});
sun.addEventListener("click", (e) => {
  localStorage.setItem("theme", "dark");
  sunChange();
});
if (localStorage.getItem("theme") === "dark") {
  sunChange();
} else {
  moonChange();
}
