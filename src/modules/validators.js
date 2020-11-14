import { presentationContainer } from './variables/container';

export const checkIfContainerExist = () => {
  const documentChildren = document.body.children;

  for (let index = 0; index < documentChildren.length; index++) {
    if (documentChildren[index].hasAttribute('presentation-js')) {
      presentationContainer.element = documentChildren[index];
      return true;
    } else {
      console.error(
        'Please provide a container with the attribute: presentation-js'
      );
      return false;
    }
  }
};
