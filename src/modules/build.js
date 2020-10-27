import { forward, backward } from './variables/navigation';
import { addEventListenerToForwardButtons } from './functions/navigation';

let container = undefined;
const slides = [];
const navigation = [];

const button = document.getElementById('click');

button.addEventListener('click', () => {
  // console.log('currentSlide', currentSlide);
});

// MASTER FUNCTION TO CREATE PRESETATION
export function build(id) {
  container = document.getElementById(id);
  setupPresentation();
  createScrollValues();
}

// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
const setupPresentation = () => {
  container.childNodes.forEach((el) => {
    if (el.dataset !== undefined) {
      if (el.dataset.slide) {
        slides.push(el);
        addClassToChildren(el);
        addNavigationSVGs(el);
      }
    }
  });
};

// ADDS CLASS TO CHILDREN TO CONTAIN IN CAROUSEL
const addClassToChildren = (el) => {
  el.classList.add('container-child');
};

/************************************ */
/*********   NAVIGATION   *********** */
/************************************ */

// ADDS NAVIGATION ICONS TO EACH SLIDE
const addNavigationSVGs = (el) => {
  el.appendChild(forward.cloneNode(true));
  el.appendChild(backward.cloneNode(true));
};

const createScrollValues = () => {
  let scrollWidth = container.scrollWidth;
  let widthPerSlide = scrollWidth / slides.length;
  slides.forEach((el, i) => {
    if (i === 0) {
      navigation.push(0);
    } else {
      navigation.push(widthPerSlide);
      widthPerSlide *= 2;
    }
  });
  addEventListenerToForwardButtons(container, navigation, slides);
};
