import {NewFeatureData} from "../data/new-feature-card-data.js";

const dataSources = {
  "new-feature-data": NewFeatureData,
};

const NewFeatureCardContainer = (newFeatureContents) => {
  return `
    <section class="flex flex-col mx-auto">
        <ul class="grid grid-cols-3 gap-7 max-md:grid-cols-2">
            ${newFeatureContents.map((items)=> `
                <li class="max-w-[500px]"> 
                    <a href="">
                        <img src="${items.productImg}" alt="">
                        <div class="flex flex-col max-w-[270px] gap-2 p-4">
                            <h3 class="text-[#8f3030] text-[16px] tracking-wide" >${items.productTitle}</h3>
                            <h3 class="text-[#000000] text-[16px] tracking-wide" >${items.productDetail}</h3>
                            <h3 class="text-[#b5b1a9] text-[16px] tracking-wide" >${items.productDes}</h3>
                            <p> ${items.productPrice} </p>
                        </div>
                    </a>
                </li>
            `).join("")}  
        </ul>
    </section>
    `;
};

class ProductCard extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = NewFeatureCardContainer(data);
  }
}

customElements.define("newfeature-card-component", ProductCard);
