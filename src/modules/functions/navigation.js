import { forward, backward, activeSlide } from '../variables/navigation';
import { options } from '../variables/options';
import { presentationContainer } from '../variables/container';

export let slideIntervalSpeed = undefined;
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

const appendChild = (child) => {};

// FORWARD
export const goToNextSlide = () => {
  clearInterval(slideIntervalSpeed);
  activeSlide.slide++;
  if (activeSlide.slide > masterContainer.children.length) {
    activeSlide.slide--;
    const tempChild = masterContainer.children[0].cloneNode(true);
    tempChild.dataset.slide = 'new';
    masterContainer.appendChild(tempChild);
    masterContainer.scrollLeft += masterContainer.clientWidth;
    masterContainer.style.scrollBehavior = 'auto';
    setTimeout(() => {
      masterContainer.scrollLeft = 0;
      masterContainer.removeChild(tempChild);
      masterContainer.style.scrollBehavior = 'smooth';
    }, 600);
    activeSlide.slide = 1;
  } else {
    const query = `[data-slide*="${activeSlide.slide}"]`;
    document.querySelector(query).scrollIntoView(true);
    startSlideInterval();
  }
};

// BACKWARD
export const goToPrevSlide = () => {
  clearInterval(slideIntervalSpeed);
  activeSlide.slide--;
  if (activeSlide.slide === 0) {
    // activeSlide.slide = 6;
    console.log('not doing anything');
    const tempChild = masterContainer.children[
      masterContainer.children.length - 1
    ].cloneNode(true);
    masterContainer.style.scrollBehavior = 'auto';
    console.log('tempChild', tempChild);

    masterContainer.prepend(tempChild);
    masterContainer.scrollLeft += masterContainer.clientWidth;
    masterContainer.style.scrollBehavior = 'smooth';
    masterContainer.scrollLeft = 0;

    setTimeout(() => {
      masterContainer.removeChild(tempChild);
      masterContainer.style.scrollBehavior = 'auto';
      masterContainer.scrollLeft +=
        masterContainer.clientWidth * masterContainer.children.length;
      masterContainer.style.scrollBehavior = 'smooth';
    }, 300);
    activeSlide.slide = masterContainer.children.length;
  } else {
    const query = `[data-slide*="${activeSlide.slide}"]`;
    document.querySelector(query).scrollIntoView(true);
    startSlideInterval();
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

export const startSlideInterval = () => {
  if (options.autoSlide) {
    slideIntervalSpeed = setInterval(() => {
      gotToNextSlide();
    }, options.timer);
  }
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
