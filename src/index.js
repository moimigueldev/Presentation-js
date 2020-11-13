import { build } from './modules/build';
import { validateID, checkIfContainerExist } from './modules/validators';
import { setupConfig } from './modules/functions/config';

export function start(id, config) {
  console.log('validator', checkIfContainerExist());

  if (!validateID(id)) {
    return false;
  }

  setupConfig(config);
  build(id);
}
