import isNumber from '../options/numberValidator.js';

export default class NumberSchema {
  constructor(checks, newValidators) {
    this.newValidators = newValidators;
    this.checks = checks;
  }

  positive() {
    this.checks.addCheck((value) => {
      if (typeof value !== 'number') {
        return true;
      }
      return value > 0;
    });
    return this;
  }

  required() {
    this.checks.addCheck((value) => typeof value === 'number');
    return this;
  }

  range(min, max) {
    this.checks.addCheck((value) => value >= min && value <= max);
    return this;
  }

  test(name, ...args) {
    const item = this.newValidators.find(
      (validator) => validator.type === 'number' && validator.name === name,
    );
    const newValidator = item.fn;
    this.checks.addCheck((value) => newValidator(value, ...args));
    return this;
  }

  isValid(value) {
    if (isNumber(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
