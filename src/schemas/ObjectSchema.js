import { isObject, checkObject } from '../options/objectValidator.js';

export default class ObjectSchema {
  constructor() {
    this.options = {
      shape: {},
    };
  }

  shape(options = {}) {
    if (!checkObject(options)) {
      return this;
    }
    this.options.shape = options;
    return this;
  }

  isValid(object) {
    if (isObject(object)) {
      return Object.keys(this.options.shape).every((key) => {
        const value = object[key];
        return this.options.shape[key].isValid(value);
      });
    }
    return false;
  }
}
