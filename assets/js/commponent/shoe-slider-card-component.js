import { ShoeSliderData } from "../data/shoe-slider-data.js";

const dataSources = {
  "slider-shoe-data": ShoeSliderData,
};

const ShoeSliderContainer = (shoeContents) => {
  return `
        <div class="slideShow shoe-main container">
            ${shoeContents
              .map(
                (items) => `
                <div class="slide-list imgShoe">
                    <img src="${items}" alt="" />
                </div>
            `
              )
              .join("")}
        </div>
        
    `;
};
class ShoeSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = ShoeSliderContainer(data);
  }
}

customElements.define("shoe-slider-component", ShoeSlider);
