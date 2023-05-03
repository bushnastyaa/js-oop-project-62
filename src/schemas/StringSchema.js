import isString from '../options/stringValidator.js';

export default class StringSchema {
  constructor(checks, newValidators) {
    this.newValidators = newValidators;
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

  test(name, ...args) {
    const item = this.newValidators.find(
      (validator) => validator.type === 'string' && validator.name === name,
    );
    const newValidator = item.fn;
    this.checks.addCheck((value) => newValidator(value, ...args));
    return this;
  }

  isValid(value) {
    if (isString(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
