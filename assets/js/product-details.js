
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


// ----------------SLICK SLIDER SYNCING SECTION START----------------






// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav',
//   });

//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     vertical: true,
//     asNavFor: '.slider-for',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
  
//   });





// ----------------SLICK SLIDER SYNCING SECTION END------------------




// SELECT COLOR SECTION START

// console.log()

const colors=document.querySelectorAll(".colors")


colors.forEach((item)=>{
 item.addEventListener("click",(event)=>{

  colors.forEach((c)=>{
    c.innerHTML=""
})
  
item.innerHTML=`<span><i class="fa-solid fa-check"></i></span>`

item.classList.add("text-[22px]", "text-white", "flex", "items-center", "justify-center")




})
})


// SELECT COLOR SECTION END





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


// SLIDER SECTION START

const mySlider = document.querySelector(".my-slider");

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

// SLIDER SECTION END