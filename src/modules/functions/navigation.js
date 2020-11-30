import { forward, backward, activeSlide } from '../variables/navigation';
import { options } from '../variables/options';
import { presentationContainer } from '../variables/container';
import { reAttachEventListenersToDots } from './dotsNavigation';

let slideIntervalSpeed = undefined;
let masterContainer = undefined;

export const startNavigation = () => {
  masterContainer = presentationContainer.element;
  options.autoSlide ? startSlideInterval() : false;
  addEventListenersToNavigation();
  setUserConfigs();
};

Element.prototype.insertChildAtIndex = function (child, index) {
  if (!index) index = 0;
  if (index >= this.children.length) {
    this.appendChild(child);
  } else {
    this.insertBefore(child, this.children[index]);
  }
};

export const addEventListenersToNavigation = () => {
  const forwardSvgs = document.getElementsByClassName(
    'presentation-forward-arrow-container'
  );

  const backwardSvgs = document.getElementsByClassName(
    'presentation-back-arrow-container'
  );

  for (let index = 0; index < forwardSvgs.length; index++) {
    forwardSvgs[index].addEventListener('click', () => {
      goToNextSlide();
    });

    backwardSvgs[index].addEventListener('click', () => {
      goToPrevSlide();
    });
  }
};

// FORWARD
/*
  timer parameter is there to make sure
  the slide does not animate when the user uses the dots navigation
*/
export const goToNextSlide = () => {
  activeSlide.slide++;
  if (activeSlide.slide > masterContainer.children.length) {
    activeSlide.slide = 1;
  }
  const query = `[data-slide*="${activeSlide.slide}"]`;
  document.querySelector(query).scrollIntoView(true);
};
// export const goToNextSlide = (timer) => {
//   setActiveSlide('next');
//   clearInterval(slideIntervalSpeed);
//   masterContainer.scrollLeft += masterContainer.clientWidth;
//   masterContainer.style.scrollBehavior = 'auto';

//   setTimeout(
//     () => {
//       masterContainer.appendChild(masterContainer.children[0].cloneNode(true));
//       reAttachEventListeners();
//       masterContainer.removeChild(masterContainer.children[0]);
//       masterContainer.scrollLeft = 0;
//       masterContainer.style.scrollBehavior = 'smooth';
//       reAttachEventListenersToDots('next');
//     },
//     timer ? timer : 600
//   );
//   options.autoSlide ? startSlideInterval() : false;
// };

// BACKWARD
export const goToPrevSlide = () => {
  activeSlide.slide--;
  if (activeSlide.slide === 0) {
    activeSlide.slide = 6;
  }
  const query = `[data-slide*="${activeSlide.slide}"]`;
  document.querySelector(query).scrollIntoView(true);
};
// // BACKWARD
// export const goToPrevSlide = () => {
//   setActiveSlide('prev');

//   clearInterval(slideIntervalSpeed);

//   if (masterContainer.scrollLeft === 0) {
//     masterContainer.prepend(
//       masterContainer.children[masterContainer.children.length - 1]
//     );
//     masterContainer.style.scrollBehavior = 'auto';
//     masterContainer.scrollLeft = masterContainer.clientWidth;
//     masterContainer.style.scrollBehavior = 'smooth';
//   }

//   masterContainer.scrollLeft -= masterContainer.clientWidth;
//   options.autoSlide ? startSlideInterval() : false;
//   reAttachEventListenersToDots('next');
// };

const reAttachEventListeners = () => {
  let lastChild = masterContainer.children[masterContainer.children.length - 1];
  for (let index = 0; index < lastChild.children.length; index++) {
    if (
      lastChild.children[index].classList[0] ===
      'presentation-forward-arrow-container'
    ) {
      lastChild.children[index].addEventListener('click', () => {
        goToNextSlide();
      });
    }

    if (
      lastChild.children[index].classList[0] ===
      'presentation-back-arrow-container'
    ) {
      lastChild.children[index].addEventListener('click', () => {
        goToPrevSlide();
      });
    }
  }
};

// ADDS NAVIGATION ICONS TO EACH SLIDE
export const addNavigationSVGs = (el) => {
  if (options.arrows) {
    el.appendChild(forward.cloneNode(true));
    el.appendChild(backward.cloneNode(true));
  }
};

// ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
export const addClassToChildren = (el) => {
  el.classList.add('container-child');
};

const startSlideInterval = () => {
  slideIntervalSpeed = setInterval(() => {
    goToNextSlide();
  }, options.timer);
};

const setUserConfigs = () => {
  const arrows = document.getElementsByClassName('presentation-navigation');
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.height = options.arrowSize;
    arrows[i].style.color = options.arrowColor;
  }
};

export const setActiveSlide = (action) => {
  const containerChildLength = masterContainer.children.length;

  if (action === 'next') {
    activeSlide.slide =
      activeSlide.slide === containerChildLength ? 1 : activeSlide.slide + 1;
  } else {
    activeSlide.slide =
      activeSlide.slide === 1 ? containerChildLength : activeSlide.slide - 1;
  }
};
