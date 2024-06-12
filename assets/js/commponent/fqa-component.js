import { FqaData } from "../data/fqa-data.js";

const dataSources = {
  "fqa-section-data": FqaData
};

const FqaContainer = (fqaContents) => {
  return `
    <section class="p-20">
        <h1 class="text-[30px] mb-20">Frequently Asked Questions</h1>
        <ul class="flex flex-col gap-5">
            ${fqaContents
              .map(
                (items) => `
                <li class=" flex flex-col pt-5 py-2 border-[#d6d6d6] border-b-[1px] gap-3">
                    <div id="accordion-btn" class="flex justify-between ">
                        <a class="text-[22px]" href="">${items.titleFqa}</a>
                        <div id="plus-icon" class="hidden">
                            <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                        </div>
                        <div id="close-icon" >
                            <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                        </div>
                    </div>
                    <section id="accordion-dropdown" class="mt-10 max-h-0 overflow-hidden transition-all duration-500 ease-in ">
                    <p class="text-[22px]"> ${items.desFqa}
                        <a class="text-[1.7rem] font-bold border-b-[2px] border-black w-[70px] pb-1 mx-auto" href="">SignUp.</a>
                    </p>
                    </section>
                </li>
        `
              )
              .join("")}
        </ul>
    </section>
    `;
};

class FQA extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = FqaContainer(data);
  }
}

customElements.define("fqa-component", FQA);

//function for dropdown
let accordionBtn = document.querySelectorAll("#accordion-btn");
let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
let plusIcon = document.querySelectorAll("#plus-icon");
let closeIcon = document.querySelectorAll("#close-icon");
accordionBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    accordionDropdown[i].classList.toggle("max-h-[300px]");
    plusIcon[i].classList.toggle("hidden");
    closeIcon[i].classList.toggle("hidden");
  });
});
