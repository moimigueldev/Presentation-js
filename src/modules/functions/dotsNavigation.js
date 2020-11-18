import { options } from '../variables/options';
import { presentationContainer } from '../variables/container';
import { dotsContainer } from '../variables/dots';

let container = undefined;

export const startDotsNavigation = () => {
  if (!options.dots) {
    return false;
  }
  container = presentationContainer.element;
  dotsContainer.element = document.getEle;
  setDotsContainer();
  positionContainer();
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

const positionContainer = () => {
  const height = container.offsetHeight;
  const width = container.offsetWidth;
  dotsContainer.element.style.marginTop = `${height * 0.9}px`;
  dotsContainer.element.style.marginLeft = `${width / 4}px`;
  console.log('dotsContainer', height);
};
