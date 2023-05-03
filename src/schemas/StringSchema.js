import isString from '../options/stringValidator.js';

export default class StringSchema {
  constructor(checks) {
    this.checks = checks;
  }

  contains(str) {
    this.checks.addCheck((value) => value.includes(str));
    return this;
  }

  required() {
    this.checks.addCheck((value) => !!value?.trim());
    return this;
  }

  minLength(minLength) {
    this.checks.addCheck((value) => value.length >= minLength);
    return this;
  }

  isValid(value) {
    if (isString(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
