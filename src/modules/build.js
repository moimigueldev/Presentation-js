import {
  addNavigationSVGs,
  createScrollValues,
  startNavigation,
  addClassToChildren,
} from './functions/navigation';

import { presentationContainer } from '../modules/variables/container';

// import { setupConfig } from './functions/config';

let container = undefined;

// MASTER FUNCTION TO CREATE PRESETATION
export function build() {
  container = presentationContainer.element;

  // setupConfig();
  startNavigation(container);
  setupPresentation();
  createScrollValues();
}

// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
const setupPresentation = () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    if (child.dataset.slide) {
      addClassToChildren(child);
      addNavigationSVGs(child);
    } else {
      container.removeChild(child);
    }
  }
};
