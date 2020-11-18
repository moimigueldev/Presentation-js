import { options } from '../variables/options';

export const setupConfig = (config) => {
  if (config) {
    for (const option in config) {
      if (options.hasOwnProperty(option)) {
        if (typeof config[option] === typeof options[option]) {
          options[option] = config[option];
        } else {
          console.error(`invalid value for ${option}`);
        }
      }
    }
  }
};
