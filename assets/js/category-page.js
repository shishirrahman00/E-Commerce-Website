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