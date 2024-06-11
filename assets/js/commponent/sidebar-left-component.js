const SidebarLeftContainer = () => {
  return `
    <section class="w-[300px] shrink-0 px-20  max-md:hidden ">
        <div class="flex items-center gap-7 pt-10 mb-10">
            <a href="">
                Pick Up Today
            </a>
            <button class="relative w-[40px] h-[24px] rounded-[15px] bg-[#908f8f] cursor-pointer">
                <div class="absolute w-[20px] h-[20px] rounded-[100%] top-1 left-1 bg-[white]"></div>
            </button>
        </div>
    
        <div class="flex flex-col  px-1 gap-3 pb-16">
            <a class="" href="">Graphic T-Shirts</a>
            <a class="" href="">Long Sleeve Shirts</a>
            <a class="" href="">Short Sleeve Shirts</a>
            <a class="" href="">Sleeveless & Tank Tops</a>
            <a class="" href="">Jerseys</a>
            <a class="" href="">Polos</a>
            <a class="" href="">Button-down & Flannels</a>
        </div>
        <ul class="flex flex-col gap-5">
            <li  class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <button>Sale & Offers</button>
                    <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                    </div>
                    <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                    </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in ">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[30px] h-[30px]">
                    <label for="" class="ms-2 text-[16px] mt-2">Mother's Day Sales: Extra 25% Off</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Price in Bag</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Sale</label>
                </div>
                
                </section>
                
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Gender (1) </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">Men</label>
                </div>
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">Women</label>
                </div>
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">Unisex</label>
                </div>
            </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-5">
                <div id="accordion-btn" class=" flex justify-between ">
                <a href="">Color</a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-[4.5rem] ">
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[black]"></div>
                    <p class="text-[13px]">Black</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#3aa0e4]"></div>
                    <p class="text-[13px]">Blue</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[rgba(98,42,42,0.82)]"></div>
                    <p class="text-[13px]">Brown</p>
                    </div>
                </div>
                <div class="flex gap-16 ">
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#79cd79]"></div>
                    <p class="text-[13px]">Green</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[gray]"></div>
                    <p class="text-[13px]">Gray</p>
                    </div>
                    <div class="flex flex-col  items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#f4744a]"></div>
                    <p class="text-[13px]">Orange</p>
                    </div>
                </div>
                <div class="flex gap-16 ">
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#d87081]"></div>
                    <p class="text-[13px]">Pink</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#8f3b83]"></div>
                    <p class="text-[13px]">Purple</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#f13d3d]"></div>
                    <p class="text-[13px]">Red</p>
                    </div>
                </div>
                <div class="flex gap-16 ">
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[white] border-[1px]"></div>
                    <p class="text-[13px]">White</p>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                    <div class="w-[30px] h-[30px] rounded-[100%] top-1 left-1 bg-[#fff200]"></div>
                    <p class="text-[13px]">Yellow</p>
                    </div>
                    
                </div>
            </section>
        
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Shop by Price </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Big & Tall</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Plus Size</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Maternity</label>
                </div>
            </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">More Sizes </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                    <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Zenvy</label>
                    </div>
                    <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Element</label>
                    </div>
                    <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Nike One</label>
                    </div>
                    <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Nike Indy</label>
                    </div>
                    <div class="flex items-center gap-2">
                    <i class="text-[12px] fa-solid fa-plus"></i>
                    <p>More</p>
                    </div>
            </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Collections </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">$0 - $25</label>
                </div>
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">$25 - $50</label>
                </div>
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">$50 - $100</label>
                </div>
                <div class="flex gap-2">
                <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                <label for="" class="ms-2 text-[16px] ">$100 - $150</label>
                </div>
                <div class="flex items-center gap-2">
                <i class="text-[12px] fa-solid fa-plus"></i>
                <p>More</p>
                </div>
                </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Fleece </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Tech Fleece</label>
                </div>
            </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Sports & Activies </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Lifestyle</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Running</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Soccer</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Training & Gym</label>
                </div>
                <div class="flex items-center gap-2">
                    <i class="text-[12px] fa-solid fa-plus"></i>
                    <p>More</p>
                </div>
            </section>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Brand</a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Nike Sportwear</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Jordan</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Converse</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">NikeLab</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">ACG</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Nike Pro</label>
                </div>
                <div class="flex items-center gap-2">
                    <i class="text-[12px] fa-solid fa-plus"></i>
                    <p>More</p>
                </div>
                </section>
                
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Features </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Side Vents</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">2-Way Zipper</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">4-Way Stretch</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Longline</label>
                </div>
                <div class="flex items-center gap-2">
                    <i class="text-[12px] fa-solid fa-plus"></i>
                    <p>More</p>
                </div>
                </section>
                
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Technology </a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Dri-FIT</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Dri-FIT ADV</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Storm-FIT</label>
                </div>
                <div class="flex gap-2">
                    <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Therma-FIT</label>
                </div>
            </li>
            <li class="flex flex-col pt-5 py-2 border-[#d6d6d6] border-t-[1px] gap-3">
                <div id="accordion-btn" class="flex justify-between ">
                <a href="">Fit</a>
                <div id="plus-icon">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                </div>
                <div id="close-icon" class="hidden">
                    <svg class=" fill-black " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>
                </div>
                </div>
                <section id="accordion-dropdown" class="max-h-0 overflow-hidden transition-all duration-500 ease-in">
                    <div class="flex gap-2">
                        <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                        <label for="" class="ms-2 text-[16px] ">Oversized</label>
                    </div>
                        <div class="flex gap-2">
                        <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                    <label for="" class="ms-2 text-[16px] ">Loose</label>
                    </div>
                    <div class="flex gap-2">
                        <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                        <label for="" class="ms-2 text-[16px] ">Standard</label>
                    </div>
                    <div class="flex gap-2">
                        <input id="checkbox" type="checkbox" value="" class="w-[20px] h-[20px] ">
                        <label for="" class="ms-2 text-[16px] ">Slim</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="text-[12px] fa-solid fa-plus"></i>
                        <p>More</p>
                    </div>
                </section>
            </li>
        </ul>
    </section>
    `;
};

class SidebarLeft extends HTMLElement {
  connectedCallback() {
    this.innerHTML = SidebarLeftContainer();
  }
}

customElements.define("sidebar-left-component", SidebarLeft);

// function arrow drop and up
let accordionBtn = document.querySelectorAll("#accordion-btn");
let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
let plusIcon = document.querySelectorAll("#plus-icon");
let closeIcon = document.querySelectorAll("#close-icon");
accordionBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    accordionDropdown[i].classList.toggle("max-h-[300px]");
    plusIcon[i].classList.toggle("hidden");
    closeIcon[i].classList.toggle("hidden");
  });
});
