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

  Element.prototype.insertChildAtIndex = function (child, index) {
    if (!index) index = 0;
    if (index >= this.children.length) {
      this.appendChild(child);
    } else {
      this.insertBefore(child, this.children[index]);
    }
  };

  const addEventListenersToNavigation = (container, nav, children) => {
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
          goToNextSlide(container);
        }
      );
      container.scrollRight = 0;
      container.scrollLeft = 0;
      container.style.scrollBehavior = 'smooth';
    }, 500);
  };

  // ADDS NAVIGATION ICONS TO EACH SLIDE
  const addNavigationSVGs = (el) => {
    el.appendChild(forward.cloneNode(true));
    el.appendChild(backward.cloneNode(true));
  };

  const createScrollValues = (container) => {
    let scrollWidth = container.scrollWidth;
    addEventListenersToNavigation(container);
  };

  let container = undefined;

  const button = document.getElementById('click');

  button.addEventListener('click', () => {
    // console.log('currentSlide', currentSlide);
  });

  // MASTER FUNCTION TO CREATE PRESETATION
  function build(id) {
    container = document.getElementById(id);
    setupPresentation();
    createScrollValues(container);
  }

  // MASTER LOOP TO SETUP PRESENTATION CAROUSEL
  const setupPresentation = () => {
    for (let i = 0; i < container.children.length; i++) {
      // console.log('children', container.children[i].dataset.slide);
      let child = container.children[i];
      if (child.dataset.slide) {
        addClassToChildren(child);
        addNavigationSVGs(child);
      } else {
        container.removeChild(child);
      }
    }
  };

  // ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
  const addClassToChildren = (el) => {
    el.classList.add('container-child');
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
