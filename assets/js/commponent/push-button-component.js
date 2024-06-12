const PushContainer = (indexBtn) => {
  return `
        <div class="scroll-icon max-[767px]:hidden">
            <button class="link-arrow" onclick="pushArrow(${Number(indexBtn)},-1)">
                <div class="circle-icon icon-left">
                <img src="../assets/Image/arrow-left.svg" alt="Left Arrow" />
                </div>
            </button>
            <button class="link-arrow" onclick="pushArrow(${Number(indexBtn)},1)">
                <div class="circle-icon icon-right">
                <img src="../assets/Image/arrow-right.svg" alt="Right Arrow" />
                </div>
            </button>
        </div>
    `;
};

class PushBtn extends HTMLElement {
  connectedCallback() {
    const indexBtn = this.getAttribute('index-btn')
    this.innerHTML = PushContainer(indexBtn);
  }
}

customElements.define("push-btn-component", PushBtn);
