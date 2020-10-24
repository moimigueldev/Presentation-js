var presentation = (function (exports) {
  'use strict';

  function build(id) {
    const container = document.getElementById(id);
    loopChildNodes(container);
  }

  function loopChildNodes(container) {
    console.log('checking for kids', container.childNodes);
    container.childNodes.forEach((x) => {
      if (x.dataset !== undefined) {
        if (x.dataset.slide) {
          console.log('x', x.classList);
          x.classList.add('container-child');
        }
      }
    });
  }

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
