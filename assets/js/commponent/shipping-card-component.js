import { ShippingData } from "../data/shipping-card-data.js";

const dataSources = {
  "shipping-data": ShippingData,
};

const ShippingSliderContainer = (shippingContents) => {
  return `
        <ul class="w-[100%] grid  grid-cols-[repeat(${
            shippingContents.length
        },450px)] overflow-auto slideShow container">
            ${shippingContents
                .map(
                (items) => `
                <li class="py-[20px] slide-list">
                    <a class="" href=""> 
                        <div class="">
                            <div class="relative">
                                <div class="">
                                    <img src="${items.imgShip}" alt="" />
                                </div>
                                <div class="text-center absolute bottom-60 left-20 w-[350px] text-black flex flex-col gap-10">
                                    <h3 class="text-[28px] font-bold">${items.titleShip}</h3>
                                    <h1 class="text-[20px] ">${items.desShip}</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            `
                )
                .join("")}
        </ul>
            
    `;
};

class ShippingSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = ShippingSliderContainer(data);
  }
}

customElements.define("shipping-slider-component", ShippingSlider);
