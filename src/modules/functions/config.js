import { options } from '../variables/options';

export const setupConfig = (config) => {
  if (config) {
    console.log('config', config);
    for (const option in config) {
      console.log('option', option);
      if (options[option]) {
        if (typeof config[option] === typeof options[option]) {
          console.log('options', options[option], option);
          options[option] = config[option];
        } else {
          console.error(`invalid value for ${option}`);
        }
      }
    }
  }
};
