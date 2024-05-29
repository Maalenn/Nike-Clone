const aboveFooterContainer = () =>{
    return `
    <section class="above-footer container-above blur-background">
        <ul class="above-menu">
            <h5>Feature</h5>
            <ul>
                <li class="above-list">
                    <a href="">Air Force 1</a>
                </li>
                <li class="above-list">
                    <a href="">Jordan 1</a>
                </li>
                <li class="above-list">
                    <a href="">Metcon</a>
                </li>
                <li class="above-list">
                    <a href="">Air Max 270</a>
                </li>
            </ul>
        </ul>
        <ul class="above-menu">
            <h5>Shoes</h5>
            <ul>
                <li class="above-list">
                    <a href="">All Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Jordan Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Running Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Basketball Shoes</a>
                </li>
            </ul>
        </ul>
        <ul class="above-menu">
            <h5>Clothing</h5>
            <ul>
                <li class="above-list">
                    <a href="">All Clothing</a>
                </li>
                <li class="above-list">
                    <a href="">Tops & T-shirts</a>
                </li>
                <li class="above-list">
                    <a href="">Shorts</a>
                </li>
                <li class="above-list">
                    <a href="">Hoodies & Pollovers</a>
                </li>
            </ul>
        </ul>
        <ul class="above-menu">
            <h5>Kids</h5>
            <ul>
                <li class="above-list">
                    <a href="">Infant & Toddler Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Kids Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Kids Basketball Shoes</a>
                </li>
                <li class="above-list">
                    <a href="">Kid Running Shoes</a>
                </li>
            </ul>
        </ul>
    </section>
    `
}

class AboveFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = aboveFooterContainer();
    }
}

customElements.define("above-footer-component", AboveFooter)