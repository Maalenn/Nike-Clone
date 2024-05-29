import {cartSliderData} from '../data/cart-slider-data.js'

const dataSources =
{
    "cart-slider-data": cartSliderData
}

const CartSliderContainer = (cartContents) =>{
    return `
        <section class="flex justify-center">
        <section class="max-w-[55.5%] max-lg:max-w-[80%] h-full">
            <div class="scroll-info container">
                <div class="">
                    <h1 class="text-[30px]">You Might Also link</h1>
                </div>
                <div class="scroll-icon">
                    <button href="" class="link-arrow" onclick="pushArrow(-1)">
                    <div class="circle-icon icon-left">
                        <img src="../assets/Image/arrow-left.svg" alt="" />
                    </div>
                    </button>
                    <button href="" class="link-arrow" onclick="pushArrow(1)">
                    <div class="circle-icon icon-right">
                        <img src="../assets/Image/arrow-right.svg" alt="" />
                    </div>
                    </button>
                </div>
                </div>
                <ul class="w-[100%] max-max-[1400px] grid  grid-cols-[repeat(${cartContents.length},500px)] max-lg:grid-cols-[repeat(11,300px)] overflow-auto slideShow">
                    ${cartContents.map(items => `
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
                    `).join("")}
                </ul>
                </section>
            </section>
    `
}

class CartSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = CartSliderContainer(data);
  }
}

customElements.define("cart-slider-component", CartSlider);