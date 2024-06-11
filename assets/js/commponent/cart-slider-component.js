import { CartSliderData } from "../data/cart-slider-data.js";

const dataSources = {
  "cart-slider-data": CartSliderData,
};

const CartSliderContainer = (cartContents) => {
  return `
        <ul class="w-[100%] max-max-[1400px] grid  grid-cols-[repeat(${
          cartContents.length
        },500px)] max-lg:grid-cols-[repeat(11,300px)] overflow-auto slideShow">
            ${cartContents
              .map(
                (items) => `
                <li class="py-[20px] slide-list px-2">
                    <a class="" href=""> 
                        <figure class="">
                            <img src="${items.cartImg}" alt="">
                            <div class="flex flex-col max-w-[270px] gap-2 p-4">
                            <h3 class="text-[#000000] text-[16px] tracking-wide" >${items.cartTitle}</h3>
                            <h3 class="text-[#3e3c36] text-[16px] tracking-wide" >${items.cartDetail}</h3>
                            <h3 class="text-[#000000] text-[16px] tracking-wide" >${items.cartDes}</h3>
                            <p> ${items.cartPrice} </p>
                            </div>
                        </figure>
                    </a>
                </li>
            `
              )
              .join("")}
        </ul>
               
    `;
};

class CartSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = CartSliderContainer(data);
  }
}

customElements.define("cart-slider-component", CartSlider);
