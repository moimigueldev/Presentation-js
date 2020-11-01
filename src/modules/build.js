import {
  addNavigationSVGs,
  createScrollValues,
  startNavigation,
  addClassToChildren,
} from './functions/navigation';

import { options } from './variables/options';
console.log('optikons', options);

let container = undefined;

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
    let child = container.children[i];
    if (child.dataset.slide) {
      addClassToChildren(child);

      if (options.arrows) {
        addNavigationSVGs(child);
      }
    } else {
      container.removeChild(child);
    }
  }
};
