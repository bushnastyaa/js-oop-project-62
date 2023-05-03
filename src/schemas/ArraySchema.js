import isArray from '../options/arrayValidator.js';

export default class ArraySchema {
  constructor(checks) {
    this.checks = checks;
  }

  sizeof(length) {
    this.checks.addCheck((value) => value.length === length);
    return this;
  }

  required() {
    this.checks.addCheck((value) => Array.isArray(value));
    return this;
  }

  isValid(value) {
    if (isArray(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
