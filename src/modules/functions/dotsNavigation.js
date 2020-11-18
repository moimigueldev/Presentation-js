import { options } from '../variables/options';

export const startDotsNavigation = () => {
  console.log('starting dots navigation', options.dots);
  if (options.dots) {
    console.log('true');
  } else {
    console.log('false');
  }
};
