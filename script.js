const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const container = document.querySelector("#container");
const AllBtn = document.querySelector("#AllBtn");
const ActiveBtn = document.querySelector("#ActiveBtn");
const InactiveBtn = document.querySelector("#InactiveBtn");

let obj;
(async function getData() {
  const api = await fetch("data.json");
  const apiJson = await api.json();
  obj = apiJson;
  giveData(obj);
  btnCall();
})();

async function giveData(obj) {
  obj.forEach((items) => {
    container.innerHTML += `<div
class="${
      localStorage.getItem("theme") === "dark"
        ? "bg-Neutral800 border-Neutral700"
        : "bg-white border-Neutral300"
    } border-2  rounded-2xl"
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
      <h2 class="font-[700] ${
        localStorage.getItem("theme") === "dark"
          ? "text-white"
          : "text-Neutral800"
      } text-[1.4rem] leading-none">${items.name}</h2>
      <p class="mt-2  ${
        localStorage.getItem("theme") === "dark"
          ? "text-Neutral300"
          : "text-Neutral600"
      }">
        ${items.description}
      </p>
    </div>
  </div>
  <div class="flex items-center justify-between">
    <button
      class="px-5 py-2  border border-Neutral600 rounded-full text-[15px] font-[500] ${
        localStorage.getItem("theme") === "dark"
          ? "bg-Neutral800 text-white"
          : "bg-white text-Neutral800"
      }" data-removeBtn=""
    >
      Remove
    </button>
    <div
      class="w-[60px] h-[26px] bg-Neutral600 flex items-center px-[3px] rounded-full cursor-pointer"
      data-toggleDiv=""
    >
      <div
        class="bg-white rounded-full w-[20px] h-[20px] transition-all ${
          items.isActive == true ? "active" : "unactive"
        }"
      
        data-toggleCircle=""
      ></div>
    </div>
  </div>
</div>
</div>`;
  });
  gt();
  remove();
}
function gt() {
  document.querySelectorAll(".active").forEach((items) => {
    items.classList.add("translate-x-[34px]");
    items.parentElement.classList.add("bg-Red400");
  });

  document
    .querySelectorAll("[data-toggleDiv]")
    .forEach((toggleItems, index) => {
      toggleItems.addEventListener("click", (e) => {
        if (
          toggleItems
            .querySelector("[data-toggleCircle]")
            .classList.contains("translate-x-[34px]")
        ) {
          toggleItems
            .querySelector("[data-toggleCircle]")
            .classList.remove("translate-x-[34px]");
          toggleItems.classList.remove("bg-Red400");
          if (ActiveBtn.classList.contains("bg-Red400")) {
            let active = obj.filter((item) => item.isActive);
            active[index].isActive = false;
            container.innerHTML = "";
            active = obj.filter((item) => item.isActive);
            giveData(active);
          } else if (InactiveBtn.classList.contains("bg-Red400")) {
            let inactive = obj.filter((item) => !item.isActive);
            inactive[index].isActive = false;
            container.innerHTML = "";
            inactive = obj.filter((item) => !item.isActive);
            giveData(inactive);
          } else {
            obj[index].isActive = false;
          }
        } else {
          toggleItems
            .querySelector("[data-toggleCircle]")
            .classList.add("translate-x-[34px]");
          toggleItems.classList.add("bg-Red400");
          if (ActiveBtn.classList.contains("bg-Red400")) {
            let active = obj.filter((item) => item.isActive);
            active[index].isActive = true;
            container.innerHTML = "";
            active = obj.filter((item) => item.isActive);
            giveData(active);
          } else if (InactiveBtn.classList.contains("bg-Red400")) {
            let inactive = obj.filter((item) => !item.isActive);
            inactive[index].isActive = true;
            container.innerHTML = "";
            inactive = obj.filter((item) => !item.isActive);
            giveData(inactive);
          } else {
            obj[index].isActive = true;
          }
        }
      });
    });
}

