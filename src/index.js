import { build } from './modules/build';
import { checkIfContainerExist } from './modules/validators';
import { setupConfig } from './modules/functions/config';

export function start(config) {
  if (!checkIfContainerExist()) {
    return false;
  }
  setupConfig(config);
  build();
}
