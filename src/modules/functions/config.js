import { options } from '../variables/options';
console.log('in the setup config');
export const setupConfig = (config) => {
  if (config) {
    for (const option in config) {
      if (options[option]) {
        if (typeof config[option] === typeof options[option]) {
          options[option] = config[option];
        } else {
          console.error(`invalid value for ${option}`);
        }
      }
    }
  }
};
