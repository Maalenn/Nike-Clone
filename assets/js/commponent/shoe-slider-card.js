import {shoeSliderData} from '../data/shoe-slider-data.js'

const dataSources = {
    "slider-shoe-data": shoeSliderData
}

const ShoeSliderContainer = (shoeContents) =>{
    return `
        <section class="scroll-main mb-40">
            <div class="scroll-info container">
                <div class="scroll-des">
                    <h1>SHOP BY CLASSICS</h1>
                </div>
                <div class="scroll-icon max-[767px]:hidden">
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
            <div class="slideShow shoe-main container">
                ${shoeContents.map((items)=>`
                    <div class="slide-list imgShoe">
                        <img src="${items}" alt="" />
                    </div>
                `).join("")}
            </div>
        </section>
    `
}

class ShoeSlider extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource]
        this.innerHTML = ShoeSliderContainer(data);
    }
}

customElements.define('shoe-slider-component', ShoeSlider)