// setTimeout(() => {
//   const toggleDiv = document.querySelectorAll("[data-toggleDiv]");
//   const toggleCircle = document.querySelectorAll("[data-toggleCircle]");
//   function moonChange() {
//     moon.classList.add("hidden");
//     sun.classList.remove("hidden");
//     document.body.classList.remove("bg-DarkGradient");
//     document.body.classList.add("bg-LightGradient");
//     document.querySelector("#changeFirst").classList.remove("fill-[#fff]");
//     document
//       .querySelector("#changeFirst")
//       .classList.add("fill-[hsl(3_77%_44%)]");
//     document.querySelector("#changeSecond").classList.remove("fill-[#fff]");
//     document.querySelector("#changeSecond").classList.add("fill-Neutral800");
//     document.querySelector("#navColor").classList.remove("bg-Neutral800");
//     document.querySelector("#navColor").classList.add("bg-Neutral0");
//     sun.parentElement.classList.add("bg-Neutral0");
//   }
//   function sunChange() {
//     moon.classList.remove("hidden");
//     sun.classList.add("hidden");
//     document.body.classList.add("bg-DarkGradient");
//     document.body.classList.remove("bg-LightGradient");
//     document.querySelector("#changeFirst").classList.add("fill-[#fff]");
//     document
//       .querySelector("#changeFirst")
//       .classList.remove("fill-[hsl(3_77%_44%)]");
//     document.querySelector("#changeSecond").classList.add("fill-[#fff]");
//     document.querySelector("#changeSecond").classList.remove("fill-Neutral800");
//     document.querySelector("#navColor").classList.add("bg-Neutral800");
//     document.querySelector("#navColor").classList.remove("bg-Neutral0");
//   }
//   toggleDiv.forEach((items) => {
//     items.addEventListener("click", (e) => {
//       if (
//         items
//           .querySelector("[data-toggleCircle")
//           .classList.contains("translate-x-[34px]")
//       ) {
//         localStorage.setItem("toggle", "translateNo");
//         items
//           .querySelector("[data-toggleCircle")
//           .classList.remove("translate-x-[34px]");
//         items.classList.remove("bg-Red500");
//       } else {
//         localStorage.setItem("toggle", "translateYes");
//         items
//           .querySelector("[data-toggleCircle")
//           .classList.add("translate-x-[34px]");
//         items.classList.add("bg-Red500");
//       }
//     });
//   });
//   if (localStorage.getItem("toggle") === "translateNo") {
//     toggleDiv.forEach((items) => {
//       items
//         .querySelector("[data-toggleCircle]")
//         .classList.remove("translate-x-[34px]");
//       items.classList.remove("bg-Red500");
//     });
//   } else if (localStorage.getItem("toggle") === "translateYes") {
//     toggleDiv.forEach((items) => {
//       items
//         .querySelector("[data-toggleCircle]")
//         .classList.add("translate-x-[34px]");
//       items.classList.add("bg-Red500");
//     });
//   }
//   moon.addEventListener("click", (e) => {
//     localStorage.setItem("theme", "white");
//     moonChange();
//   });
//   sun.addEventListener("click", (e) => {
//     localStorage.setItem("theme", "dark");
//     sunChange();
//   });
//   if (localStorage.getItem("theme") === "dark") {
//     sunChange();
//   } else {
//     moonChange();
//   }
// }, 1000);
