var presentation = (function (exports) {
  'use strict';

  const htmlToElement = (html) => {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  };

  const forward = htmlToElement(`<div class="presentation-forward-arrow-container">
<svg class="presentation-navigation presentation-forward" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clip-rule="evenodd"></path>
</svg>
</div>`);

  const backward = htmlToElement(`<div class="presentation-back-arrow-container">
<svg class="presentation-navigation presentation-back" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clip-rule="evenodd"></path>
</svg>
</div>`);

  const activeSlide = { slide: 1 };

  const options = {
    timer: 6000,
    arrows: true,
    autoSlide: true,
    dots: false,
    dotsSize: '13px',
    activeDotColor: 'white',
    inactiveDotColor: 'gray',
    arrowSize: '25px',
    arrowColor: 'beige',
  };

  const presentationContainer = { element: undefined };

  let slideIntervalSpeed = undefined;
  let masterContainer = undefined;

  const startNavigation = () => {
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

  const addEventListenersToNavigation = () => {
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

  const changeScrollBehavior = (behavior) => {
    masterContainer.style.scrollBehavior = behavior;
  };

  const createChild = (position) => {
    if (position === 'first') {
      return masterContainer.children[0].cloneNode(true);
    }

    return masterContainer.children[
      masterContainer.children.length - 1
    ].cloneNode(true);
  };

  const scrollIntoView = (query) => {
    document.querySelector(query).scrollIntoView(true);
  };

  // FORWARD
  const goToNextSlide = () => {
    clearInterval(slideIntervalSpeed);
    activeSlide.slide++;

    if (activeSlide.slide > masterContainer.children.length) {
      activeSlide.slide--;

      const tempChild = createChild('first');
      masterContainer.appendChild(tempChild);
      masterContainer.scrollLeft += masterContainer.clientWidth;
      changeScrollBehavior('auto');

      setTimeout(() => {
        masterContainer.scrollLeft = 0;
        masterContainer.removeChild(tempChild);
        changeScrollBehavior('smooth');
      }, 600);

      activeSlide.slide = 1;
    } else {
      scrollIntoView(`[data-slide*="${activeSlide.slide}"]`);
      startSlideInterval();
    }
  };

  // BACKWARD
  const goToPrevSlide = () => {
    clearInterval(slideIntervalSpeed);
    activeSlide.slide--;

    if (activeSlide.slide === 0) {
      const tempChild = createChild('last');
      changeScrollBehavior('auto');
      masterContainer.prepend(tempChild);
      masterContainer.scrollLeft += masterContainer.clientWidth;
      changeScrollBehavior('smooth');
      masterContainer.scrollLeft = 0;

      setTimeout(() => {
        masterContainer.removeChild(tempChild);
        changeScrollBehavior('auto');
        scrollIntoView(`[data-slide*="${masterContainer.children.length}"]`);
        changeScrollBehavior('smooth');
      }, 600);

      activeSlide.slide = masterContainer.children.length;
    } else {
      scrollIntoView(`[data-slide*="${activeSlide.slide}"]`);
      startSlideInterval();
    }
  };

  // ADDS NAVIGATION ICONS TO EACH SLIDE
  const addNavigationSVGs = (el) => {
    if (options.arrows) {
      el.appendChild(forward.cloneNode(true));
      el.appendChild(backward.cloneNode(true));
    }
  };

  // ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
  const addClassToChildren = (el) => {
    el.classList.add('container-child');
  };

  const startSlideInterval = () => {
    if (options.autoSlide) {
      slideIntervalSpeed = setInterval(() => {
        goToNextSlide();
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

  const dotsContainer = { element: undefined };

  function htmlToElement$1(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const dotsNavigationContainer = htmlToElement$1(
    `<div class="presentation-js-dots-navigation-container" presentation-js-dots-container></div>`
  );

  const dotSVG = htmlToElement$1(`<svg class="presentation-js-navigation-dot" aria-hidden="true" focusable="false"
data-prefix="fas" data-icon="circle" class=" svg-inline--fa fa-circle fa-w-16" role="img"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
</path>
</svg>`);

  let container = undefined;

  const startDotsNavigation = () => {
    if (!options.dots) {
      return false;
    }

    container = presentationContainer.element;
    dotsContainer.element = document.getEle;

    setDotsContainer();
    generateDots();
    injectDots();
    setActiveClassOnDotsContainers();
    setUserConfigs$1();
  };

  const setDotsContainer = () => {
    const presentationContainerChildren = presentationContainer.element.children;
    for (let index = 0; index < presentationContainerChildren.length; index++) {
      if (
        presentationContainerChildren[index].hasAttribute(
          'presentation-js-dots-container'
        )
      ) {
        return (dotsContainer.element = presentationContainerChildren[index]);
      }
    }
  };

  const injectDots = () => {
    for (let index = 0; index < container.children.length; index++) {
      const child = container.children[index];
      child.appendChild(dotsNavigationContainer.cloneNode(true));
    }
  };

  const generateDots = () => {
    const numOfChildren = container.children.length;
    for (let index = 0; index < numOfChildren; index++) {
      const dot = dotSVG;
      dot.setAttribute('slide', index + 1);

      dotsNavigationContainer.appendChild(dot.cloneNode(true));
    }
  };

  const setActiveClassOnDotsContainers = () => {
    const parent = document.getElementsByClassName(
      'presentation-js-dots-navigation-container'
    );

    for (let i = 0; i < parent.length; i++) {
      const child = parent[i].children;
      const currentSlide = i + 1;
      for (let j = 0; j < child.length; j++) {
        if (currentSlide === j + 1) {
          child[j].style.color = options.activeDotColor;
        } else {
          child[j].style.color = options.inactiveDotColor;
        }
      }
    }
  };

  const setUserConfigs$1 = () => {
    const dots = document.getElementsByClassName(
      'presentation-js-navigation-dot'
    );
    for (let i = 0; i < dots.length; i++) {
      dots[i].style.height = options.dotsSize;
      dots[i].style.height = options.dotsSize;
      dots[i].addEventListener('click', () => {
        goToSlide(dots[i]);
      });
    }
  };

  const goToSlide = (el) => {
    clearInterval(slideIntervalSpeed);
    const elDataSlide = el.getAttribute('slide');
    const query = `[data-slide*="${elDataSlide}"]`;

    document.querySelector(query).scrollIntoView(true);

    activeSlide.slide = +elDataSlide;
    startSlideInterval();
  };

  window.onkeydown = (e) => {
    // check for focus
    const isFocused = document.activeElement === presentationContainer.element;

    e = e || window.event;

    if (isFocused && e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextSlide();
    }

    if (isFocused && e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevSlide();
    }
  };

  let container$1 = undefined;

  // MASTER FUNCTION TO CREATE PRESETATION
  function build() {
    container$1 = presentationContainer.element;

    addClassToContainer();
    addFocusToContainer();
    setupPresentation();
    startNavigation();
    startDotsNavigation();
  }

  // MASTER LOOP TO SETUP PRESENTATION CAROUSEL
  const setupPresentation = () => {
    for (let i = 0; i < container$1.children.length; i++) {
      let child = container$1.children[i];
      if (child.dataset.slide) {
        addClassToChildren(child);
        addNavigationSVGs(child);
      } else {
        if (
          child.classList.value !== 'presentation-js-dots-navigation-container'
        ) {
          container$1.removeChild(child);
        }
      }
    }
  };

  const addClassToContainer = () =>
    container$1.classList.add('presentation-js-setup');

  const addFocusToContainer = () => container$1.setAttribute('tabindex', 1);

  const checkIfContainerExist = () => {
    const documentChildren = document.body.children;

    for (let index = 0; index < documentChildren.length; index++) {
      if (documentChildren[index].hasAttribute('presentation-js')) {
        presentationContainer.element = documentChildren[index];
        return true;
      } else {
        console.error(
          'Please provide a container with the attribute: presentation-js'
        );
        return false;
      }
    }
  };

  const setupConfig = (config) => {
    if (config) {
      for (const option in config) {
        if (options.hasOwnProperty(option)) {
          if (typeof config[option] === typeof options[option]) {
            options[option] = config[option];
          } else {
            console.error(`invalid value for ${option}`);
          }
        }
      }
    }
  };

  function start(config) {
    if (!checkIfContainerExist()) {
      return false;
    }

    setupConfig(config);
    build();
  }

  exports.start = start;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
