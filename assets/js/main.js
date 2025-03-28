const mySlider = document.querySelector(".my-slider");
const Slider = document.querySelector(".slider");
const testimonialSlider = document.querySelector(".testimonial-slider");

if (mySlider) {
  tns({
    container: mySlider,
    slideBy: "page",
    mouseDrag: true,
    controls: false,
    gutter: 25,
    responsive: {
      425: {
        items: 1.6,
        gutter: 20,
      },
      768: {
        items: 2.6,
      },
      1024: {
        items: 3.6,
      },
      1440: {
        items: 4,
      },
    },
  });
}

if (Slider) {
  tns({
    container: Slider,
    slideBy: "page",
    mouseDrag: true,
    controls: false,
    gutter: 25,
    responsive: {
      425: {
        items: 1.6,
        gutter: 20,
      },
      768: {
        items: 2.6,
      },
      1024: {
        items: 3.6,
      },
      1440: {
        items: 4,
      },
    },
  });
}
if (testimonialSlider) {
  tns({
    container: testimonialSlider,
    slideBy: "page",
    controls: false,
    mouseDrag:true,
    // controlsContainer: "#controls",
    // prevButton: ".previous",
    // nextButton: ".next",
    gutter: 25,
    responsive: {
      425: {
        items: 1,
        gutter: 20,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  });
}


// -----------------------NAV MENU START

const navMenuBtn= document.querySelector(".nav-menu-btn")
const navMenu= document.querySelector("#nav-menu")
const navMenuSlider= document.querySelector("#nav-menu-slider")
const navMenuSliderCloseBtn= document.querySelector("#nav-menu-slider-close-btn")


navMenuBtn.addEventListener("click",(event)=>{
  const value = event.currentTarget.getAttribute("data-state")
 if(value==="close"){
  navMenuSlider.setAttribute("data-state","open")
 }
})

navMenuSliderCloseBtn.addEventListener("click",()=>{
  navMenuSlider.setAttribute("data-state","close")
})

// NAV MENU SEARCHBOX START

const navSearchBtn=document.querySelector(".nav-search-btn")
const navSearchBtnHover=document.querySelector(".nav-search-btn-hover")

// navSearchBtn.addEventListener("click",(event)=>{
//   const value = event.currentTarget.getAttribute("data-click")
// console.log(value)
// navSearchBtn.classList.add("hidden")
// navSearchBtnHover.classList.remove("hidden")
// })

// NAV MENU SEARCHBOX END

//------------------------- NAV MENU END



// TABS SECTION START

const tabBtns = document.querySelectorAll(".tab-btn-list button");
const tabContents = document.querySelectorAll(".tab-contents .tab-content");

tabBtns.forEach((item) => {
  item.addEventListener("click", () => {
    tabBtns.forEach((t) => {
      t.setAttribute("class", "md:text-[20px] text-base font-satoshi font-normal leading-[22px] py-6 w-[131px]  md:w-[256px] lg:w-[414px] text-[#000] text-opacity-[60%] border-b-2 border-b-transparent hover:text-opacity-80");
    });
    item.setAttribute("class", "md:text-[20px] text-base font-satoshi font-medium leading-[22px] py-6 w-[131px]  md:w-[256px] lg:w-[414px] text-[#000] text-opacity-100 border-b-2 border-[#000]");
    tabContents.forEach((tc) => {
      tc.setAttribute("class", "hidden tab-content");
    });
    const value = item.getAttribute("data-value");
    document
      .getElementById(value)
      .setAttribute("class", "tab-content ");
  });
});

//    item.setAttribute("class", "text-[20px] font-satoshi font-normal leading-[22px] w-[414px] text-[#000] text-opacity-[60%] border-b-2 border-b-transparent hover:text-[#000] hover:text-opacity-100 hover:border-b-2 hover:border-[#000]");

// TABS SECTION END


// CATEGORY PAGE CATEGORY BTN START

const categoryBtn=document.querySelector(".category-btn")
const categoryBtnSlider=document.querySelector("#category-btn-slider")
const categoryBtnSliderClose=document.querySelector(".category-btn-slider-close")

categoryBtn.addEventListener("click",(event)=>{
  const value = event.currentTarget.getAttribute("data-click")
  
 if(value==="close"){
  categoryBtnSlider.setAttribute("data-click","open")
  document.body.classList.add("overflow-hidden")
 }
})


categoryBtnSliderClose.addEventListener("click",()=>{
  categoryBtnSlider.setAttribute("data-click","close")
  document.body.classList.remove("overflow-hidden")
})


// CATEGORY PAGE CATEGORY BTN END