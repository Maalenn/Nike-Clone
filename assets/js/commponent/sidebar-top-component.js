const SideLeftContainer = () => {
  return `
    <section class="w-[100%]">
        <div>
            <div class="px-20">
                <ul class="flex gap-5">
                    <li><a class="text-[1.4rem]" href="">Clothing </a></li>
                    <span class="text-[1.4rem]">/</span>
                    <li><a class="text-[1.4rem]" href=""> Tops & T-Shirts</a></li>
                </ul>
            </div>
        </div>
        <section class="flex max-md:flex-col px-20 py-10 justify-between">
            <div class="flex">
                <h1 class="text-[2.4rem] max-md:text-[18px]">Womens Tops & T-Shirts</h1>
                <span class="max-md:hidden text-[2.4rem] pl-5"> (1232) </span>
            </div>

            <section class="hidden max-md:block max-w-[1280px] min-w-[300px] h-full max-lg:w-[100%]">
                <ul class="w-[100%] grid  max-md:grid-cols-[repeat(34,300px)] overflow-auto no-scrollbar">
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Graphic T-Shirts
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Long Sleeve Shirts
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Short Sleeve Shirts
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Sleeveless & Tank Tops
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Sleeveless & Tank Tops
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Jerseys
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Polos
                        </a>
                    </li>
                    <li class="py-[20px]">
                        <a class="text-[18px]" href=""> 
                        Button-down & Flannels
                        </a>
                    </li>
                </ul>
            </section>
            <section class="hidden max-md:py-5 max-md:flex max-md:border-gray max-md:border-y-[1px] justify-between items-center gap-7 pt-10 mb-10">
                <a class="text-[18px]" href="">
                    Pick Up Today
                </a>
                <button class="relative w-[70px] h-[40px] rounded-[30px] bg-[#dcdbdb] cursor-pointer">
                    <div class="absolute w-[36px] h-[36px] rounded-[100%] top-1 left-1 bg-[white]"></div>
                </button>
            </section>
            <section class="hidden max-md:flex items-center justify-between">
                <div class="">
                    <h3 class="text-[#9e9b9b]">1232 Results </h3>
                </div>
                <ul class="flex border-[#acaaaa] border-[1px] pl-3 py-1 rounded-[20px] text-center" >
                    <li ><a class="text-[1.75rem] pr-5" href="">Filter</a></li>
                    <li class="pr-8">
                        <a href="">
                        <svg 
                        aria-hidden="true"
                        class="icon-filter-ds"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                    >
                        <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M21 8.25H10m-5.25 0H3"
                        ></path>
                        <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clip-rule="evenodd"
                        ></path>
                        <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M3 15.75h10.75m5 0H21"
                        ></path>
                        <path
                        stroke="currentColor"
                        stroke-width="1.5"
                        d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clip-rule="evenodd"
                        ></path>
                    </svg></a>
                    </li>
                </ul>
            </section>
            
            <ul class="max-md:hidden pt-5 flex">
                <li ><a class="text-[1.75rem] pr-5" href="">Hide Filter</a></li>
                <li class="pr-8">
                    <a href="">
                        <svg 
                        aria-hidden="true"
                        class="icon-filter-ds"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                        >
                        <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            d="M21 8.25H10m-5.25 0H3"
                        ></path>
                        <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                            clip-rule="evenodd"
                        ></path>
                        <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            d="M3 15.75h10.75m5 0H21"
                        ></path>
                        <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                            clip-rule="evenodd"
                        ></path>
                        </svg>
                    </a>
                </li>
                <li><a class="text-[1.75rem] pr-2" href="">Sort By</a></li>
                <li> <a href=""> <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg></a>
                </li>
            </ul>
            </section>
        </section>
    `;
};

class SideBarTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = SideLeftContainer();
  }
}

customElements.define("sidebar-top-component", SideBarTop);
