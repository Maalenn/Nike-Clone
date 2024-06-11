import {MembershipData,BenefitData} from '../data/membership-slider-data.js'

const dataSources = {
    "membership-data": MembershipData,
    "benefit-data": BenefitData
}
const MembershipContainer = (memberContents) =>{
    return `
        <ul class="w-[100%] grid grid-cols-[repeat(${memberContents.length},450px)] overflow-auto slideShow container">
            ${memberContents.map(items => `
                <li class="p-[5px] slide-list">
                    <a class="" href=""> 
                        <div class="">
                            <div class="relative">
                                <div class="">
                                    <img src="${items.imgMember}" alt="" />
                                </div>
                                <div class="absolute bottom-10 left-10 text-white flex flex-col gap-5">
                                    <h3 class="capitalize text-[18px] ">${items.titleMember}</h3>
                                    <h1 class="capitalize text-[25px] ">${items.desMember}</h1>
                                    <button class="capitalize text-[20px] bg-white text-black px-3 py-2 rounded-[30px] max-w-[120px]">${items.btnMember}</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            `).join("")}
        </ul>
    `
}

class MemberShipSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = MembershipContainer(data);
  }
}

customElements.define("membership-slider-component", MemberShipSlider);