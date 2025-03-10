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
