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
const navSearchover = document.querySelector('#search-hover');
const navSearchBtnHoverClose = document.querySelector('#nav-search-btn-hover-close');

navSearchBtn.addEventListener('click', (event) => {
  const value = event.currentTarget.getAttribute('data-click');
  if (value === 'close') {
    navSearchover.setAttribute('data-click', !value);
  }
});

navSearchBtnHoverClose.addEventListener('click', () => {
  navSearchover.setAttribute('data-click', 'close');
});

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

// TABS SECTION START

const tabBtns = document.querySelectorAll('.tab-btn-list button');
const tabContents = document.querySelectorAll('.tab-contents .tab-content');

tabBtns.forEach((item) => {
  item.addEventListener('click', () => {
    tabBtns.forEach((t) => {
      t.setAttribute(
        'class',
        'md:text-[20px] text-base  font-normal leading-[22px] py-6 w-[33%] text-[#000] text-opacity-[60%] border-b-2 border-b-transparent hover:text-opacity-80'
      );
    });
    item.setAttribute(
      'class',
      'md:text-[20px] text-base  font-medium leading-[22px] py-6 w-[33%] text-[#000] text-opacity-100 border-b-2 border-[#000]'
    );
    tabContents.forEach((tc) => {
      tc.setAttribute('class', 'hidden tab-content');
    });
    const value = item.getAttribute('data-value');
    document.getElementById(value).setAttribute('class', 'tab-content ');
  });
});

//    item.setAttribute("class", "text-[20px]  font-normal leading-[22px] w-[414px] text-[#000] text-opacity-[60%] border-b-2 border-b-transparent hover:text-[#000] hover:text-opacity-100 hover:border-b-2 hover:border-[#000]");

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
