const pushContainer = () =>{
    return `
        <div class="scroll-icon max-[767px]:hidden">
            <button class="link-arrow" onclick="pushArrow(0,-1)">
                <div class="circle-icon icon-left">
                <img src="../assets/Image/arrow-left.svg" alt="Left Arrow" />
                </div>
            </button>
            <button class="link-arrow" onclick="pushArrow(0,1)">
                <div class="circle-icon icon-right">
                <img src="../assets/Image/arrow-right.svg" alt="Right Arrow" />
                </div>
            </button>
        </div>
    `
}

class PushBtn extends HTMLElement{
    connectedCallback(){
        this.innerHTML = pushContainer();
    }
}

customElements.define("push-btn-component", PushBtn)