import { presentationContainer } from '../variables/container';
import { goToNextSlide, goToPrevSlide } from './navigation';

window.onkeydown = (e) => {
  // check for focus
  const isFocused = document.activeElement === presentationContainer.element;

  e = e || window.event;

  if (isFocused && e.key === 'ArrowRight') {
    e.preventDefault();
    goToNextSlide();
  }

  if (isFocused && e.key === 'ArrowLeft') {
    e.preventDefault();
    goToPrevSlide();
  }
};
