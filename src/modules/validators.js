export function validateID(id) {
  const container = document.getElementById(id);
  if (container && container !== undefined) {
    return true;
  } else {
    console.error('Presentation requires a valid ID');
    return false;
  }
}

export const checkIfContainerExist = () => {
  console.log('checking');
  const documentChildren = document.body.children;

  for (let index = 0; index < documentChildren.length; index++) {
    if (documentChildren[index].hasAttribute('presentation-js')) {
      return true;
    } else {
      console.error(
        'Please provide a container with the attribut: presentation-js'
      );
      return false;
    }
  }
};
