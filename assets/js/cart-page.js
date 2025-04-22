// --------------------OFFER SECTION START--------------

const offerSignUp = document.querySelector('.offer-sign-up');
const offerBtnClose = document.querySelector('.offer-close-btn');

offerBtnClose.addEventListener('click', () => {
  offerSignUp.classList.add('hidden');
});

// --------------------OFFER SECTION END----------------

// -----------------------NAV MENU START

const navMenuBtn = document.querySelector('.nav-menu-btn');
const navMenu = document.querySelector('#nav-menu');
const navMenuSlider = document.querySelector('#nav-menu-slider');
const navMenuSliderCloseBtn = document.querySelector('#nav-menu-slider-close-btn');

navMenuBtn.addEventListener('click', (event) => {
  const value = event.currentTarget.getAttribute('data-state');
  if (value === 'close') {
    navMenuSlider.setAttribute('data-state', 'open');
    document.body.classList.add('overflow-hidden');
  }
});

navMenuSliderCloseBtn.addEventListener('click', () => {
  navMenuSlider.setAttribute('data-state', 'close');
  document.body.classList.remove('overflow-hidden');
});

// NAV MENU SEARCHBOX START

const navSearchBtn = document.querySelector('.nav-search-btn');
const navSearchover = document.querySelector('.search-hover');

// const navSearchBtnHoverClose = document.querySelector('#nav-search-btn-hover-close');

navSearchBtn.addEventListener('click', (event) => {
  navSearchover.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!navSearchover.contains(event.target) && !navSearchBtn.contains(event.target)) {
    navSearchover.classList.add('hidden');
  }
});

// navSearchBtnHoverClose.addEventListener('click', () => {
//   navSearchover.setAttribute('data-click', 'close');
// });

// const navSearchBtnHover = document.querySelector('#nav-search-btn-hover');

// navSearchBtn.addEventListener('click', (event) => {
//   const value = event.currentTarget.getAttribute('data-click');
//   if (value === 'close') {
//     navSearchBtnHover.setAttribute('data-click', 'open');
//     //  navBar.classList.add("hidden")
//   }
// });

// NAV MENU SEARCHBOX END

//------------------------- NAV MENU END

//----------------------INCREASE DECREASE COUNTING START
const quantityWrapper = document.querySelectorAll('.quantity-wrapper');

quantityWrapper.forEach((item) => {
  const minusValue = item.querySelector('[data-value=minus]');
  const plusValue = item.querySelector('[data-value=plus]');
  const inputValue = item.querySelector('.quantity');

  plusValue.addEventListener('click', () => {
    let value = Number(inputValue.value);
    value++;
    inputValue.value = value;
  });

  minusValue.addEventListener('click', () => {
    let value = Number(inputValue.value);
    if (value > 0) {
      value--;
      inputValue.value = value;
    }
  });
});

//----------------------INCREASE DECREASE COUNTING END
