var presentation = (function (exports) {
  'use strict';

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

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

  let currentSlide = 0;

  const addEventListenerToForwardButtons = (container, nav, children) => {
    const elements = document.getElementsByClassName(
      'presentation-forward-arrow-container'
    );

    for (let index = 0; index < elements.length; index++) {
      elements[index].addEventListener('click', () => {
        goToNextSlide(container, nav, children);
      });
    }
  };

  const goToNextSlide = (container, nav, children) => {
    Element.prototype.insertChildAtIndex = function (child, index) {
      if (!index) index = 0;
      if (index >= this.children.length) {
        this.appendChild(child);
      } else {
        this.insertBefore(child, this.children[index]);
      }
    };

    if (children[currentSlide + 1]) {
      currentSlide++;
      container.scrollLeft = nav[currentSlide];
    } else {
      let tempChildren = children.splice(0, children.length - 1);
      children = children.concat(tempChildren);
      // container.childNodes = children;
      console.log('children', children);
      console.log('conainer', container.childNodes[5].dataset.slide);
      container.removeChild(container.childNodes[5]);
      container.insertChildAtIndex(children[1], 5);
      // container.childNodes[5] = children[1];

      container.childnore;

      // currentSlide = 1;
      // container.scrollLeft = nav[currentSlide];
      // currentSlide++;
    }

    //   console.log('currentSlide', curr);

    //   container.scrollLeft = 1133;
  };

  let container = undefined;
  const slides = [];
  const navigation = [];

  const button = document.getElementById('click');

  button.addEventListener('click', () => {
    // console.log('currentSlide', currentSlide);
  });

  // MASTER FUNCTION TO CREATE PRESETATION
  function build(id) {
    container = document.getElementById(id);
    setupPresentation();
    createScrollValues();
  }

  // MASTER LOOP TO SETUP PRESENTATION CAROUSEL
  const setupPresentation = () => {
    container.childNodes.forEach((el) => {
      if (el.dataset !== undefined) {
        if (el.dataset.slide) {
          slides.push(el);
          addClassToChildren(el);
          addNavigationSVGs(el);
        }
      }
    });
  };

  // ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
  const addClassToChildren = (el) => {
    el.classList.add('container-child');
  };

  /************************************ */
  /*********   NAVIGATION   *********** */
  /************************************ */

  // ADDS NAVIGATION ICONS TO EACH SLIDE
  const addNavigationSVGs = (el) => {
    el.appendChild(forward.cloneNode(true));
    el.appendChild(backward.cloneNode(true));
  };

  const createScrollValues = () => {
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
    addEventListenerToForwardButtons(container, navigation, slides);
  };

  function validateID(id) {
    const container = document.getElementById(id);
    if (container && container !== undefined) {
      return true;
    } else {
      console.error('Presentation requires a valid ID');
      return false;
    }
  }

  function start(id) {
    if (!validateID(id)) {
      return false;
    }

    build(id);
  }

  exports.start = start;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
