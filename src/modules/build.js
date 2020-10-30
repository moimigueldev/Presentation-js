import {
  addEventListenersToNavigation,
  addNavigationSVGs,
  createScrollValues,
  addToSlides,
} from './functions/navigation';

let container = undefined;

const button = document.getElementById('click');

button.addEventListener('click', () => {
  // console.log('currentSlide', currentSlide);
});

// MASTER FUNCTION TO CREATE PRESETATION
export function build(id) {
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
      addToSlides(child);
    } else {
      container.removeChild(child);
    }
  }

  addImageToFront();
};

const addImageToFront = () => {
  // console.log('hello');
  // container.prepend(
  //   container.children[container.children.length - 1].cloneNode(true)
  // );
  // container.style.scrollBehavior = 'auto';
  // container.scrollLeft = container.clientWidth;
  // container.style.scrollBehavior = 'smooth';
};

// ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
const addClassToChildren = (el) => {
  el.classList.add('container-child');
};
