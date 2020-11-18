import {
  addNavigationSVGs,
  createScrollValues,
  startNavigation,
  addClassToChildren,
} from './functions/navigation';

import { startDotsNavigation } from './functions/dotsNavigation';

import { presentationContainer } from '../modules/variables/container';

let container = undefined;

// MASTER FUNCTION TO CREATE PRESETATION
export function build() {
  container = presentationContainer.element;

  addClassToContainer();
  startNavigation();
  setupPresentation();
  createScrollValues();
  startDotsNavigation();
}

// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
const setupPresentation = () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    if (child.dataset.slide) {
      addClassToChildren(child);
      addNavigationSVGs(child);
    } else {
      if (
        child.classList.value !== 'presentation-js-dots-navigation-container'
      ) {
        container.removeChild(child);
      }
    }
  }
};

const addClassToContainer = () => {
  container.classList.add('presentation-js-setup');
};
