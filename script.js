const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const container = document.querySelector("#container");
const AllBtn = document.querySelector("#AllBtn");
const ActiveBtn = document.querySelector("#ActiveBtn");
const InactiveBtn = document.querySelector("#InactiveBtn");
const Buttons = document.querySelectorAll("[data-Btns]");

let obj;
(async function getData() {
  const api = await fetch("data.json");
  const apiJson = await api.json();
  obj = apiJson;
  giveData(obj);
})();

async function giveData(obj) {
  obj.forEach((items) => {
    container.innerHTML += `<div
class="bg-Neutral800 border-2 border-Neutral600 rounded-2xl"
data-item=""
>
<div class="p-5 flex flex-col gap-y-7">
  <div class="flex items-start gap-x-5">
    <img
      class="max-w-[150px]"
      src="${items.logo}"
      alt=""
    />
    <div class="mt-[2px]">
      <h2 class="font-[700] text-[1.4rem] leading-none">${items.name}</h2>
      <p class="mt-2 text-Neutral300">
        ${items.description}
      </p>
    </div>
  </div>
  <div class="flex items-center justify-between">
    <button
      class="px-5 py-2 bg-Neutral800 border border-Neutral600 rounded-full text-[15px] font-[500]" data-removeBtn=""
    >
      Remove
    </button>
    <div
      class="w-[60px] h-[26px] bg-Neutral600 flex items-center px-[3px] rounded-full cursor-pointer"
      data-toggleDiv=""
    >
      <div
        class="bg-white rounded-full w-[20px] h-[20px] transition-all"
      
        data-toggleCircle=""
      ></div>
    </div>
  </div>
</div>
</div>`;
  });
  remove();
  active(obj);
  btnCall(obj);
}
function active(items2) {
  const toggleCircle = document.querySelectorAll("[data-toggleCircle]");
  toggleCircle.forEach((items, i) => {
    const isActive = items2[i].isActive;
    if (isActive) {
      items.classList.add("translate-x-[34px]");
      items.parentElement.classList.add("bg-Red400");
    } else {
      items.classList.remove("translate-x-[34px]");
      items.parentElement.classList.remove("bg-Red400");
    }
  });
}
Buttons.forEach((items) => {
  items.addEventListener("click", (e) => {
    items.classList.add("bg-Red400");
    items.classList.add("text-Neutral900");
    items.classList.add("border-Red400");
    Buttons.forEach((otherItems) => {
      if (items !== otherItems) {
        otherItems.classList.add("bg-Neutral700");
        otherItems.classList.add("border-Neutral600");
        otherItems.classList.remove("bg-Red400");
        otherItems.classList.remove("text-Neutral900");
        otherItems.classList.remove("border-Red400");
      }
    });
  });
});
function btnCall(items2) {
  ActiveBtn.addEventListener("click", (e) => {
    const toggleCircle = document.querySelectorAll("[data-toggleCircle]");
    toggleCircle.forEach((items, i) => {
      const isActive = items2[i].isActive;
      if (!isActive) {
        items.parentElement.parentElement.parentElement.parentElement.classList.add(
          "hidden"
        );
      } else {
        items.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      }
    });
  });
  InactiveBtn.addEventListener("click", (e) => {
    const toggleCircle = document.querySelectorAll("[data-toggleCircle]");
    toggleCircle.forEach((items, i) => {
      const isActive = items2[i].isActive;
      if (isActive) {
        items.parentElement.parentElement.parentElement.parentElement.classList.add(
          "hidden"
        );
      } else {
        items.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      }
    });
  });
  AllBtn.addEventListener("click", (e) => {
    const toggleCircle = document.querySelectorAll("[data-toggleCircle]");
    toggleCircle.forEach((items, i) => {
      const isActive = items2[i].isActive;
      if (isActive) {
        items.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      } else {
        items.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      }
    });
  });
}
function remove() {
  const removeBtn = document.querySelectorAll("[data-removeBtn]");
  removeBtn.forEach((items) => {
    items.addEventListener("click", (e) => {
      items.parentElement.parentElement.parentElement.remove();
      console.log(obj);
    });
  });
}
