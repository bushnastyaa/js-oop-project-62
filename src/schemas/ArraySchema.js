import isArray from '../options/arrayValidator.js';

export default class ArraySchema {
  constructor(checks, newValidators) {
    this.newValidators = newValidators;
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

  test(name, ...args) {
    const item = this.newValidators.find(
      (validator) => validator.type === 'array' && validator.name === name,
    );
    const newValidator = item.fn;
    this.checks.addCheck((value) => newValidator(value, ...args));
    return this;
  }

  isValid(value) {
    if (isArray(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
