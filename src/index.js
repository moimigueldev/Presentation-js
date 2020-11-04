import { build } from './modules/build';
import { validateID } from './modules/validators';
import { setupConfig } from './modules/functions/config';

export function start(id, config) {
  if (!validateID(id)) {
    return false;
  }

  setupConfig(config);
  build(id);
}
