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

export const addEventListenersToNavigation = (container, nav, children) => {
  const forwardSvgs = document.getElementsByClassName(
    'presentation-forward-arrow-container'
  );

  const backwardSvgs = document.getElementsByClassName(
    'presentation-back-arrow-container'
  );

  for (let index = 0; index < forwardSvgs.length; index++) {
    forwardSvgs[index].addEventListener('click', () => {
      goToNextSlide(container, nav, children);
    });

    backwardSvgs[index].addEventListener('click', () => {
      goToPrevSlide(container, nav, children);
    });
  }
};

// FORWARD
const goToNextSlide = (container, nav, children) => {
  console.log('clicked');
  container.scrollLeft = container.clientWidth;

  container.style.scrollBehavior = 'auto';
  //   let childContainer = container.children[0].appendChild(forward.cloneNode(true))

  setTimeout(() => {
    container.children[0].getAttribute('listener');
    container.appendChild(container.children[0].cloneNode(true));
    console.log('children', container.children.length);
    container.removeChild(container.children[0]);
    container.children[container.children.length - 1].addEventListener(
      'click',
      () => {
        goToNextSlide(container, nav, children);
      }
    );
    container.scrollRight = 0;
    container.scrollLeft = 0;
    container.style.scrollBehavior = 'smooth';
  }, 500);
};

// BACKWARD
const goToPrevSlide = (container, nav, children) => {
  //   if (children[currentSlide - 1]) {
  //     console.log('yes');
  //     currentSlide--;
  //     container.scrollLeft = nav[currentSlide];
  //   } else {
  //     console.log('no');
  //   }
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

function addEventListener() {
  console.log('adding event listeners');
}
