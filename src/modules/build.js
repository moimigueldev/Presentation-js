import {
  addNavigationSVGs,
  createScrollValues,
  startNavigation,
  addClassToChildren,
} from './functions/navigation';

let container = undefined;

const button = document.getElementById('click');

button.addEventListener('click', () => {
  // console.log('currentSlide', currentSlide);
});

// MASTER FUNCTION TO CREATE PRESETATION
export function build(id) {
  container = document.getElementById(id);
  // setupConfig(options);
  startNavigation(container);
  setupPresentation();
  createScrollValues();
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
