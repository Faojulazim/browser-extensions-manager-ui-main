const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const container = document.querySelector("#container");

let obj;
async function getData() {
  const api = await fetch("data.json");
  const apiJson = await api.json();
  obj = apiJson;
  giveData(obj);
}
getData();
function giveData(obj) {
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
      class="px-5 py-2 bg-Neutral800 border border-Neutral600 rounded-full text-[15px] font-[500]"
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
}
