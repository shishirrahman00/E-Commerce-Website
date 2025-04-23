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

// ----------------SLICK SLIDER SYNCING SECTION START----------------

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,

//   fade: true,
//   asNavFor: '.slider-nav',
// });

// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   vertical: true,
//   asNavFor: '.slider-for',
//   dots: false,
//   centerMode: true,
//   focusOnSelect: true,
// });

// ----------------SLICK SLIDER SYNCING SECTION END------------------

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

//----------------------INCREASE DECREASE COUNTING START

const minusValue = document.querySelector('[data-value=minus]');
const plusValue = document.querySelector('[data-value=plus]');
const inputValue = document.querySelector('.quantity');

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
//----------------------INCREASE DECREASE COUNTING END

// TABS SECTION START

const tabBtns = document.querySelectorAll('.tab-btn-list button');
const tabContents = document.querySelectorAll('.tab-contents .tab-content');

tabBtns.forEach((item) => {
  item.addEventListener('click', () => {
    tabBtns.forEach((t) => {
      t.setAttribute(
        'class',
        'md:text-[20px] text-base font-satoshi  leading-[22px] md:py-6 py-5 w-full text-[#000] text-opacity-[60%] border-b-2 border-b-transparent hover:text-opacity-80'
      );
    });
    item.setAttribute(
      'class',
      'md:text-[20px] text-base font-satoshiMedium  leading-[22px] md:py-6 py-5 w-full text-[#000] text-opacity-100 border-b-2 border-[#000]'
    );

    tabContents.forEach((tc) => {
      tc.setAttribute('class', 'hidden tab-content');
    });
    const value = item.getAttribute('data-value');
    document.getElementById(value).setAttribute('class', 'tab-content ');
  });
});

// TABS SECTION END

// SLIDER SECTION START

const mySlider = document.querySelector('.my-slider');

if (mySlider) {
  tns({
    container: mySlider,
    slideBy: 'page',
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
