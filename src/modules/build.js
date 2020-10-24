import { forward, backward } from './variables/navigation';
let container = undefined;
const slides = [];

const button = document.getElementById('click');

button.addEventListener('click', () => {
  console.log('click');
  container.scrollRight += '1160';
  //   slides[0].classList.add('slidein');
});

export function build(id) {
  container = document.getElementById(id);

  addSlidesToArray();
  addNavigation();
}

const addSlidesToArray = () => {
  container.childNodes.forEach((el) => {
    if (el.dataset !== undefined) {
      if (el.dataset.slide) {
        slides.push(el);
        el.classList.add('container-child');
      }
    }
  });
};

const addNavigation = () => {
  slides.forEach((x) => {
    x.appendChild(forward.cloneNode(true));
    x.appendChild(backward.cloneNode(true));
  });
};

function addClassToImages(container) {
  container.childNodes.forEach((x) => {
    if (x.dataset !== undefined) {
      if (x.dataset.slide) {
        x.id = `presentationSlide${x.dataset.slide}`;
        el = x;
        x.classList.add('container-child');
      }
    }
  });
}

function addIDsToSliders(container) {}
