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

// -----------------------CATEGORY PAGE CATEGORY BTN START-----------------------

const categoryBtn = document.querySelector('.category-btn');
const categoryBtnSlider = document.querySelector('#category-btn-slider');
const categoryBtnSliderClose = document.querySelector('.category-btn-slider-close');

categoryBtn.addEventListener('click', (event) => {
  const value = event.currentTarget.getAttribute('data-click');

  if (value === 'close') {
    categoryBtnSlider.setAttribute('data-click', 'open');
    document.body.classList.add('overflow-hidden');
  }
});

categoryBtnSliderClose.addEventListener('click', () => {
  categoryBtnSlider.setAttribute('data-click', 'close');
  document.body.classList.remove('overflow-hidden');
});

// SELECT COLOR SECTION START

const colors = document.querySelectorAll('.colors');

colors.forEach((item) => {
  item.addEventListener('click', (event) => {
    const value = event.currentTarget.getAttribute('data-color');

    colors.forEach((c) => {
      c.innerHTML = '';
    });

    item.innerHTML = `<span><i class="fa-solid fa-check"></i></span>`;
    if (value === 'white' || value === 'FFFFFF' || value === 'ffffff' || value === 'fff' || value === 'FFF') {
      item.classList.add('text-black');
    } else {
      item.classList.add('text-white');
    }
  });
});

// SELECT COLOR SECTION END

const hideBtn = document.querySelectorAll('.hide-btn');
const priceContent = document.querySelector('.price-content');
const dressingContent = document.querySelector('.dressing-content');
const sizeContent = document.querySelector('.size-content');

hideBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    const value = event.currentTarget.getAttribute('data-hide') === 'false';
    event.currentTarget.setAttribute('data-hide', value);
  });
});

// --------------------------CATEGORY PAGE CATEGORY BTN END--------------------
