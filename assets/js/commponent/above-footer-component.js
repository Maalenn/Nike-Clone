import { AboveFooterData } from "../data/above-footer-data.js";
const dataSources = {
    'above-footer-data': AboveFooterData
}

const AboveFooterContainer = (aboveFooterContents) => {
    console.log(aboveFooterContents)
    return `
        <section class="above-footer container-above blur-background">
        ${aboveFooterContents.map((items) =>`
            <ul class="above-menu">
                <li>
                    <h5 >${items.menuTitle}</h5>
                    <ul class="hidden md:block">
                        ${items.menuList.map((item) => `
                            <li class="above-list">
                                <a href="#">${item}</a>
                            </li>
                        `).join('')}
                    </ul>
                </li>
             
            </ul>
             `).join('')}
        </section>
    `;
};


class AboveFooter extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute("data-source");
        const data = dataSources[dataSource];
        this.innerHTML = AboveFooterContainer(data);
    }
}

customElements.define("above-footer-component", AboveFooter)


