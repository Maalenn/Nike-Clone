import {FeelSculptedData} from '../data/feel-sculpted-data.js'

const dataSources = {
    'feel-data': FeelSculptedData
}

const FeelContainer = (feelContents) =>{
    return `
        <section class="feature-main">
            ${feelContents.map((items)=>`
                <section class="">
                    <div class="">
                        <div class="feel-section">
                            <div class="imgFeature">
                                <img src="${items.imgFeel}" alt="" />
                            </div>
                            <div class="infoFeel">
                                <h3>${items.titleFeel}</h3>
                                <h1>${items.desFeel}</h1>
                                <button class="btn">Shop</button>
                            </div>
                        </div>
                    </section>
            `).join("")}
        </section>
    `
}

class FeelSculpted extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute("data-source");
        const data = dataSources[dataSource];
        this.innerHTML = FeelContainer(data);
    } 
}

customElements.define("feel-component", FeelSculpted)

