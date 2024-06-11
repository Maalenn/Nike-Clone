import {ConnectData} from "../data/connect-through-slider-data.js";

const dataSources = {
  "connect-data": ConnectData,
};

const ConnectedContainer = (connectedContents) => {
  return `
  <section class="flex justify-center ">
    <section class="max-w-[91%] h-full pb-20">
        <div class="scroll-des">
        <h1> Connect Throungh Membership </h1>
        </div> 
        <ul class="w-[100%] grid grid-cols-4 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 container">
          ${connectedContents
            .map(
              (items) => `
          <li class="py-[20px]">
              <a class="" href=""> 
                  <div class="">
                  <div>
                      <img src="${items.imgConnect}" alt="" />
                  </div>
                  <div class="text-center text-black flex flex-col gap-10 px-5">
                      <h3 class="text-[24px] font-bold">${items.titleConnect}</h3>
                      <h1 class="text-[20px] mt-5">${items.desConnect}</h1>
                      <a class="text-[1.7rem] font-bold border-b-[2px] border-black w-[70px] pb-1 mx-auto" href="">Explore</a>
                  </div>
                  </div>
              </a>
          </li>
          `
            )
            .join("")}
        </ul>
        </section>
    </section>
    `;
};

class ConnectThrough extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = ConnectedContainer(data);
  }
}

customElements.define("connected-component", ConnectThrough);
