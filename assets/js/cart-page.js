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
const navSearchoverSearchBox = document.querySelector('.search-box');

navSearchBtn.addEventListener('click', (event) => {
  const value = event.currentTarget.getAttribute('data-click');
  navSearchover.setAttribute('data-click', 'open');
});

document.addEventListener('click', (event) => {
  if (!navSearchoverSearchBox.contains(event.target) && !navSearchBtn.contains(event.target)) {
    navSearchover.setAttribute('data-click', 'close');
  }
});

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

// data-[click=close]:opacity-0 data-[click=close]:invisible transition-all ease-in-out -translate-x-full data-[click=open]:translate-x-0 duration-500

//----------------------INCREASE DECREASE COUNTING END
