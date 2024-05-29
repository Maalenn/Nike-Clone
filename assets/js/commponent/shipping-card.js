import {shippingData} from "../data/shipping-data.js";

const dataSources = {
  "shipping-data": shippingData,
};

const ShippingSliderContainer = (shippingContents) => {
  return `
        <section class="flex justify-center">
            <section class="max-w-[91%] h-full">
                <div class="scroll-info container">
                    <div class="scroll-des">
                    <h1>Member Benefits</h1>
                    </div>
                    <div class="scroll-icon max-[767px]:hidden">
                        <button href="" class="link-arrow" onclick="pushArrow(1,-1)">
                            <div class="circle-icon icon-left">
                            <img src="../assets/Image/arrow-left.svg" alt="" />
                            </div>
                        </button>
                        <button href="" class="link-arrow" onclick="pushArrow(1,1)">
                            <div class="circle-icon icon-right">
                            <img src="../assets/Image/arrow-right.svg" alt="" />
                            </div>
                        </button>
                    </div>
                </div>
                <ul class="w-[100%] grid  grid-cols-[repeat(${shippingContents.length},450px)] overflow-auto slideShow">
                    ${shippingContents.map(
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
                    ).join("")}
                </ul>
            </section>
        </section>
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
