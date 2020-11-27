import {
  addNavigationSVGs,
  startNavigation,
  addClassToChildren,
} from './functions/navigation';

import { startDotsNavigation } from './functions/dotsNavigation';

import { presentationContainer } from '../modules/variables/container';

// this file needs to stay here imported.
import * as checkKeyPress from './functions/keyNavigation';

let container = undefined;

// MASTER FUNCTION TO CREATE PRESETATION
export function build() {
  container = presentationContainer.element;

  addClassToContainer();
  addFocusToContainer();
  setupPresentation();
  startNavigation();
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

const addClassToContainer = () =>
  container.classList.add('presentation-js-setup');

const addFocusToContainer = () => container.setAttribute('tabindex', 1);
