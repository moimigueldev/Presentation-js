import { presentationContainer } from '../variables/container';
import { goToNextSlide, goToPrevSlide } from './navigation';

// Matches the same amount of time it takes to transition
let canTransition = true;

window.onkeydown = (e) => {
  e.preventDefault();

  // check for focus
  const isFocused = document.activeElement === presentationContainer.element;

  e = e || window.event;

  if (isFocused && e.key === 'ArrowRight' && canTransition) {
    goToNextSlide();
    canTransition = false;
    setTimeout(() => {
      canTransition = true;
    }, 600);
  }

  if (isFocused && e.key === 'ArrowLeft' && canTransition) {
    goToPrevSlide();
    canTransition = false;
    setTimeout(() => {
      canTransition = true;
    }, 600);
  }
};
