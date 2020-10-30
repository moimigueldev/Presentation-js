import { forward, backward } from '../variables/navigation';

let currentSlide = 0;
const slides = [];
const navigation = [];

Element.prototype.insertChildAtIndex = function (child, index) {
  if (!index) index = 0;
  if (index >= this.children.length) {
    this.appendChild(child);
  } else {
    this.insertBefore(child, this.children[index]);
  }
};

export const addEventListenersToNavigation = (container) => {
  console.log('hello');
  const forwardSvgs = document.getElementsByClassName(
    'presentation-forward-arrow-container'
  );

  const backwardSvgs = document.getElementsByClassName(
    'presentation-back-arrow-container'
  );

  for (let index = 0; index < forwardSvgs.length; index++) {
    forwardSvgs[index].addEventListener('click', () => {
      goToNextSlide(container);
    });

    backwardSvgs[index].addEventListener('click', () => {
      goToPrevSlide(container);
    });
  }
};

// FORWARD
const goToNextSlide = (container) => {
  console.log('going to nextslide');
  container.scrollLeft += container.clientWidth;
  container.style.scrollBehavior = 'auto';
  //   let child = container.childrenp[0].clone(true);
  setTimeout(() => {
    container.appendChild(container.children[0].cloneNode(true));

    for (let index = 0; index < container.children.length; index++) {
      console.log('child', container.children[index] === container.children[0]);
      if (container.children[index] === container.children[0]) {
        console.log('index', index);
      }
    }

    reAttachEventListeners(container);

    container.removeChild(container.children[0]);
    container.scrollLeft = 0;

    container.style.scrollBehavior = 'smooth';
  }, 600);
};

const reAttachEventListeners = (container) => {
  let lastChild = container.children[container.children.length - 1];
  for (let index = 0; index < lastChild.children.length; index++) {
    if (
      lastChild.children[index].classList[0] ===
      'presentation-forward-arrow-container'
    ) {
      lastChild.children[index].addEventListener('click', () => {
        goToNextSlide(container);
      });
    }

    if (
      lastChild.children[index].classList[0] ===
      'presentation-back-arrow-container'
    ) {
      lastChild.children[index].addEventListener('click', () => {
        goToPrevSlide(container);
      });
    }
  }
};

// BACKWARD
const goToPrevSlide = (container) => {
  console.log('prevslide', container.scrollLeft);

  if (container.scrollLeft === 0) {
    container.prepend(container.children[container.children.length - 1]);
    container.style.scrollBehavior = 'auto';
    container.scrollLeft = container.clientWidth;
    container.style.scrollBehavior = 'smooth';
  }
  //   container.style.scrollBehavior = 'smooth';

  container.scrollLeft -= container.clientWidth;

  //   container.style.scrollBehavior = 'auto';
};

// ADDS NAVIGATION ICONS TO EACH SLIDE
export const addNavigationSVGs = (el) => {
  el.appendChild(forward.cloneNode(true));
  el.appendChild(backward.cloneNode(true));
};

export const createScrollValues = (container) => {
  let scrollWidth = container.scrollWidth;
  let widthPerSlide = scrollWidth / slides.length;
  slides.forEach((el, i) => {
    if (i === 0) {
      navigation.push(0);
    } else {
      navigation.push(widthPerSlide);
      widthPerSlide *= 2;
    }
  });
  addEventListenersToNavigation(container, navigation, slides);
};

export const addToSlides = (el) => {
  slides.push(el);
};
