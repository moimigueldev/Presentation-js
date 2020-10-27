let currentSlide = 0;

export const addEventListenerToForwardButtons = (container, nav, children) => {
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
