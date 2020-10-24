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

  let container = undefined;
  const slides = [];

  const button = document.getElementById('click');

  button.addEventListener('click', () => {
    console.log('click');
    container.scrollLeft += '1150';
    //   slides[0].classList.add('slidein');
  });

  function build(id) {
    container = document.getElementById(id);

    addSlidesToArray();
    addNavigation();
  }

  const addSlidesToArray = () => {
    container.childNodes.forEach((el) => {
      if (el.dataset !== undefined) {
        if (el.dataset.slide) {
          slides.push(el);
          el.classList.add('container-child');
        }
      }
    });
  };

  const addNavigation = () => {
    slides.forEach((x) => {
      x.appendChild(forward.cloneNode(true));
      x.appendChild(backward.cloneNode(true));
    });
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
})({});
