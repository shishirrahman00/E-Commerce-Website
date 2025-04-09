// --------------------OFFER SECTION START--------------


const offerSignUp=document.querySelector(".offer-sign-up")
const offerBtnClose=document.querySelector(".offer-close-btn")

offerBtnClose.addEventListener("click",()=>{
offerSignUp.classList.add("hidden")
})




// --------------------OFFER SECTION END----------------

const Slider = document.querySelector(".slider");
const testimonialSlider = document.querySelector(".testimonial-slider");



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
  document.body.classList.add("overflow-hidden")
 }
})

navMenuSliderCloseBtn.addEventListener("click",()=>{
  navMenuSlider.setAttribute("data-state","close")
  document.body.classList.remove("overflow-hidden")
})

// NAV MENU SEARCHBOX START

const navBar=document.querySelector("#navbar")
const navSearchBtn=document.querySelector(".nav-search-btn")


const navSearchBtnHover=document.querySelector("#nav-search-btn-hover")
const navSearchBtnHoverClose=document.querySelector("#nav-search-btn-hover-close")



navSearchBtn.addEventListener("click",(event)=>{
  const value = event.currentTarget.getAttribute("data-click")
  if(value==="close"){
   navSearchBtnHover.setAttribute("data-click","open")
  //  navBar.classList.add("hidden")
   

   }

})

navSearchBtnHoverClose.addEventListener("click",(event)=>{
  navSearchBtnHover.setAttribute("data-click","close")
  // if (!navSearchBtnHoverClose.contains(event.target)) {
  //   navSearchBtnHover.setAttribute("data-click","close")
  // }
  

})

// xl:gap-x-6 lg:gap-x-4 md:gap-x-2.5 gap-x-4

// NAV MENU SEARCHBOX END

//------------------------- NAV MENU END





