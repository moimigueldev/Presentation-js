import { options } from '../variables/options';
import { presentationContainer } from '../variables/container';
import {
  dotsContainer,
  dotsNavigationContainer,
  dotSVG,
} from '../variables/dots';

let container = undefined;

export const startDotsNavigation = () => {
  if (!options.dots) {
    return false;
  }
  container = presentationContainer.element;
  dotsContainer.element = document.getEle;

  setDotsContainer();
  generateDots();
  injectDots();
  setActiveClassOnDotsContainers();
};

const setDotsContainer = () => {
  const presentationContainerChildren = presentationContainer.element.children;
  for (let index = 0; index < presentationContainerChildren.length; index++) {
    if (
      presentationContainerChildren[index].hasAttribute(
        'presentation-js-dots-container'
      )
    ) {
      return (dotsContainer.element = presentationContainerChildren[index]);
    }
  }
};

const injectDots = () => {
  for (let index = 0; index < container.children.length; index++) {
    const child = container.children[index];
    child.appendChild(dotsNavigationContainer.cloneNode(true));
  }
};

const generateDots = () => {
  const numOfChildren = container.children.length;
  for (let index = 0; index < numOfChildren; index++) {
    dotsNavigationContainer.appendChild(dotSVG.cloneNode(true));
  }
};

const setActiveClassOnDotsContainers = () => {
  const parent = document.getElementsByClassName(
    'presentation-js-dots-navigation-container'
  );

  for (let i = 0; i < parent.length; i++) {
    const child = parent[i].children;
    const currentSlide = i + 1;
    console.log('slide', currentSlide);
    for (let j = 0; j < child.length; j++) {
      if (currentSlide === j + 1) {
        child[j].style.color = 'white';
      } else {
        child[j].style.color = 'gray';
      }
    }
  }
};
