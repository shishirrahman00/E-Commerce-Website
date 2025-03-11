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
    controls: true,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
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
