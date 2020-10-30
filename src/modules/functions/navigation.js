import { forward, backward } from '../variables/navigation';
import { options } from '../variables/options';

let interval = setInterval(() => {
  goToNextSlide();
}, 3000);

clearInterval(interval);
let masterContainer = undefined;

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
const goToNextSlide = () => {
  masterContainer.scrollLeft += masterContainer.clientWidth;
  masterContainer.style.scrollBehavior = 'auto';
  setTimeout(() => {
    masterContainer.appendChild(masterContainer.children[0].cloneNode(true));

    for (let index = 0; index < masterContainer.children.length; index++) {
      if (masterContainer.children[index] === masterContainer.children[0]) {
      }
    }

    reAttachEventListeners(masterContainer);

    masterContainer.removeChild(masterContainer.children[0]);
    masterContainer.scrollLeft = 0;

    masterContainer.style.scrollBehavior = 'smooth';
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
const goToPrevSlide = () => {
  if (masterContainer.scrollLeft === 0) {
    masterContainer.prepend(
      masterContainer.children[masterContainer.children.length - 1]
    );
    masterContainer.style.scrollBehavior = 'auto';
    masterContainer.scrollLeft = masterContainer.clientWidth;
    masterContainer.style.scrollBehavior = 'smooth';
  }

  masterContainer.scrollLeft -= masterContainer.clientWidth;
};

// ADDS NAVIGATION ICONS TO EACH SLIDE
export const addNavigationSVGs = (el) => {
  el.appendChild(forward.cloneNode(true));
  el.appendChild(backward.cloneNode(true));
};

export const createScrollValues = (container) => {
  addEventListenersToNavigation(container);
};

// ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
export const addClassToChildren = (el) => {
  el.classList.add('container-child');
};

export const startNavigation = (container) => {
  masterContainer = container;
};