function btnCall() {
  AllBtn.addEventListener("click", (e) => {
    container.innerHTML = "";
    gt();
    giveData(obj);
  });
  ActiveBtn.addEventListener("click", () => {
    let active = obj.filter((item) => item.isActive);
    gt();
    container.innerHTML = "";
    giveData(active);
  });
  InactiveBtn.addEventListener("click", () => {
    let inactive = obj.filter((item) => !item.isActive);
    gt();
    container.innerHTML = "";
    giveData(inactive);
  });
}
function remove() {
  const removeBtn = document.querySelectorAll("[data-removeBtn]");
  removeBtn.forEach((items) => {
    items.addEventListener("click", (e) => {
      gt();
      const name =
        items.parentElement.parentElement.querySelector("h2").textContent;
      obj = obj.filter((item) => item.name !== name);
      let active = ActiveBtn.classList.contains("bg-Red400")
        ? obj.filter((item) => item.isActive)
        : InactiveBtn.classList.contains("bg-Red400")
        ? obj.filter((item) => !item.isActive)
        : (obj = obj.filter((item) => item));
      container.innerHTML = "";
      giveData(active);
    });
  });
}
function as() {
  window.addEventListener("DOMContentLoaded", (e) => {
    const Buttons = document.querySelectorAll("[data-Btns]");
    const toggleDiv = document.querySelectorAll("[data-toggleDiv]");
    const toggleCircle = document.querySelectorAll("[data-toggleCircle]");

    function moonChange() {
      moon.classList.add("hidden");
      sun.classList.remove("hidden");
      document.body.classList.remove("bg-DarkGradient");
      document.body.classList.add("bg-LightGradient");
      document.querySelector("#changeFirst").classList.remove("fill-[#fff]");
      document
        .querySelector("#changeFirst")
        .classList.add("fill-[hsl(3_77%_44%)]");
      document.querySelector("#changeSecond").classList.remove("fill-[#fff]");
      document.querySelector("#changeSecond").classList.add("fill-Neutral800");
      document.querySelector("#navColor").classList.remove("bg-Neutral800");
      document.querySelector("#navColor").classList.add("bg-Neutral0");
      sun.parentElement.classList.add("bg-Neutral0");

      document.querySelectorAll("h1,h2").forEach((items) => {
        items.classList.add("text-Neutral800");
        items.classList.remove("text-white");
      });
      document.querySelectorAll("[data-item]").forEach((items, i) => {
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.remove("bgNeutral800");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.add("bg-white");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.add("text-Neutral900");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.remove("text-white");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.add("border-Neutral300");
        items.querySelector("p").classList.add("text-Neutral600");

        items.classList.remove("bg-Neutral700");
        items.classList.add("bg-white");
        items.classList.add("border-Neutral300");
        items.classList.remove("border-Neutral700");
      });

      Buttons.forEach((items) => {
        if (!items.classList.contains("bg-Red400")) {
          items.classList.add("bg-white");
          items.classList.add("border-Neutral300");
          items.classList.remove("border-Red400");
          items.classList.remove("text-white");
          items.classList.remove("bg-Red400");
          items.classList.add("text-Neutral900");
        } else {
          items.classList.add("bg-Red400");
          items.classList.remove("text-white");
          items.classList.add("text-Neutral800");
        }
        items.addEventListener("click", (e) => {
          items.classList.remove("bg-white");
          items.classList.add("bg-Red400");
          items.classList.add("text-Neutral800");
          items.classList.remove("border-Neutral300");
          items.classList.remove("border-Neutral600");
          items.classList.add("border-Red400");
          Buttons.forEach((otherItems) => {
            if (items !== otherItems) {
              otherItems.classList.add("bg-white");
              otherItems.classList.add("border-Neutral300");
              otherItems.classList.remove("border-Red400");
              otherItems.classList.remove("text-white");
              otherItems.classList.remove("bg-Red400");
              otherItems.classList.add("text-Neutral900");
            }
          });
        });
      });
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
      document
        .querySelector("#changeSecond")
        .classList.remove("fill-Neutral800");
      document.querySelector("#navColor").classList.add("bg-Neutral800");
      document.querySelector("#navColor").classList.remove("bg-Neutral0");

      document.querySelectorAll("h1,h2").forEach((items) => {
        items.classList.remove("text-Neutral800");
      });
      document.querySelectorAll("[data-item]").forEach((items, i) => {
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.remove("bg-white");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.remove("text-Neutral900");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.add("text-white");
        document
          .querySelectorAll("[data-removeBtn]")
          [i].classList.remove("border-Neutral300");
        items.querySelector("p").classList.remove("text-Neutral600");

        items.classList.remove("bg-white");
        items.classList.remove("border-Neutral300");
        items.classList.add("bg-Neutral800");
        items.classList.add("border-Neutral700");
      });

      Buttons.forEach((items) => {
        if (items.classList.contains("bg-Red400")) {
          items.classList.remove("bg-white");
          items.classList.remove("border-Neutral300");
          items.classList.add("border-Red400");
          items.classList.add("text-white");
          items.classList.add("bg-Red400");
          items.classList.remove("text-Neutral900");
        } else {
          items.classList.remove("bg-white");
          items.classList.add("text-white");
          items.classList.remove("border-Neutral300");
          items.classList.add("border-Neutral600");
        }
        items.addEventListener("click", (e) => {
          items.classList.add("bg-Red400");
          items.classList.add("text-white");
          items.classList.add("border-Red400");
          Buttons.forEach((otherItems) => {
            if (items !== otherItems) {
              otherItems.classList.add("bg-Neutral700");
              otherItems.classList.add("border-Neutral600");
              otherItems.classList.remove("bg-Red400");
              otherItems.classList.remove("text-Neutral900");
              otherItems.classList.remove("border-Red400");
              otherItems.classList.remove("bg-white");
              otherItems.classList.remove("border-Neutral300");
              otherItems.classList.add("text-white");
              otherItems.classList.remove("text-Neutral900");
            }
          });
        });
      });
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
  });
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
}
as();
