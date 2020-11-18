import { options } from '../variables/options';

export const startDotsNavigation = () => {
  if (options.dots) {
    console.log('true');
  } else {
    console.log('false');
  }
};
