import { options } from './modules/config';
import { build } from './modules/build';
import { validateID } from './modules/validators';

export function start(id) {
  if (!validateID(id)) {
    return false;
  }

  build(id);
}
